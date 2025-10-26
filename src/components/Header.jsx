import React from 'react';
import { Rocket, Book, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">NeuroSphere LMS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#courses">Courses</a>
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#community">Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition">
            <Book className="h-4 w-4" />
            Browse
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:opacity-95 transition">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
