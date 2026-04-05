import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import CollectForm from "./collect-form";

export default async function CollectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const result = await db.execute({
    sql: "SELECT id, name, slug FROM projects WHERE slug = ?",
    args: [slug],
  });

  if (result.rows.length === 0) {
    notFound();
  }

  const project = result.rows[0] as unknown as { id: string; name: string; slug: string };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Share your experience with {project.name}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Your feedback helps others make better decisions.
          </p>
        </div>
        <CollectForm projectId={project.id as string} projectName={project.name as string} />
        <p className="mt-6 text-center text-xs text-gray-400">
          Powered by{" "}
          <a href="https://testimonialflow-kappa.vercel.app" className="underline hover:text-gray-600">
            TestimonialFlow
          </a>
        </p>
      </div>
    </main>
  );
}
