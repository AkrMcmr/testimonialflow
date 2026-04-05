"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      router.push("/dashboard");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">TestimonialFlow</h1>
          <p className="mt-2 text-gray-600 text-sm">Sign in to manage your testimonials</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "..." : "Continue"}
          </button>
          <p className="text-xs text-gray-400 text-center">
            No password needed for MVP. Just enter your email.
          </p>
        </form>
        <p className="mt-4 text-center">
          <a href="/" className="text-sm text-violet-600 hover:underline">Back to home</a>
        </p>
      </div>
    </main>
  );
}
