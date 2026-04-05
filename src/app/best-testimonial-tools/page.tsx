import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7 Best Testimonial Collection Tools in 2026 (Compared)",
  description:
    "Compare the best testimonial tools in 2026: TestimonialFlow, Senja, Testimonial.to, Famewall, Shapo, and more. Find the right tool for your budget and needs.",
  keywords: [
    "best testimonial tools 2026",
    "testimonial collection software",
    "testimonial widget tools",
    "best social proof tools",
    "customer review tools",
    "testimonial software comparison",
    "collect testimonials tool",
  ],
  alternates: {
    canonical:
      "https://testimonialflow-kappa.vercel.app/best-testimonial-tools",
  },
};

const TOOLS = [
  {
    name: "TestimonialFlow",
    url: "/",
    free: "10 testimonials",
    paid: "$9/mo",
    bestFor: "Fastest setup (2 min), cheapest paid plan",
    pros: ["2-minute setup", "$9/mo for unlimited", "Dead-simple UX"],
    cons: ["Fewer import sources", "No video on free plan"],
    highlight: true,
  },
  {
    name: "Senja",
    url: "/compare/senja",
    free: "15 testimonials",
    paid: "$29/mo",
    bestFor: "Import from 30+ platforms, Wall of Love pages",
    pros: ["Generous free plan", "30+ platform imports", "Beautiful templates"],
    cons: ["$29/mo to remove branding", "Complex for simple use cases"],
  },
  {
    name: "Testimonial.to",
    url: "/compare/testimonial-to",
    free: "2 text + 2 video",
    paid: "$50/mo",
    bestFor: "Video-first testimonials, SaaS companies",
    pros: ["Best video collection UX", "Chrome extension", "Strong brand"],
    cons: ["Most expensive", "Tiny free plan"],
  },
  {
    name: "Famewall",
    url: "/compare/famewall",
    free: "Limited",
    paid: "$9/mo",
    bestFor: "Budget-friendly Wall of Love displays",
    pros: ["$9/mo paid plan", "Simple grid layouts", "Social imports"],
    cons: ["Fewer widget options", "Smaller community"],
  },
  {
    name: "Shapo",
    url: "/compare/shapo",
    free: "10 testimonials",
    paid: "$29/mo",
    bestFor: "All-in-one collection + video + email campaigns",
    pros: ["Video on free plan", "20+ import sources", "Email campaigns"],
    cons: ["$29/mo for premium", "Newer platform"],
  },
  {
    name: "Embeddable",
    url: "https://embeddable.co",
    free: "Limited",
    paid: "From $29/mo",
    bestFor: "Custom no-code widget builder (not testimonial-specific)",
    pros: ["Full design control", "Multiple data sources", "No-code"],
    cons: ["Not purpose-built for testimonials", "Steeper learning curve"],
  },
  {
    name: "Feedspace",
    url: "https://feedspace.io",
    free: "Limited",
    paid: "From $19/mo",
    bestFor: "Multi-format (video, audio, text, screen recording)",
    pros: ["Audio + screen recording", "8 widget formats", "Multi-platform embed"],
    cons: ["Less focused on testimonials", "Newer in market"],
  },
];

export default function BestTestimonialTools() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-violet-600 text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to TestimonialFlow
      </Link>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
        7 Best Testimonial Collection Tools in 2026
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We compared the top testimonial tools by pricing, ease of setup, and
        features. Here&apos;s how they stack up for small businesses, freelancers,
        and SaaS founders.
      </p>

      <nav className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm font-semibold text-gray-700 mb-2">Quick jump:</p>
        <ol className="text-sm text-violet-600 space-y-1 list-decimal list-inside">
          {TOOLS.map((tool) => (
            <li key={tool.name}>
              <a href={`#${tool.name.toLowerCase().replace(/[.\s]/g, "-")}`} className="hover:underline">
                {tool.name}
              </a>
              {" "}&mdash; {tool.bestFor}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 pr-4 text-gray-700">Tool</th>
              <th className="text-left py-3 px-4 text-gray-700">Free plan</th>
              <th className="text-left py-3 px-4 text-gray-700">Paid from</th>
              <th className="text-left py-3 pl-4 text-gray-700">Best for</th>
            </tr>
          </thead>
          <tbody>
            {TOOLS.map((tool) => (
              <tr
                key={tool.name}
                className={`border-b border-gray-100 ${tool.highlight ? "bg-violet-50" : ""}`}
              >
                <td className="py-3 pr-4 font-medium text-gray-900">
                  {tool.name}
                  {tool.highlight && (
                    <span className="ml-2 text-xs bg-violet-600 text-white px-2 py-0.5 rounded-full">
                      Our pick
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-gray-600">{tool.free}</td>
                <td className="py-3 px-4 text-gray-600">{tool.paid}</td>
                <td className="py-3 pl-4 text-gray-600">{tool.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {TOOLS.map((tool) => (
        <section
          key={tool.name}
          id={tool.name.toLowerCase().replace(/[.\s]/g, "-")}
          className="mt-12"
        >
          <h2 className="text-xl font-bold text-gray-900">
            {tool.highlight ? `${tool.name} (Our Pick)` : tool.name}
          </h2>
          <p className="mt-2 text-gray-600">
            <strong>Free:</strong> {tool.free} | <strong>Paid:</strong>{" "}
            {tool.paid} | <strong>Best for:</strong> {tool.bestFor}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-700">Pros</p>
              <ul className="mt-1 space-y-1 text-gray-700">
                {tool.pros.map((pro) => (
                  <li key={pro}>+ {pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-red-700">Cons</p>
              <ul className="mt-1 space-y-1 text-gray-700">
                {tool.cons.map((con) => (
                  <li key={con}>&minus; {con}</li>
                ))}
              </ul>
            </div>
          </div>
          {tool.url.startsWith("/") && (
            <Link
              href={tool.url}
              className="inline-block mt-3 text-sm text-violet-600 hover:underline"
            >
              {tool.url === "/"
                ? "Try TestimonialFlow free →"
                : `Full comparison: TestimonialFlow vs ${tool.name} →`}
            </Link>
          )}
        </section>
      ))}

      <section className="mt-16">
        <h2 className="text-xl font-bold text-gray-900">
          How to choose the right testimonial tool
        </h2>
        <div className="mt-4 space-y-4 text-gray-700">
          <p>
            <strong>Just need testimonials on your site fast?</strong> Go with
            TestimonialFlow. 2-minute setup, free plan, $9/mo for unlimited.
          </p>
          <p>
            <strong>Need to import reviews from Google/G2/Capterra?</strong>{" "}
            Senja or Shapo are your best options with 20-30 platform imports.
          </p>
          <p>
            <strong>Video testimonials are a priority?</strong> Testimonial.to
            has the best video collection UX. Shapo also supports video on the
            free plan.
          </p>
          <p>
            <strong>On a tight budget?</strong> TestimonialFlow and Famewall
            both offer paid plans at $9/mo &mdash; the cheapest in the market.
          </p>
        </div>
      </section>

      <div className="mt-12 p-6 bg-violet-50 rounded-xl text-center">
        <h3 className="text-lg font-bold text-gray-900">
          Try TestimonialFlow free
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          Collect testimonials and embed them on your site in 2 minutes.
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
          Detailed comparisons:{" "}
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
          </Link>{" "}
          |{" "}
          <Link href="/compare/shapo" className="text-violet-500 hover:underline">
            vs Shapo
          </Link>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "7 Best Testimonial Collection Tools in 2026",
            description:
              "Comparison of the best testimonial collection tools including TestimonialFlow, Senja, Testimonial.to, Famewall, and Shapo.",
            url: "https://testimonialflow-kappa.vercel.app/best-testimonial-tools",
            datePublished: "2026-04-05",
            dateModified: "2026-04-05",
          }),
        }}
      />
    </main>
  );
}
