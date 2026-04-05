import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "TestimonialFlow API Docs — Embed Testimonials on Any Website in 2 Minutes",
  description:
    "Complete API documentation for TestimonialFlow. Collect testimonials via REST API, embed widgets with one script tag, and display social proof anywhere. Free tier available.",
  keywords: [
    "testimonial API",
    "embed testimonials API",
    "testimonial widget API",
    "social proof API",
    "customer review API",
    "testimonial collection API",
    "embed reviews widget",
    "testimonial REST API",
  ],
  alternates: {
    canonical: "https://testimonialflow-kappa.vercel.app/docs",
  },
};

const API_BASE = "https://testimonialflow-kappa.vercel.app";

function CodeBlock({
  title,
  lang,
  code,
}: {
  title?: string;
  lang: string;
  code: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 my-4">
      {title && (
        <div className="bg-gray-100 px-4 py-2 text-xs font-mono text-gray-600 border-b border-gray-200">
          {title}
        </div>
      )}
      <pre className="bg-gray-900 text-gray-100 p-4 text-sm overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Endpoint({
  method,
  path,
  description,
  children,
}: {
  method: string;
  path: string;
  description: string;
  children?: React.ReactNode;
}) {
  const color =
    method === "GET"
      ? "bg-green-100 text-green-800"
      : method === "POST"
        ? "bg-blue-100 text-blue-800"
        : method === "PATCH"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-800";
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`${color} px-2.5 py-1 rounded text-xs font-bold font-mono`}
        >
          {method}
        </span>
        <code className="text-sm font-mono text-gray-800">{path}</code>
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      {children}
    </div>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-gray-900">
            TestimonialFlow
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            API Documentation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Everything you need to collect testimonials, manage them, and embed
            social proof on any website. Set up in under 2 minutes.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h3 className="font-semibold text-gray-900 mb-3">On this page</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#quickstart"
                className="text-blue-600 hover:text-blue-800"
              >
                Quick Start — Embed in 30 Seconds
              </a>
            </li>
            <li>
              <a
                href="#collect"
                className="text-blue-600 hover:text-blue-800"
              >
                Collecting Testimonials
              </a>
            </li>
            <li>
              <a
                href="#widget"
                className="text-blue-600 hover:text-blue-800"
              >
                Embedding the Widget
              </a>
            </li>
            <li>
              <a href="#api" className="text-blue-600 hover:text-blue-800">
                REST API Reference
              </a>
            </li>
            <li>
              <a
                href="#wall-of-love"
                className="text-blue-600 hover:text-blue-800"
              >
                Wall of Love
              </a>
            </li>
            <li>
              <a
                href="#react"
                className="text-blue-600 hover:text-blue-800"
              >
                React / Next.js Integration
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-blue-600 hover:text-blue-800"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Start */}
        <Section id="quickstart" title="Quick Start — Embed in 30 Seconds">
          <p className="text-gray-600 mb-4">
            Add a testimonial widget to any website with a single script tag.
            No build step, no dependencies, no configuration.
          </p>
          <CodeBlock
            title="HTML — paste in your site"
            lang="html"
            code={`<div id="testimonialflow-widget"></div>
<script
  src="${API_BASE}/api/widget/YOUR_PROJECT_SLUG"
  async
></script>`}
          />
          <p className="text-gray-600 text-sm">
            Replace <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800">YOUR_PROJECT_SLUG</code> with
            your project slug from the{" "}
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              dashboard
            </Link>
            .
          </p>
        </Section>

        {/* Collecting Testimonials */}
        <Section id="collect" title="Collecting Testimonials">
          <p className="text-gray-600 mb-4">
            Share a collection link with your customers. They fill out a simple
            form with their name, role, testimonial text, and star rating.
          </p>
          <CodeBlock
            title="Collection URL format"
            lang="text"
            code={`${API_BASE}/collect/YOUR_PROJECT_SLUG`}
          />
          <p className="text-gray-600 mb-4">
            Each submission is saved and appears in your dashboard for review.
            Approve the ones you want to display publicly.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Tip:</strong> Include this link in your post-purchase
              emails, thank-you pages, or customer success follow-ups for the
              highest response rates. Need help crafting the ask? Try our{" "}
              <Link
                href="/tools/testimonial-request-email-generator"
                className="underline"
              >
                email generator tool
              </Link>
              .
            </p>
          </div>
        </Section>

        {/* Widget Embedding */}
        <Section id="widget" title="Embedding the Widget">
          <p className="text-gray-600 mb-4">
            The widget renders approved testimonials as a responsive card grid.
            It works on any website — static HTML, WordPress, Shopify, Webflow,
            Squarespace, or any framework.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
            How it works
          </h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
            <li>
              The script fetches approved testimonials from our API
            </li>
            <li>
              Renders star ratings, text, and attribution in styled cards
            </li>
            <li>
              Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop
            </li>
            <li>60-second cache for fast repeat loads</li>
          </ol>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
            WordPress / HTML
          </h3>
          <CodeBlock
            lang="html"
            code={`<!-- Add to any page, post, or widget area -->
<div id="testimonialflow-widget"></div>
<script src="${API_BASE}/api/widget/YOUR_SLUG" async></script>`}
          />

          <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
            Webflow / Squarespace
          </h3>
          <p className="text-gray-600 mb-2 text-sm">
            Paste the same snippet into a Custom Code / Embed block.
          </p>
        </Section>

        {/* REST API */}
        <Section id="api" title="REST API Reference">
          <p className="text-gray-600 mb-6">
            All endpoints return JSON. No API key required for public
            endpoints. CORS is enabled for all origins.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Public Endpoints
          </h3>

          <Endpoint
            method="GET"
            path="/api/testimonials?slug=YOUR_SLUG"
            description="Fetch all approved testimonials for a project."
          >
            <CodeBlock
              title="Response"
              lang="json"
              code={`[
  {
    "id": "abc123",
    "name": "Sarah Chen",
    "role": "Founder, PixelCraft",
    "text": "TestimonialFlow boosted our conversions by 23%.",
    "rating": 5,
    "approved": 1,
    "created_at": "2026-04-01T10:00:00Z"
  }
]`}
            />
          </Endpoint>

          <Endpoint
            method="POST"
            path="/api/testimonials"
            description="Submit a new testimonial."
          >
            <CodeBlock
              title="Request body"
              lang="json"
              code={`{
  "slug": "YOUR_SLUG",
  "name": "Customer Name",
  "role": "CEO, Acme Inc",
  "text": "This product changed everything for us.",
  "rating": 5
}`}
            />
          </Endpoint>

          <Endpoint
            method="GET"
            path="/api/widget/YOUR_SLUG"
            description="Returns a JavaScript snippet that renders a testimonial widget. Used via <script> tag."
          />

          <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">
            Authenticated Endpoints
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            These require authentication via the dashboard session cookie.
          </p>

          <Endpoint
            method="POST"
            path="/api/projects"
            description="Create a new project. Returns the project with its unique slug."
          >
            <CodeBlock
              title="Request body"
              lang="json"
              code={`{
  "name": "My SaaS Product"
}`}
            />
          </Endpoint>

          <Endpoint
            method="PATCH"
            path="/api/testimonials/[id]"
            description="Approve or reject a testimonial."
          >
            <CodeBlock
              title="Request body"
              lang="json"
              code={`{ "approved": 1 }   // or { "approved": 0 }`}
            />
          </Endpoint>

          <Endpoint
            method="DELETE"
            path="/api/testimonials/[id]"
            description="Permanently delete a testimonial."
          />
        </Section>

        {/* Wall of Love */}
        <Section id="wall-of-love" title="Wall of Love">
          <p className="text-gray-600 mb-4">
            Every project gets a public Wall of Love page — a beautiful,
            shareable testimonial showcase with SEO metadata and aggregate
            ratings.
          </p>
          <CodeBlock
            title="URL format"
            lang="text"
            code={`${API_BASE}/wall/YOUR_SLUG`}
          />
          <p className="text-gray-600 mb-4">
            Share it on social media, include it in proposals, or link to it
            from your website. Each Wall of Love page includes JSON-LD
            structured data for rich search results.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              <strong>See it in action:</strong>{" "}
              <a
                href={`${API_BASE}/wall/demo-saas`}
                className="text-blue-600 hover:underline"
              >
                Live demo Wall of Love
              </a>
            </p>
          </div>
        </Section>

        {/* React Integration */}
        <Section id="react" title="React / Next.js Integration">
          <p className="text-gray-600 mb-4">
            Fetch testimonials from the API and render them with your own
            components for full styling control.
          </p>
          <CodeBlock
            title="React component"
            lang="tsx"
            code={`async function Testimonials({ slug }: { slug: string }) {
  const res = await fetch(
    "${API_BASE}/api/testimonials?slug=" + slug
  );
  const testimonials = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {testimonials.map((t) => (
        <div key={t.id} className="border rounded-lg p-4">
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="text-gray-700">{t.text}</p>
          <p className="mt-2 font-semibold">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>
        </div>
      ))}
    </div>
  );
}`}
          />
        </Section>

        {/* Pricing */}
        <Section id="pricing" title="Pricing">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900">Free</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                $0
                <span className="text-base font-normal text-gray-500">
                  /mo
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Up to 10 testimonials</li>
                <li>1 project</li>
                <li>Embed widget</li>
                <li>Wall of Love page</li>
                <li>Collection link</li>
              </ul>
            </div>
            <div className="border-2 border-black rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900">Pro</h3>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                $9
                <span className="text-base font-normal text-gray-500">
                  /mo
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>Unlimited testimonials</li>
                <li>Unlimited projects</li>
                <li>Everything in Free</li>
                <li>Priority support</li>
                <li>Remove &quot;Powered by&quot; branding</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to collect testimonials?
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up free. No credit card required. Set up in 2 minutes.
          </p>
          <Link
            href="/login"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap gap-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link href="/best-testimonial-tools" className="hover:text-gray-700">
            Compare Tools
          </Link>
          <Link
            href="/tools/testimonial-request-email-generator"
            className="hover:text-gray-700"
          >
            Email Generator
          </Link>
          <Link href="/testimonial-examples" className="hover:text-gray-700">
            Examples
          </Link>
          <Link href="/wall/demo-saas" className="hover:text-gray-700">
            Live Demo
          </Link>
        </div>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline:
              "TestimonialFlow API Documentation — Embed Testimonials on Any Website",
            description:
              "Complete REST API documentation for collecting, managing, and embedding customer testimonials.",
            author: {
              "@type": "Organization",
              name: "TestimonialFlow",
              url: API_BASE,
            },
            mainEntityOfPage: `${API_BASE}/docs`,
          }),
        }}
      />
    </div>
  );
}
