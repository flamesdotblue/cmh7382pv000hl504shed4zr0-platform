import React from "react";
import { Server, Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow">
            <Server size={20} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Golang Hello World Server</h1>
            <p className="text-xs text-slate-400">Responds with "Hello World" to any request</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
          <Rocket size={16} className="text-indigo-400" />
          <span>Ready to run in seconds</span>
        </div>
      </div>
    </header>
  );
}
