"use client";
import Image from "next/image";

import {
  Headset,
  ShieldCheck,
  Ticket,
  Clock3,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-4 border-blue-600 flex items-center justify-center">
              <div className="w-4 h-4 border-b-4 border-r-4 border-red-500 rotate-45 mb-1"></div>
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-blue-700">TICK</span>{" "}
                <span className="text-red-600">SOFT</span>
              </h1>

              <p className="text-xs tracking-[4px] text-gray-500">
                TECHNOLOGY
              </p>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-5 py-2 border rounded-lg text-sm hover:bg-gray-100">
              Login
            </button>

            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Smart Support <br />
            Ticket System
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Manage customer support tickets efficiently with
            a modern dashboard, real-time updates, and
            advanced analytics.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700">
              Create Ticket
            </button>

            <button className="px-7 py-4 border border-gray-300 rounded-xl font-medium hover:bg-gray-100">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-600">Tickets Solved</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">99%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10 shadow-xl">
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">
                  Recent Tickets
                </h3>

                <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  Active
                </span>
              </div>

              <div className="mt-6 space-y-4">
                
                <div className="border rounded-xl p-4">
                  <div className="flex justify-between">
                    <p className="font-medium">
                      Login Issue
                    </p>

                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                      High
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Unable to access dashboard panel.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <div className="flex justify-between">
                    <p className="font-medium">
                      Payment Failed
                    </p>

                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      Medium
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Payment gateway not responding.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Powerful Features
            </h2>

            <p className="text-gray-600 mt-4">
              Everything you need to manage support efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-14">
            
            <FeatureCard
              icon={<Headset size={32} />}
              title="Fast Support"
              desc="Quick response from support agents."
            />

            <FeatureCard
              icon={<ShieldCheck size={32} />}
              title="Secure"
              desc="Protected and encrypted data system."
            />

            <FeatureCard
              icon={<Ticket size={32} />}
              title="Ticket Tracking"
              desc="Track all support requests live."
            />

            <FeatureCard
              icon={<Clock3 size={32} />}
              title="24/7 Service"
              desc="Available round the clock support."
            />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          
          <p>
            © 2026 TickSoft Technology. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
      
      <div className="text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mt-5">
        {title}
      </h3>

      <p className="text-gray-600 mt-3 leading-7">
        {desc}
      </p>
    </div>
  );
}

