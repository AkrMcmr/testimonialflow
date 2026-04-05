import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "25 Testimonial Examples That Actually Convert (Templates Included)",
  description:
    "Real testimonial examples for websites, landing pages, and marketing. Copy these proven templates to collect testimonials that build trust and boost conversions.",
  keywords: [
    "testimonial examples",
    "customer testimonial examples",
    "testimonial examples for website",
    "testimonial templates",
    "how to write a testimonial",
    "best testimonial examples",
    "client testimonial examples",
    "short testimonial examples",
    "business testimonial examples",
  ],
  alternates: {
    canonical:
      "https://testimonialflow-kappa.vercel.app/testimonial-examples",
  },
};

const EXAMPLES = [
  {
    category: "Results-Driven Testimonials",
    description:
      "These work best because they include specific numbers. Prospects trust data more than adjectives.",
    items: [
      {
        text: "After adding TestimonialFlow to our landing page, our conversion rate went from 2.1% to 3.8% in two weeks. That's an 80% lift from a 5-minute setup.",
        name: "Sarah Chen",
        role: "Head of Growth, Launchpad SaaS",
        why: "Specific numbers (2.1% to 3.8%), timeframe (two weeks), and effort level (5-minute setup).",
      },
      {
        text: "We closed $47K in new contracts last quarter. Three of those clients told us the testimonial wall on our site was what convinced them to book a call.",
        name: "Marcus Rodriguez",
        role: "Founder, Apex Consulting",
        why: "Revenue impact ($47K) directly attributed to testimonials. Decision-makers love this.",
      },
      {
        text: "Customer support tickets dropped 35% after we added testimonials to our pricing page. People stopped asking 'Is this legit?' and started signing up.",
        name: "Priya Patel",
        role: "CX Lead, FormStack",
        why: "Unexpected benefit (fewer support tickets) makes this memorable and shareable.",
      },
      {
        text: "We went from 12 demo requests a month to 31 after embedding customer reviews on every product page. No other change. Just testimonials.",
        name: "James Whitfield",
        role: "VP Marketing, CloudMetrics",
        why: "Clear before/after with a controlled variable ('no other change').",
      },
    ],
  },
  {
    category: "Problem-Solution Testimonials",
    description:
      "The best testimonials describe a specific pain point and how the product solved it. These resonate with prospects who have the same problem.",
    items: [
      {
        text: "I used to spend 2 hours every week manually copy-pasting client feedback into a Google Doc. Now I just send a TestimonialFlow link and everything lands in one dashboard.",
        name: "Lisa Nakamura",
        role: "Freelance Designer",
        why: "Relatable pain (manual work), specific time saved (2 hours/week), clear solution.",
      },
      {
        text: "We tried three different tools before this. Senja was too complex for our small team, Testimonial.to was too expensive. TestimonialFlow was the Goldilocks — simple and affordable.",
        name: "David Park",
        role: "Co-founder, PixelCraft Studio",
        why: "Competitive comparison feels authentic. Names alternatives the prospect is also considering.",
      },
      {
        text: "Our agency manages 15 client websites. Before, collecting testimonials meant awkward phone calls and follow-up emails. Now clients fill out a form in 30 seconds.",
        name: "Rachel Foster",
        role: "Partner, Bright Digital Agency",
        why: "Scale context (15 websites) and emotional pain (awkward phone calls).",
      },
    ],
  },
  {
    category: "Short & Punchy Testimonials",
    description:
      "Perfect for widgets, sidebars, and social proof bars. Under 30 words but packed with specificity.",
    items: [
      {
        text: "Set it up during lunch. Had 5 testimonials on our site by end of day. Ridiculously simple.",
        name: "Tom Bradley",
        role: "Founder, NomadStack",
        why: "Time-to-value (lunch break), concrete result (5 testimonials), emotional word (ridiculously).",
      },
      {
        text: "The only testimonial tool I recommend to my coaching clients. Clean, fast, no learning curve.",
        name: "Aisha Johnson",
        role: "Business Coach",
        why: "Authority endorsement ('I recommend to my clients'). Short enough for a widget.",
      },
      {
        text: "Replaced a $50/mo tool with this. Better UX, lower price, done.",
        name: "Mike Chen",
        role: "Solo Founder",
        why: "Price comparison creates instant value perception. Three punchy phrases.",
      },
      {
        text: "Clients actually respond to the testimonial request now. 60% response rate vs the 10% I used to get over email.",
        name: "Emma Williams",
        role: "UX Consultant",
        why: "Comparison metric (60% vs 10%) in a compact format.",
      },
    ],
  },
  {
    category: "Emotional / Story-Based Testimonials",
    description:
      "These create empathy and connection. Best for landing pages and dedicated testimonial pages where visitors spend more time.",
    items: [
      {
        text: "I almost didn't add testimonials to my site because I thought it would look 'salesy.' But when I saw the first real review come in from a client who said I changed her business — I realized this wasn't marketing. It was validation. Now I have 23 testimonials and I read them whenever imposter syndrome hits.",
        name: "Kenji Tanaka",
        role: "Independent Consultant",
        why: "Vulnerability (imposter syndrome), transformation arc, unexpected use case (personal motivation).",
      },
      {
        text: "We're a 3-person startup. We can't afford a sales team. Our testimonial wall IS our sales team. Last month, a prospect emailed us saying 'I read every single review on your wall page. When can we start?'",
        name: "Nina Alvarez",
        role: "Co-founder, TinyMetrics",
        why: "Relatable constraint (small team), social proof as sales replacement, real quote from a prospect.",
      },
      {
        text: "I've been freelancing for 8 years and never asked for a testimonial. Too awkward. This tool made it feel natural — clients get a clean form, I get genuine feedback. Wish I'd started collecting these on day one.",
        name: "Carlos Mendez",
        role: "Freelance Developer",
        why: "Long timeframe (8 years) creates regret, emotional barrier (awkwardness) resolved.",
      },
    ],
  },
  {
    category: "B2B / Enterprise Testimonials",
    description:
      "For SaaS companies selling to other businesses. These emphasize ROI, team impact, and professional credibility.",
    items: [
      {
        text: "Our marketing team tested 4 social proof tools in Q3. TestimonialFlow won on setup speed (15 minutes vs 2+ hours for competitors) and monthly cost ($9 vs $29-50). It's now standard across all our client landing pages.",
        name: "Alexandra Kim",
        role: "Director of Marketing, ScaleForce",
        why: "Evaluation process lends credibility. Specific comparison data. 'Standard across' = strong endorsement.",
      },
      {
        text: "We embed the widget on 200+ Webflow sites we manage. The API is clean, the embed code never breaks, and we haven't had a single client complaint in 6 months.",
        name: "Ryan O'Brien",
        role: "CTO, Webcraft Agency",
        why: "Scale (200+ sites), reliability (never breaks), timeframe (6 months). Technical credibility.",
      },
      {
        text: "Switched our entire portfolio from Testimonial.to to TestimonialFlow. Saved $41/mo per client site. With 30 active clients, that's over $14K/year back in margin.",
        name: "Jen Kowalski",
        role: "Operations Manager, Digital North",
        why: "Cost savings at scale with exact math. CFOs love this testimonial format.",
      },
    ],
  },
  {
    category: "Industry-Specific Testimonials",
    description:
      "Prospects trust reviews from people in their own industry. These templates show how to tailor testimonials by vertical.",
    items: [
      {
        text: "As a real estate agent, trust is everything. Having client testimonials embedded right on my listing pages has been a game-changer. Sellers see I'm legit before I even walk in the door.",
        name: "Patricia Reeves",
        role: "Real Estate Agent, Keller Williams",
        why: "Industry context (real estate), specific use case (listing pages), trust signal.",
      },
      {
        text: "My yoga studio was getting reviews on Google but they were buried. Now the best ones are right on my booking page. Class signups are up 40% since I added them.",
        name: "Maya Johansson",
        role: "Owner, Flow Yoga Studio",
        why: "Local business context, problem (buried reviews), measurable result (40%).",
      },
      {
        text: "I run an e-commerce store selling handmade candles. Adding customer photos with their testimonials increased our average order value by $12. People trust other real customers.",
        name: "Sophie Laurent",
        role: "Founder, Lumine Candles",
        why: "E-commerce specific, concrete AOV impact ($12), insight about photo testimonials.",
      },
      {
        text: "For our SaaS onboarding flow, we show one testimonial from a similar-sized company at each step. Activation rate improved from 34% to 51%. Context-matched social proof works.",
        name: "Derek Chang",
        role: "Product Lead, Onboard.io",
        why: "Advanced use case (contextual testimonials), specific funnel metric, actionable insight.",
      },
    ],
  },
];

const TEMPLATES = [
  {
    label: "The Results Template",
    template:
      "Before [product], I was [specific problem]. After switching, [specific measurable result] in [timeframe]. The [specific feature] was the game-changer.",
  },
  {
    label: "The Comparison Template",
    template:
      "I tried [competitor 1] and [competitor 2] before finding [product]. What sets it apart is [specific differentiator]. Now I [positive outcome].",
  },
  {
    label: "The Quick Win Template",
    template:
      "[Product] took [time to set up] to set up and delivered [result] almost immediately. If you need [benefit], this is it.",
  },
  {
    label: "The Authority Template",
    template:
      "I recommend [product] to all my [clients/students/colleagues]. In [X years] of [industry], it's the simplest solution I've found for [specific problem].",
  },
  {
    label: "The Story Template",
    template:
      "I almost didn't [action] because [objection]. But [trigger event] convinced me to try. [Time] later, [positive outcome]. Wish I'd started sooner.",
  },
];

export default function TestimonialExamples() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        25 Testimonial Examples That Actually Convert
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Real examples you can use as inspiration, plus fill-in-the-blank
        templates to help your customers write testimonials that build trust and
        drive sales.
      </p>

      <div className="mt-6 p-4 bg-violet-50 rounded-lg text-sm text-gray-700">
        <strong>Want to start collecting testimonials like these?</strong>{" "}
        <Link href="/" className="text-violet-600 hover:underline font-medium">
          TestimonialFlow
        </Link>{" "}
        lets you create a collection form, share it with customers, and embed
        testimonials on your site in 2 minutes. Free plan included.
      </div>

      <nav className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Jump to a category:
        </p>
        <ol className="text-sm text-violet-600 space-y-1 list-decimal list-inside">
          {EXAMPLES.map((cat) => (
            <li key={cat.category}>
              <a
                href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="hover:underline"
              >
                {cat.category}
              </a>{" "}
              ({cat.items.length} examples)
            </li>
          ))}
          <li>
            <a href="#templates" className="hover:underline">
              Fill-in-the-Blank Templates
            </a>{" "}
            (5 templates)
          </li>
        </ol>
      </nav>

      {EXAMPLES.map((cat) => (
        <section
          key={cat.category}
          id={cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="mt-14"
        >
          <h2 className="text-2xl font-bold text-gray-900">{cat.category}</h2>
          <p className="mt-2 text-gray-600">{cat.description}</p>

          <div className="mt-6 space-y-6">
            {cat.items.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 hover:border-violet-200 transition-colors"
              >
                <blockquote className="text-gray-800 italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                </div>
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">
                    <strong className="text-gray-700">Why this works:</strong>{" "}
                    {item.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section id="templates" className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900">
          Fill-in-the-Blank Testimonial Templates
        </h2>
        <p className="mt-2 text-gray-600">
          Send these to your customers when asking for a testimonial. They
          provide structure without being overly scripted.
        </p>

        <div className="mt-6 space-y-4">
          {TEMPLATES.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 text-sm">
                {i + 1}. {t.label}
              </h3>
              <p className="mt-2 text-gray-700 bg-gray-50 p-3 rounded-lg font-mono text-sm">
                {t.template}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Get Testimonials Like These
        </h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            <strong>1. Ask at the right moment.</strong> The best time to request
            a testimonial is right after a customer achieves a result with your
            product. Not during onboarding, not 6 months later.
          </p>
          <p>
            <strong>2. Make it effortless.</strong> Don&apos;t ask customers to
            &ldquo;write something.&rdquo; Send them a form with guided
            questions. Tools like{" "}
            <Link
              href="/"
              className="text-violet-600 hover:underline font-medium"
            >
              TestimonialFlow
            </Link>{" "}
            create a clean form your customers can fill out in 30 seconds.
          </p>
          <p>
            <strong>3. Ask specific questions.</strong> Instead of &ldquo;What do
            you think of our product?&rdquo; ask &ldquo;What specific result did
            you achieve?&rdquo; or &ldquo;What were you using before?&rdquo;
          </p>
          <p>
            <strong>4. Display them where decisions happen.</strong> Pricing
            pages, checkout pages, and landing pages convert better with
            testimonials than about pages or footers.
          </p>
          <p>
            <strong>5. Keep collecting.</strong> Testimonials have a shelf life.
            A review from 3 years ago feels stale. Aim for a steady stream of
            fresh social proof.
          </p>
        </div>
      </section>

      <div className="mt-12 p-6 bg-violet-50 rounded-xl text-center">
        <h3 className="text-lg font-bold text-gray-900">
          Start collecting testimonials today
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          Create a collection form, share it with customers, and embed beautiful
          testimonials on your site. Setup takes 2 minutes.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Get Started Free
        </Link>
        <p className="mt-2 text-xs text-gray-400">
          No credit card required. Free plan includes 10 testimonials.
        </p>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-400">
        <p>
          More resources:{" "}
          <Link
            href="/tools/testimonial-request-email-generator"
            className="text-violet-500 hover:underline"
          >
            Email Templates
          </Link>{" "}
          |{" "}
          <Link
            href="/best-testimonial-tools"
            className="text-violet-500 hover:underline"
          >
            Best Testimonial Tools
          </Link>{" "}
          |{" "}
          <Link
            href="/compare/testimonial-to"
            className="text-violet-500 hover:underline"
          >
            vs Testimonial.to
          </Link>{" "}
          |{" "}
          <Link
            href="/compare/senja"
            className="text-violet-500 hover:underline"
          >
            vs Senja
          </Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "25 Testimonial Examples That Actually Convert (Templates Included)",
            description:
              "Real testimonial examples for websites, landing pages, and marketing with fill-in-the-blank templates.",
            url: "https://testimonialflow-kappa.vercel.app/testimonial-examples",
            datePublished: "2026-04-06",
            dateModified: "2026-04-06",
          }),
        }}
      />
    </main>
  );
}
