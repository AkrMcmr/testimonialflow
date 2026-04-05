import { readDb } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const db = await readDb();
    const project = db.projects.find(p => p.slug === slug);
    const testimonials = project
      ? db.testimonials
          .filter(t => t.project_id === project.id && t.approved === 1)
          .sort((a, b) => b.created_at.localeCompare(a.created_at))
          .slice(0, 20)
          .map(({ name, role, text, rating }) => ({ name, role, text, rating }))
      : [];

    const js = `(function(){
  var d=document,c=d.getElementById("tf-widget-${slug}");
  if(!c)return;
  var t=${JSON.stringify(testimonials)};
  if(!t.length){c.innerHTML='<p style="color:#999;font-size:14px;text-align:center">No testimonials yet.</p>';return;}
  var s=d.createElement("style");
  s.textContent=\`
    .tf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;font-family:-apple-system,BlinkMacSystemFont,sans-serif}
    .tf-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px}
    .tf-stars{color:#facc15;font-size:16px;letter-spacing:2px}
    .tf-text{color:#374151;font-size:14px;line-height:1.5;margin:8px 0 12px}
    .tf-name{font-size:13px;font-weight:600;color:#111827}
    .tf-role{font-size:12px;color:#6b7280}
    .tf-badge{margin-top:12px;text-align:right}
    .tf-badge a{font-size:11px;color:#a78bfa;text-decoration:none}
    .tf-badge a:hover{text-decoration:underline}
  \`;
  d.head.appendChild(s);
  var h='<div class="tf-grid">';
  t.forEach(function(i){
    var stars="";for(var x=0;x<(i.rating||5);x++)stars+="\\u2605";
    h+='<div class="tf-card">'
      +'<div class="tf-stars">'+stars+'</div>'
      +'<div class="tf-text">\\u201c'+i.text+'\\u201d</div>'
      +'<div class="tf-name">'+i.name+'</div>'
      +(i.role?'<div class="tf-role">'+i.role+'</div>':'')
      +'<div class="tf-badge"><a href="https://testimonialflow-kappa.vercel.app" target="_blank">Powered by TestimonialFlow</a></div>'
      +'</div>';
  });
  h+='</div>';
  c.innerHTML=h;
})();`;

    return new NextResponse(js, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    return new NextResponse(`console.error("TestimonialFlow error: ${String(e)}")`, {
      headers: { "Content-Type": "application/javascript" },
      status: 500,
    });
  }
}
