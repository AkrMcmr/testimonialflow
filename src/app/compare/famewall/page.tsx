import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "TestimonialFlow vs Famewall — Which Testimonial Tool is Better? (2026)",
  description:
    "Compare TestimonialFlow and Famewall. Both start at $9/mo, but TestimonialFlow offers a free plan, faster setup, and email collection automation.",
  keywords: [
    "famewall alternative",
    "famewall vs",
    "famewall pricing",
    "famewall review",
    "testimonial widget comparison",
    "best testimonial tool for small business",
  ],
  alternates: {
    canonical: "https://testimonialflow-kappa.vercel.app/compare/famewall",
  },
};

const FEATURES = [
  { feature: "Free plan", us: "Yes (10 testimonials)", them: "No" },
  { feature: "Starting price", us: "$9/mo", them: "$9/mo" },
  { feature: "Setup time", us: "~2 minutes", them: "~5 minutes" },
  { feature: "Embed widget", us: "Yes", them: "Yes" },
  { feature: "Collection forms", us: "Yes", them: "Yes" },
  { feature: "Email automation", us: "Pro plan", them: "No" },
  { feature: "Video testimonials", us: "Business plan", them: "Higher plans" },
  { feature: "Custom branding", us: "Pro ($9/mo)", them: "Starter ($9/mo)" },
  { feature: "Import from Twitter/LinkedIn", us: "Coming soon", them: "Yes" },
  { feature: "AI highlight extraction", us: "Business plan", them: "No" },
];

export default function CompareFamewall() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        TestimonialFlow vs Famewall
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Famewall is the closest competitor at $9/mo. Both tools let you collect
        and display testimonials, but there are key differences worth knowing.
      </p>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-700">Feature</th>
              <th className="text-left py-3 px-4 text-violet-700 font-bold">
                TestimonialFlow
              </th>
              <th className="text-left py-3 pl-4 text-gray-700">Famewall</th>
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
          Why choose TestimonialFlow over Famewall?
        </h2>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            <strong>Free plan available:</strong> Try TestimonialFlow with 10
            testimonials at no cost. Famewall requires payment from day one.
          </li>
          <li>
            <strong>Email collection automation:</strong> Automatically send
            testimonial requests to your customers. Famewall doesn't offer this.
          </li>
          <li>
            <strong>AI-powered highlights:</strong> Our Business plan uses AI to
            extract the most compelling quotes from long testimonials.
          </li>
          <li>
            <strong>Faster setup:</strong> Go from signup to embedded widget in
            under 2 minutes.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-gray-900">
          When Famewall might be better
        </h2>
        <p className="mt-3 text-gray-700">
          If you want to import existing testimonials from Twitter and LinkedIn
          posts, Famewall supports that today. It also has a more established
          track record. But if you're starting fresh and want a free tier to
          test, TestimonialFlow is the way to go.
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
          </Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TestimonialFlow vs Famewall",
            description:
              "Comparison of TestimonialFlow and Famewall testimonial collection tools.",
            url: "https://testimonialflow-kappa.vercel.app/compare/famewall",
          }),
        }}
      />
    </main>
  );
}
