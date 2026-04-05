import { readDb } from "@/lib/db";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await readDb();
  const project = db.projects.find(p => p.slug === slug);
  if (!project) return {};

  const count = db.testimonials.filter(
    t => t.project_id === project.id && t.approved === 1
  ).length;

  return {
    title: `${project.name} — Wall of Love | TestimonialFlow`,
    description: `See what ${count} customer${count !== 1 ? "s" : ""} say about ${project.name}. Real testimonials collected with TestimonialFlow.`,
    openGraph: {
      title: `${project.name} — Wall of Love`,
      description: `${count} real customer testimonial${count !== 1 ? "s" : ""} for ${project.name}.`,
      type: "website",
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function WallPage({ params }: Props) {
  const { slug } = await params;
  const db = await readDb();
  const project = db.projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const testimonials = db.testimonials
    .filter(t => t.project_id === project.id && t.approved === 1)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const avgRating =
    testimonials.length > 0
      ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
      : 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {project.name}
          </h1>
          <p className="mt-2 text-gray-500 text-sm">Wall of Love</p>
          {testimonials.length > 0 && (
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(avgRating) ? "text-yellow-400" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {avgRating.toFixed(1)} from {testimonials.length} review{testimonials.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Testimonials Grid */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No testimonials yet.</p>
            <p className="text-gray-400 text-sm mt-2">
              Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {testimonials.map(t => (
              <div
                key={t.id}
                className="break-inside-avoid bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
              >
                <StarRating rating={t.rating} />
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    {t.role && <p className="text-xs text-gray-500">{t.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-violet-50 border-t border-violet-100 py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Want a Wall of Love for your business?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Collect testimonials and create your own shareable wall in 2 minutes. Free to start.
          </p>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-all"
          >
            Create Your Wall of Love
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-400">
        Powered by{" "}
        <a
          href="/"
          className="underline hover:text-gray-600"
        >
          TestimonialFlow
        </a>{" "}
        — Collect testimonials. Embed anywhere. In 2 minutes.
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${project.name} — Wall of Love`,
            description: `Customer testimonials for ${project.name}`,
            ...(testimonials.length > 0 && {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: avgRating.toFixed(1),
                reviewCount: testimonials.length,
                bestRating: 5,
              },
            }),
          }),
        }}
      />
    </main>
  );
}
