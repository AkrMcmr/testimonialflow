import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TestimonialFlow vs Shapo — Simpler & Cheaper Alternative (2026)",
  description:
    "Compare TestimonialFlow and Shapo. Both offer free plans with 10 testimonials, but TestimonialFlow is 3x cheaper at $9/mo vs $29/mo for premium features.",
  keywords: [
    "shapo alternative",
    "shapo free alternative",
    "shapo vs",
    "shapo pricing",
    "shapo testimonial tool",
    "testimonial collection tool",
    "social proof widget",
  ],
  alternates: {
    canonical: "https://testimonialflow-kappa.vercel.app/compare/shapo",
  },
};

const FEATURES = [
  { feature: "Free plan limit", us: "10 testimonials", them: "10 testimonials" },
  { feature: "Paid plan start", us: "$9/mo", them: "$29/mo" },
  { feature: "Setup time", us: "~2 minutes", them: "~10 minutes" },
  { feature: "Embed widget", us: "Yes", them: "Yes" },
  { feature: "Collection pages", us: "Yes", them: "Yes" },
  { feature: "Import from 20+ platforms", us: "Coming soon", them: "Yes" },
  { feature: "Custom branding", us: "Pro ($9/mo)", them: "Pro ($29/mo)" },
  { feature: "Video testimonials", us: "Business plan", them: "Free plan" },
  { feature: "Wall of Love page", us: "Coming soon", them: "Yes" },
  { feature: "Email campaigns", us: "Coming soon", them: "500/mo (Pro)" },
  { feature: "Widget types", us: "Carousel, Grid", them: "Carousel, Grid, Badge, Toast" },
];

export default function CompareShapo() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        TestimonialFlow vs Shapo
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Shapo is an all-in-one testimonial platform with video support and 20+
        import sources. But if you just want to collect and embed testimonials
        quickly, TestimonialFlow does it in 2 minutes at 1/3 the price.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-700">Feature</th>
              <th className="text-left py-3 px-4 text-violet-700 font-bold">
                TestimonialFlow
              </th>
              <th className="text-left py-3 pl-4 text-gray-700">Shapo</th>
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
          Why choose TestimonialFlow over Shapo?
        </h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>3x cheaper to remove branding:</strong> Get a clean,
            brandless widget at $9/mo instead of $29/mo.
          </li>
          <li>
            <strong>Setup in 2 minutes, not 10:</strong> No dashboard to learn,
            no integrations to configure. Share a link, collect testimonials,
            embed a widget.
          </li>
          <li>
            <strong>Built for simplicity:</strong> Shapo has 20+ import sources,
            email campaigns, and advanced analytics. Great if you need all that
            &mdash; but most small businesses just want testimonials on their
            site.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          When Shapo might be better
        </h2>
        <p className="mt-3 text-gray-700">
          If you need video testimonials on the free plan, import reviews from
          Google/G2/Capterra automatically, or run email campaigns to collect
          testimonials at scale, Shapo is the more feature-rich option. It's
          ideal for mid-stage startups who've outgrown basic tools.
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
            name: "TestimonialFlow vs Shapo",
            description:
              "Comparison of TestimonialFlow and Shapo testimonial collection tools.",
            url: "https://testimonialflow-kappa.vercel.app/compare/shapo",
          }),
        }}
      />
    </main>
  );
}
