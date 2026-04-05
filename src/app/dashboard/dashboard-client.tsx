"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  approved: number;
  created_at: string;
};

type Project = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
  testimonials: Testimonial[];
};

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
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
  t,
  onApprove,
  onDelete,
}: {
  t: Testimonial;
  onApprove: (id: string, approved: number) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className={`bg-white rounded-lg border p-4 ${t.approved ? "border-green-200" : "border-gray-200"}`}>
      <div className="flex items-start justify-between">
        <div>
          <StarDisplay rating={t.rating} />
          <p className="mt-2 text-sm text-gray-700">&ldquo;{t.text}&rdquo;</p>
          <p className="mt-2 text-xs font-semibold text-gray-900">{t.name}</p>
          {t.role && <p className="text-xs text-gray-500">{t.role}</p>}
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full ${t.approved ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
          {t.approved ? "Approved" : "Pending"}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        {!t.approved && (
          <button
            onClick={() => onApprove(t.id, 1)}
            className="text-xs px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Approve
          </button>
        )}
        {t.approved === 1 && (
          <button
            onClick={() => onApprove(t.id, 0)}
            className="text-xs px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 cursor-pointer"
          >
            Unapprove
          </button>
        )}
        <button
          onClick={() => onDelete(t.id)}
          className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function EmbedCode({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const code = `<div id="tf-widget-${slug}"></div>\n<script src="${baseUrl}/api/widget/${slug}"></script>`;

  return (
    <div className="mt-3">
      <p className="text-xs text-gray-500 mb-1">Embed code (paste on your site):</p>
      <div className="relative">
        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded-lg overflow-x-auto">{code}</pre>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="absolute top-2 right-2 text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 cursor-pointer"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function DashboardClient({
  projects: initialProjects,
  email,
}: {
  projects: Project[];
  email: string;
}) {
  const router = useRouter();
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [creating, setCreating] = useState(false);

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    if (!newProjectName) return;
    setCreating(true);
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newProjectName, owner_email: email }),
    });
    if (res.ok) {
      setNewProjectName("");
      setShowNewProject(false);
      router.refresh();
    }
    setCreating(false);
  }

  async function handleApprove(id: string, approved: number) {
    await fetch(`/api/testimonials/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved }),
    });
    router.refresh();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    router.refresh();
  }

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Your Projects</h2>
        <button
          onClick={() => setShowNewProject(!showNewProject)}
          className="px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 cursor-pointer"
        >
          + New Project
        </button>
      </div>

      {showNewProject && (
        <form onSubmit={createProject} className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex gap-3">
          <input
            type="text"
            placeholder="Project name (e.g. My Coffee Shop)"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
          <button
            type="submit"
            disabled={creating}
            className="px-4 py-2 bg-violet-600 text-white text-sm rounded-lg hover:bg-violet-700 disabled:opacity-50 cursor-pointer"
          >
            {creating ? "..." : "Create"}
          </button>
        </form>
      )}

      {initialProjects.length === 0 && !showNewProject && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No projects yet</p>
          <p className="text-sm mt-1">Create your first project to start collecting testimonials.</p>
        </div>
      )}

      {initialProjects.map((project) => (
        <div key={project.id} className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Collection URL:{" "}
                <a
                  href={`${baseUrl}/collect/${project.slug}`}
                  target="_blank"
                  className="text-violet-600 underline"
                >
                  {baseUrl}/collect/{project.slug}
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Wall of Love:{" "}
                <a
                  href={`${baseUrl}/wall/${project.slug}`}
                  target="_blank"
                  className="text-violet-600 underline"
                >
                  {baseUrl}/wall/{project.slug}
                </a>
                <span className="ml-2 text-xs text-gray-400">— share this page to show off your testimonials</span>
              </p>
            </div>
            <span className="text-sm text-gray-400">
              {project.testimonials.length} testimonial{project.testimonials.length !== 1 ? "s" : ""}
            </span>
          </div>

          <EmbedCode slug={project.slug} />

          {project.testimonials.length > 0 && (
            <div className="mt-4 grid gap-3">
              {project.testimonials.map((t) => (
                <TestimonialCard
                  key={t.id}
                  t={t}
                  onApprove={handleApprove}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}

          {project.testimonials.length === 0 && (
            <p className="mt-4 text-sm text-gray-400 text-center py-4">
              No testimonials yet. Share the collection URL with your customers!
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
