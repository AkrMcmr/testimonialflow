import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { readDb } from "@/lib/db";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get("tf_email")?.value;

  if (!email) {
    redirect("/login");
  }

  const db = await readDb();

  const userProjects = db.projects
    .filter(p => p.owner_email === email)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const projectsWithTestimonials = userProjects.map(project => ({
    ...project,
    testimonials: db.testimonials
      .filter(t => t.project_id === project.id)
      .sort((a, b) => b.created_at.localeCompare(a.created_at)),
  }));

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
