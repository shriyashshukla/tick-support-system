"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-3xl bg-slate-900/95 border border-slate-800 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur-xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.4em] text-fuchsia-400">TickSoft Sign Up</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Create your support account</h1>
          <p className="mt-3 text-slate-400">
            Start managing support tickets and deliver faster customer service with TickSoft.
          </p>
        </div>

        <form className="space-y-6">
          <label className="block">
            <span className="text-sm text-slate-300">Full Name</span>
            <input
              type="text"
              placeholder="Jane Doe"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Password</span>
            <input
              type="password"
              placeholder="Create a strong password"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-xl shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-fuchsia-300">
            Login now
          </Link>
        </div>
      </div>
    </main>
  );
}
