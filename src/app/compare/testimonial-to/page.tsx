import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "TestimonialFlow vs Testimonial.to — Free Alternative (2026 Comparison)",
  description:
    "Compare TestimonialFlow and Testimonial.to. TestimonialFlow offers a generous free plan, 2-minute setup, and simpler pricing starting at $9/mo vs $50/mo.",
  keywords: [
    "testimonial.to alternative",
    "testimonial.to free alternative",
    "testimonial.to vs",
    "testimonial.to pricing",
    "best testimonial widget",
    "collect customer reviews widget",
  ],
  alternates: {
    canonical:
      "https://testimonialflow-kappa.vercel.app/compare/testimonial-to",
  },
};

const FEATURES = [
  { feature: "Free plan", us: "10 testimonials", them: "2 text + 1 video" },
  { feature: "Starting price", us: "$9/mo", them: "$50/mo" },
  { feature: "Setup time", us: "~2 minutes", them: "~10 minutes" },
  { feature: "Embed widget", us: "Yes", them: "Yes" },
  { feature: "Video testimonials", us: "Business plan", them: "All plans" },
  { feature: "Custom branding", us: "Pro ($9/mo)", them: "Premium ($50/mo)" },
  { feature: "Collection forms", us: "Yes", them: "Yes" },
  { feature: "Import from Google/G2", us: "Coming soon", them: "Yes" },
  { feature: "API access", us: "Business plan", them: "Ultimate ($150/mo)" },
];

export default function CompareTestimonialTo() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        TestimonialFlow vs Testimonial.to
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Both tools help you collect and display customer testimonials. Here's how
        they compare — and why TestimonialFlow might be a better fit if you want
        simplicity and value.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-700">Feature</th>
              <th className="text-left py-3 px-4 text-violet-700 font-bold">
                TestimonialFlow
              </th>
              <th className="text-left py-3 pl-4 text-gray-700">
                Testimonial.to
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((row) => (
              <tr key={row.feature} className="border-b border-gray-100">
                <td className="py-3 pr-4 text-gray-600">{row.feature}</td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {row.us}
                </td>
                <td className="py-3 pl-4 text-gray-600">{row.them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          Why switch to TestimonialFlow?
        </h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>5x cheaper:</strong> Get custom branding and unlimited forms
            at $9/mo, not $50/mo.
          </li>
          <li>
            <strong>Faster setup:</strong> Create a collection form and embed
            widget in under 2 minutes. No configuration maze.
          </li>
          <li>
            <strong>Generous free plan:</strong> 10 testimonials free vs just 2
            text + 1 video on Testimonial.to.
          </li>
          <li>
            <strong>Built for simplicity:</strong> If you just need testimonials
            on your site without enterprise complexity, TestimonialFlow is the
            answer.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          When Testimonial.to might be better
        </h2>
        <p className="mt-3 text-gray-700">
          If you need video testimonials on every plan, import reviews from
          Google/G2/Capterra, or run a large enterprise with complex workflows,
          Testimonial.to has more built-in integrations. But for most small
          businesses and SaaS founders, TestimonialFlow's simplicity and pricing
          are hard to beat.
        </p>
      </section>

      <div className="mt-12 p-6 bg-violet-50 rounded-xl text-center">
        <h3 className="text-lg font-bold text-gray-900">
          Try TestimonialFlow free
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          Set up in 2 minutes. No credit card required.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Get Started Free
        </Link>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-400">
        <p>
          Also compare:{" "}
          <Link href="/compare/senja" className="text-violet-500 hover:underline">
            vs Senja
          </Link>{" "}
          |{" "}
          <Link href="/compare/famewall" className="text-violet-500 hover:underline">
            vs Famewall
          </Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TestimonialFlow vs Testimonial.to",
            description:
              "Comparison of TestimonialFlow and Testimonial.to testimonial collection tools.",
            url: "https://testimonialflow-kappa.vercel.app/compare/testimonial-to",
          }),
        }}
      />
    </main>
  );
}
