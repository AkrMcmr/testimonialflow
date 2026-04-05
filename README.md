# TestimonialFlow

> **Collect customer testimonials and embed them on any website in 2 minutes.**

[![Live Demo](https://img.shields.io/badge/demo-Wall%20of%20Love-blueviolet)](https://testimonialflow-kappa.vercel.app/wall/demo-saas)
[![Deploy Status](https://img.shields.io/badge/deploy-Vercel-black)](https://testimonialflow-kappa.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Free Tier](https://img.shields.io/badge/pricing-Free%20tier-blue)](https://testimonialflow-kappa.vercel.app)

**[Live App](https://testimonialflow-kappa.vercel.app)** · **[Live Demo](https://testimonialflow-kappa.vercel.app/wall/demo-saas)** · **[Collect Form Demo](https://testimonialflow-kappa.vercel.app/collect/demo-saas)**

---

TestimonialFlow is a free testimonial collection and display tool for freelancers, agencies, SaaS founders, and small businesses. It's the simplest alternative to Testimonial.to, Senja, and Famewall.

## How It Works

```
Share a link → Customers leave reviews → Embed a widget on your site
```

1. **Create a project** — Give it a name and get a unique collection link
2. **Share with customers** — They submit their name, role, review text, and star rating
3. **Embed anywhere** — One line of JavaScript adds a responsive testimonial grid to any website

## Features

- **Collection forms** with shareable links (`/collect/your-slug`)
- **Dashboard** to manage, approve, and curate testimonials
- **Embeddable JS widget** — one `<script>` tag, works on any site
- **Wall of Love** — public testimonial page, great for sharing and SEO
- **Star ratings** — 1-5 star visual ratings
- **Responsive grid** — looks great on mobile, tablet, and desktop
- **"Powered by TestimonialFlow"** — built-in viral growth

## Quick Start

### 1. Get your collection link

Sign up at [testimonialflow-kappa.vercel.app](https://testimonialflow-kappa.vercel.app), create a project, and share the collection link with customers.

### 2. Embed the widget

```html
<!-- Add this where you want testimonials to appear -->
<div id="tf-widget-YOUR_SLUG"></div>
<script src="https://testimonialflow-kappa.vercel.app/api/widget/YOUR_SLUG"></script>
```

That's it. Testimonials render automatically in a responsive grid.

### 3. Or use the Wall of Love

Share your public Wall of Love page directly:

```
https://testimonialflow-kappa.vercel.app/wall/YOUR_SLUG
```

## API

### GET `/api/testimonials?slug=YOUR_SLUG`

Returns approved testimonials as JSON. CORS-enabled for cross-origin requests.

```json
{
  "testimonials": [
    {
      "id": "abc123",
      "name": "Sarah Chen",
      "role": "CEO, LaunchPad.io",
      "text": "TestimonialFlow made collecting feedback incredibly easy...",
      "rating": 5,
      "created_at": "2026-04-05T10:00:00Z"
    }
  ]
}
```

### GET `/api/widget/YOUR_SLUG`

Returns a self-contained JavaScript snippet that renders a testimonial grid.

## Pricing

| | Free | Pro ($9/mo) |
|---|---|---|
| Testimonials | 10 | 100 |
| Projects | 1 | Unlimited |
| Widget embed | ✅ | ✅ |
| Wall of Love | ✅ | ✅ |
| Remove branding | — | ✅ |

## Tech Stack

- **Framework**: Next.js (App Router)
- **Hosting**: Vercel
- **Database**: GitHub Gist (JSON storage via API)
- **Auth**: Cookie-based email (MVP)

## Comparison

| Feature | TestimonialFlow | Testimonial.to | Senja | Famewall |
|---|---|---|---|---|
| Free tier | ✅ 10 testimonials | ✅ Limited | ✅ Limited | ✅ Limited |
| Embed widget | ✅ | ✅ | ✅ | ✅ |
| Wall of Love | ✅ Free | Paid | Paid | ✅ |
| Starting price | $9/mo | $20/mo | $29/mo | $9/mo |
| Setup time | 2 min | 5 min | 10 min | 5 min |

## Links

- 🌐 [Website](https://testimonialflow-kappa.vercel.app)
- 🎯 [Live Demo (Wall of Love)](https://testimonialflow-kappa.vercel.app/wall/demo-saas)
- 📝 [Submit a testimonial (demo)](https://testimonialflow-kappa.vercel.app/collect/demo-saas)
- 🛠️ [Testimonial Request Email Generator](https://testimonialflow-kappa.vercel.app/tools/testimonial-request-email-generator)
- 📖 [Best Testimonial Tools Comparison](https://testimonialflow-kappa.vercel.app/best-testimonial-tools)

## License

MIT
