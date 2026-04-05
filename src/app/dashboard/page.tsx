import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get("tf_email")?.value;

  if (!email) {
    redirect("/login");
  }

  const projects = await db.execute({
    sql: "SELECT id, name, slug, created_at FROM projects WHERE owner_email = ? ORDER BY created_at DESC",
    args: [email],
  });

  const projectList = projects.rows as unknown as Array<{
    id: string;
    name: string;
    slug: string;
    created_at: string;
  }>;

  // Fetch testimonials for each project
  const projectsWithTestimonials = await Promise.all(
    projectList.map(async (project) => {
      const testimonials = await db.execute({
        sql: "SELECT id, name, role, text, rating, approved, created_at FROM testimonials WHERE project_id = ? ORDER BY created_at DESC",
        args: [project.id],
      });
      return {
        ...project,
        testimonials: testimonials.rows as unknown as Array<{
          id: string;
          name: string;
          role: string;
          text: string;
          rating: number;
          approved: number;
          created_at: string;
        }>,
      };
    })
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">TestimonialFlow</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{email}</span>
          <form action="/api/auth/logout" method="POST">
            <button className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Logout</button>
          </form>
        </div>
      </header>
      <DashboardClient projects={projectsWithTestimonials} email={email} />
    </main>
  );
}
