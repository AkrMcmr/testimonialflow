import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Testimonial Request Email Generator | TestimonialFlow",
  description:
    "Generate professional testimonial request emails in seconds. 5 proven templates for different scenarios. Free tool — no signup required.",
  keywords:
    "testimonial request email, ask for testimonials, testimonial email template, how to ask for testimonials, customer testimonial request",
  openGraph: {
    title: "Free Testimonial Request Email Generator",
    description:
      "Generate professional testimonial request emails in seconds. 5 proven templates.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
