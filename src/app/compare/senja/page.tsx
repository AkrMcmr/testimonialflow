import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TestimonialFlow vs Senja — Simpler & Cheaper Alternative (2026)",
  description:
    "Compare TestimonialFlow and Senja. Both offer free plans, but TestimonialFlow is simpler to set up and costs $9/mo vs $29/mo for premium features.",
  keywords: [
    "senja alternative",
    "senja free alternative",
    "senja vs",
    "senja pricing",
    "testimonial collection tool",
    "social proof widget",
  ],
  alternates: {
    canonical: "https://testimonialflow-kappa.vercel.app/compare/senja",
  },
};

const FEATURES = [
  { feature: "Free plan limit", us: "10 testimonials", them: "15 testimonials" },
  { feature: "Paid plan start", us: "$9/mo", them: "$29/mo" },
  { feature: "Setup time", us: "~2 minutes", them: "~5 minutes" },
  { feature: "Embed widget", us: "Yes", them: "Yes" },
  { feature: "Collection pages", us: "Yes", them: "Yes" },
  { feature: "Import from G2/Capterra", us: "Coming soon", them: "Yes" },
  { feature: "Custom branding", us: "Pro ($9/mo)", them: "Premium ($29/mo)" },
  { feature: "Video testimonials", us: "Business plan", them: "Premium plan" },
  { feature: "Wall of Love page", us: "Coming soon", them: "Yes" },
  { feature: "AI features", us: "AI highlight extraction", them: "AI summaries" },
];

export default function CompareSenja() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        TestimonialFlow vs Senja
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Senja is a solid testimonial tool with a generous free plan. But if
        you're looking for the simplest possible setup and lower pricing,
        TestimonialFlow delivers.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-700">Feature</th>
              <th className="text-left py-3 px-4 text-violet-700 font-bold">
                TestimonialFlow
              </th>
              <th className="text-left py-3 pl-4 text-gray-700">Senja</th>
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
          Why choose TestimonialFlow over Senja?
        </h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>3x cheaper paid plan:</strong> Remove branding and get
            unlimited forms at $9/mo instead of $29/mo.
          </li>
          <li>
            <strong>Faster than fast:</strong> From signup to embedded widget in
            under 2 minutes. No learning curve.
          </li>
          <li>
            <strong>No feature bloat:</strong> Senja has 50+ features. If you
            just need to collect testimonials and embed them, TestimonialFlow
            does that without the complexity.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          When Senja might be better
        </h2>
        <p className="mt-3 text-gray-700">
          If you need to import reviews from 20+ platforms (G2, Capterra,
          Trustpilot), create Wall of Love pages, or manage testimonials across
          multiple brands, Senja's feature depth is unmatched. But most small
          businesses won't use 80% of those features.
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
          <Link
            href="/compare/testimonial-to"
            className="text-violet-500 hover:underline"
          >
            vs Testimonial.to
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
            name: "TestimonialFlow vs Senja",
            description:
              "Comparison of TestimonialFlow and Senja testimonial collection tools.",
            url: "https://testimonialflow-kappa.vercel.app/compare/senja",
          }),
        }}
      />
    </main>
  );
}
