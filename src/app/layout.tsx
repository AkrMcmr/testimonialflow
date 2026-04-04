import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TestimonialFlow — Collect & Display Customer Testimonials in 2 Minutes",
  description:
    "The simplest way to collect customer testimonials and embed beautiful widgets on your website. Free to start. Set up in 2 minutes.",
  keywords: [
    "testimonial widget",
    "collect testimonials",
    "customer reviews widget",
    "testimonial software",
    "social proof",
    "testimonial.to alternative",
    "senja alternative",
  ],
  openGraph: {
    title: "TestimonialFlow — Collect & Display Testimonials in 2 Minutes",
    description:
      "The simplest testimonial collection tool. Share a link, collect reviews, embed anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
