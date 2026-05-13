import Link from "next/link";
import type { ReactNode } from "react";
import { Headset, ShieldCheck, Ticket, Clock3 } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-10 text-white shadow-2xl shadow-slate-900/30">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">TickSoft Dashboard</p>
              <h1 className="mt-4 text-4xl font-bold lg:text-5xl">Support productivity that scales</h1>
              <p className="mt-4 max-w-2xl text-slate-300 leading-8">
                Access your open tickets, review SLA performance, and manage agents from one clean dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/create-ticket" className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400">
                Create Ticket
              </Link>
              <Link href="/" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                Back to home
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard value="12K+" label="Tickets Resolved" />
          <StatCard value="99.2%" label="SLA Compliance" />
          <StatCard value="24/7" label="Customer Coverage" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <InfoCard icon={<Headset size={28} />} title="Fast Support" description="Route tickets quickly and respond faster with built-in prioritization." />
          <InfoCard icon={<ShieldCheck size={28} />} title="Secure Data" description="Encrypted ticket storage with user access controls and audit-ready logs." />
          <InfoCard icon={<Clock3 size={28} />} title="Always Available" description="Automate updates and keep customers informed with real-time status alerts." />
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to submit a new ticket?</h2>
              <p className="mt-2 text-slate-600">Use the ticket creator page to log issues and keep the team moving.</p>
            </div>
            <Link href="/create-ticket" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Open ticket
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.75rem] bg-white p-8 shadow-sm transition hover:shadow-lg">
      <p className="text-4xl font-bold text-slate-900">{value}</p>
      <p className="mt-3 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">{icon}</div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </div>
  );
}
