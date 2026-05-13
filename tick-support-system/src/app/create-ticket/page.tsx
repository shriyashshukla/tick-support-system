"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function CreateTicketPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [message, setMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, priority }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to create ticket.");
      }

      setTitle("");
      setDescription("");
      setPriority("Medium");
      setMessage("Ticket created successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unexpected error.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-500">Create Ticket</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">Submit a support request</h1>
            </div>
            <Link href="/dashboard" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Go to Dashboard
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Ticket Title</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Describe the issue"
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Details</span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Add any relevant information about the issue."
                className="mt-3 min-h-[160px] w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Priority</span>
              <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-sky-500"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Submit Ticket"}
              </button>
            </div>

            {message ? (
              <p className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 shadow-sm">
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}
