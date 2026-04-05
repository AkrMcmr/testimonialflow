import type { MetadataRoute } from "next";

const DB_GIST_ID = process.env.DB_GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getProjectSlugs(): Promise<string[]> {
  if (!DB_GIST_ID || !GITHUB_TOKEN) return [];
  try {
    const res = await fetch(`https://api.github.com/gists/${DB_GIST_ID}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const gist = await res.json();
    const content = gist.files?.["db.json"]?.content;
    if (!content) return [];
    const db = JSON.parse(content);
    return (db.projects || []).map((p: { slug: string }) => p.slug);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://testimonialflow-kappa.vercel.app";
  const slugs = await getProjectSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compare/testimonial-to`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/senja`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/famewall`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare/shapo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-testimonial-tools`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/testimonial-request-email-generator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testimonial-examples`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const wallPages: MetadataRoute.Sitemap = slugs.map(slug => ({
    url: `${baseUrl}/wall/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...wallPages];
}
