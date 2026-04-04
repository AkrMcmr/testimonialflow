"use client";

import { useState } from "react";

const DEMO_TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Founder, PixelCraft",
    text: "TestimonialFlow made it so easy to collect reviews from our customers. We embedded the widget on our landing page and saw a 23% increase in conversions.",
    rating: 5,
  },
  {
    name: "James Miller",
    role: "Owner, Miller's Coffee",
    text: "I used to manually ask customers for reviews. Now I just share a link and the testimonials come in automatically. Game changer for my coffee shop!",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Freelance Designer",
    text: "Finally a testimonial tool that doesn't cost $50/month. Simple, clean, and does exactly what I need.",
    rating: 5,
  },
];

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

function TestimonialCard({
  name,
  role,
  text,
  rating,
}: (typeof DEMO_TESTIMONIALS)[number]) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <StarRating rating={rating} />
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-4 text-green-800 text-sm">
        You&apos;re on the list! We&apos;ll notify you when TestimonialFlow
        launches.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "..." : "Get Early Access"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs self-center">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full mb-6">
          Coming Soon &mdash; Join the Waitlist
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Collect testimonials.
          <br />
          Embed anywhere.
          <br />
          <span className="text-violet-600">In 2 minutes.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Share a link with your customers. They leave a review. You pick the
          best ones and display them on your site with a beautiful embed widget.
          No coding required.
        </p>
        <div className="mt-8 flex justify-center">
          <EmailForm />
        </div>
        <p className="mt-3 text-xs text-gray-400">
          Free plan available. No credit card required.
        </p>
      </section>

      {/* Demo Widget */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-20">
        <p className="text-center text-sm text-gray-500 mb-6">
          Here&apos;s what your testimonial widget could look like:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEMO_TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create a collection form",
                desc: "Customize your form with your brand colors and questions. Get a shareable link in seconds.",
              },
              {
                step: "2",
                title: "Share with customers",
                desc: "Send the link via email, SMS, or embed it on your site. Customers submit testimonials with one click.",
              },
              {
                step: "3",
                title: "Embed the widget",
                desc: "Copy a single line of code. Paste it on your website. Beautiful testimonials appear instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Simple Pricing
        </h2>
        <p className="text-gray-600 mb-8">
          Start free. Upgrade when you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Free</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">$0</p>
            <p className="text-sm text-gray-500 mt-1">forever</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
              <li>Up to 10 testimonials</li>
              <li>1 collection form</li>
              <li>Basic widget</li>
              <li>TestimonialFlow branding</li>
            </ul>
          </div>
          <div className="border-2 border-violet-600 rounded-xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="font-semibold text-gray-900">Pro</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              $9
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">billed monthly</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
              <li>Up to 100 testimonials</li>
              <li>Unlimited forms</li>
              <li>Custom widgets</li>
              <li>No branding</li>
              <li>Email collection automation</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Business</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              $29
              <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">billed monthly</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
              <li>Unlimited testimonials</li>
              <li>Video testimonials</li>
              <li>AI highlight extraction</li>
              <li>Priority support</li>
              <li>Custom domain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full bg-violet-600 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to let your customers sell for you?
          </h2>
          <p className="text-violet-200 mb-8">
            Join the waitlist and be the first to try TestimonialFlow.
          </p>
          <div className="flex justify-center">
            <EmailForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-gray-400">
        &copy; 2026 TestimonialFlow. All rights reserved.
      </footer>
    </main>
  );
}
