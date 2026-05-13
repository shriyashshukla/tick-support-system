"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Clock3,
  Headset,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-sky-500 bg-white text-sky-600 shadow-sm">
              <div className="h-4 w-4 rotate-45 border-b-4 border-r-4 border-rose-500"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                <span className="text-slate-900">TICK</span>{" "}
                <span className="text-sky-600">SOFT</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Technology</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/create-ticket">Create Ticket</Link>
            <Link href="/login">Login</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Login
            </Link>
            <Link href="/signup" className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:from-sky-500 hover:to-indigo-500">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            Customer support reimagined
          </p>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Help your users faster with TickSoft.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Submit tickets, manage agent workflows, and keep visibility across your support pipeline with a polished, modern dashboard.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/create-ticket"
              className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:shadow-sky-500/30"
            >
              Create Ticket
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              View Dashboard
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <StatCard value="10K+" label="Tickets solved" />
            <StatCard value="99%" label="Satisfaction" />
            <StatCard value="24/7" label="Support" />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-sky-700 to-indigo-700 px-8 py-10 text-white shadow-2xl shadow-slate-900/40">
          <div className="absolute inset-x-0 top-0 h-48 bg-white/5 blur-3xl" />
          <div className="relative z-10 space-y-8">
            <div className="rounded-[2rem] bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/30">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Recent tickets</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Live queue overview</h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">Active</span>
              </div>

              <div className="mt-8 space-y-5">
                <TicketCard title="Login Issue" badge="High" description="Unable to access dashboard panel." />
                <TicketCard title="Payment Failed" badge="Medium" description="Payment gateway not responding." />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <MiniFeature title="Fast Support" icon={<Headset size={24} />} />
              <MiniFeature title="Secure" icon={<ShieldCheck size={24} />} />
              <MiniFeature title="Tracking" icon={<Ticket size={24} />} />
              <MiniFeature title="24/7" icon={<Clock3 size={24} />} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <FeatureCard
              icon={<Users size={30} />}
              title="Support teams love it"
              desc="Organize tickets, reduce response times, and keep stakeholders aligned." 
            />
            <FeatureCard
              icon={<ShieldCheck size={30} />}
              title="Reliable security"
              desc="Protect customer data and ensure every ticket is handled safely." 
            />
            <FeatureCard
              icon={<Clock3 size={30} />}
              title="Always available"
              desc="Keep support running around the clock and never miss an issue." 
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TickSoft Technology. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl bg-white px-6 py-7 shadow-xl shadow-slate-200">
      <p className="text-4xl font-semibold text-slate-900">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white">{icon}</div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600 leading-7">{desc}</p>
    </div>
  );
}

function TicketCard({ title, badge, description }: { title: string; badge: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-700/80 bg-slate-950/95 p-5 shadow-xl shadow-slate-950/30">
      <div className="flex items-center justify-between gap-3">
        <p className="text-lg font-semibold text-white">{title}</p>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300">{badge}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}

function MiniFeature({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-slate-950/20">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">{icon}</div>
      <p className="mt-4 text-base font-semibold">{title}</p>
    </div>
  );
}

