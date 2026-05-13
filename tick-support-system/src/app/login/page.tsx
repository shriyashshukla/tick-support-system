"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 border border-slate-800 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-400">TickSoft Login</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Access your support dashboard</h1>
          <p className="mt-3 text-slate-400">
            Sign in to view tickets, create new requests, and manage customer support effortlessly.
          </p>
        </div>

        <form className="space-y-6">
          <label className="block">
            <span className="text-sm text-slate-300">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-xl shadow-sky-500/20 transition hover:brightness-110"
          >
            Login Securely
          </button>
        </form>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          New to TickSoft?{' '}
          <Link href="/signup" className="font-semibold text-white hover:text-sky-300">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}
