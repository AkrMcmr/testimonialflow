"use client";

import { useState } from "react";

const SCENARIOS = [
  {
    id: "post-purchase",
    label: "After a Purchase",
    subject: "Quick favor? Share your experience with {product}",
    body: `Hi {name},

Thank you for choosing {product}! We hope you're enjoying it.

We'd love to hear about your experience. Would you mind sharing a quick testimonial? It only takes 30 seconds:

{link}

Your feedback helps other customers make confident decisions, and it means the world to our small team.

Thank you so much!
{sender}`,
  },
  {
    id: "post-project",
    label: "After a Project / Service",
    subject: "Would you recommend us? A quick 30-second ask",
    body: `Hi {name},

It was a pleasure working with you on {project}. I hope the results have been meeting your expectations!

I have a quick favor to ask — would you be willing to share a brief testimonial about your experience working with us?

It takes less than a minute: {link}

Your words carry so much weight for future clients considering our services. No pressure at all — I appreciate you either way!

Best,
{sender}`,
  },
  {
    id: "long-term",
    label: "Long-term Customer",
    subject: "{name}, your feedback would mean a lot to us",
    body: `Hi {name},

You've been with {product} for a while now, and we truly appreciate your loyalty.

Would you be open to sharing a quick testimonial about your experience? It only takes 30 seconds:

{link}

Hearing from long-term customers like you helps others understand the real value of what we do.

Thank you for being part of our journey!
{sender}`,
  },
  {
    id: "follow-up",
    label: "Follow-up (They Said They Would)",
    subject: "Following up on that testimonial, {name}",
    body: `Hi {name},

Hope you're doing well! You mentioned you'd be happy to share a testimonial — here's the link whenever you have a moment:

{link}

It takes less than 30 seconds. No rush at all, but I wanted to make it easy for you.

Thanks again!
{sender}`,
  },
  {
    id: "milestone",
    label: "After a Milestone / Result",
    subject: "Congrats on {milestone}! Quick favor?",
    body: `Hi {name},

Congrats on {milestone}! It's been great to see your progress.

Since you've had such a positive outcome, would you mind sharing a brief testimonial? Your story could inspire others in a similar situation.

It only takes 30 seconds: {link}

Thank you!
{sender}`,
  },
];

export default function TestimonialRequestEmailGenerator() {
  const [scenario, setScenario] = useState(SCENARIOS[0].id);
  const [vars, setVars] = useState<Record<string, string>>({
    name: "",
    product: "",
    project: "",
    milestone: "",
    sender: "",
    link: "https://your-link.com",
  });
  const [copied, setCopied] = useState<"subject" | "body" | null>(null);

  const selected = SCENARIOS.find((s) => s.id === scenario)!;

  function fill(template: string) {
    return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
  }

  function copy(text: string, type: "subject" | "body") {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <a
          href="/"
          className="text-sm text-violet-600 hover:text-violet-800 mb-8 inline-block"
        >
          &larr; TestimonialFlow
        </a>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Testimonial Request Email Generator
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Generate a professional email to ask your customers for testimonials.
          Choose a scenario, fill in the details, and copy your email.
        </p>

        {/* Scenario picker */}
        <div className="mt-10">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            1. Choose a scenario
          </label>
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => setScenario(s.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  scenario === s.id
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-violet-300"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Variables */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            2. Fill in the details
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { key: "name", label: "Customer Name", placeholder: "Sarah" },
              { key: "sender", label: "Your Name", placeholder: "James" },
              {
                key: "product",
                label: "Product / Company",
                placeholder: "Acme Inc",
              },
              {
                key: "link",
                label: "Testimonial Collection Link",
                placeholder: "https://...",
              },
              ...(scenario === "post-project"
                ? [
                    {
                      key: "project",
                      label: "Project Name",
                      placeholder: "Website Redesign",
                    },
                  ]
                : []),
              ...(scenario === "milestone"
                ? [
                    {
                      key: "milestone",
                      label: "Milestone",
                      placeholder: "hitting 10k users",
                    },
                  ]
                : []),
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-xs text-gray-500 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  value={vars[field.key] || ""}
                  onChange={(e) =>
                    setVars((v) => ({ ...v, [field.key]: e.target.value }))
                  }
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Output */}
        <div className="mt-10">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            3. Copy your email
          </label>

          {/* Subject */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Subject Line
              </span>
              <button
                onClick={() => copy(fill(selected.subject), "subject")}
                className="text-xs text-violet-600 hover:text-violet-800 font-medium"
              >
                {copied === "subject" ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm text-gray-900">{fill(selected.subject)}</p>
          </div>

          {/* Body */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Email Body
              </span>
              <button
                onClick={() => copy(fill(selected.body), "body")}
                className="text-xs text-violet-600 hover:text-violet-800 font-medium"
              >
                {copied === "body" ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="text-sm text-gray-900 whitespace-pre-wrap font-sans leading-relaxed">
              {fill(selected.body)}
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-violet-50 border border-violet-200 rounded-xl p-6 text-center">
          <h2 className="text-lg font-bold text-gray-900">
            Want to automate testimonial collection?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Instead of sending emails manually, create a collection link with
            TestimonialFlow. Your customers submit testimonials through a
            beautiful form, and you embed them on your site with one line of
            code.
          </p>
          <a
            href="/login"
            className="inline-block mt-4 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md"
          >
            Get Started Free
          </a>
          <p className="mt-2 text-xs text-gray-400">
            Free plan: 10 testimonials, no credit card required.
          </p>
        </div>

        {/* SEO Content */}
        <div className="mt-16 prose prose-gray max-w-none">
          <h2>How to Ask for Testimonials: Best Practices</h2>
          <p>
            Asking for testimonials can feel awkward, but most happy customers
            are willing to help. Here are proven tips:
          </p>
          <ul>
            <li>
              <strong>Ask at the right time</strong> — Right after a positive
              outcome, purchase, or milestone is the best moment to ask.
            </li>
            <li>
              <strong>Make it easy</strong> — Provide a direct link to a simple
              form. The fewer steps, the higher the response rate.
            </li>
            <li>
              <strong>Be specific</strong> — Ask about a particular result or
              experience rather than a generic &ldquo;how was it?&rdquo;
            </li>
            <li>
              <strong>Keep it short</strong> — Let them know it only takes 30
              seconds. Nobody wants to write an essay.
            </li>
            <li>
              <strong>Follow up once</strong> — A single gentle follow-up can
              double your response rate.
            </li>
          </ul>

          <h2>Why Testimonials Matter</h2>
          <p>
            92% of consumers read online reviews before making a purchase
            decision. Testimonials build trust, reduce purchase anxiety, and can
            increase conversion rates by 20-30%. They&apos;re one of the most
            powerful forms of social proof for any business.
          </p>

          <h2>Testimonial Request Email Templates</h2>
          <p>
            The email generator above provides templates for 5 common scenarios.
            Each template is designed to be warm, professional, and respectful of
            your customer&apos;s time. Customize the placeholders with your
            details and send directly from your email client.
          </p>
          <p>
            For an even easier approach,{" "}
            <a href="/login" className="text-violet-600">
              create a free TestimonialFlow account
            </a>{" "}
            and share your collection link directly — no email template needed.
          </p>
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Testimonial Request Email Generator",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Free tool to generate professional testimonial request emails. Choose a scenario, customize the template, and copy your email.",
            }),
          }}
        />
      </div>
    </main>
  );
}
