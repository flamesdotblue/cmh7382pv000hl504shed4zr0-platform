import React from "react";
import { Terminal } from "lucide-react";

export default function Steps({ steps = [] }) {
  return (
    <ol className="space-y-5">
      {steps.map((s, idx) => (
        <li key={idx} className="group">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-700/30 text-xs font-semibold">
              {idx + 1}
            </div>
            <div className="flex-1">
              <p className="text-slate-200 font-medium">{s.label}</p>
              {s.note && <p className="text-slate-400 text-sm mt-0.5">{s.note}</p>}
              {s.command && (
                <div className="mt-2 rounded-lg border border-slate-800 bg-slate-950/60">
                  <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
                    <Terminal size={14} className="text-indigo-400" />
                    Command
                  </div>
                  <pre className="p-3 text-sm overflow-x-auto"><code>{s.command}</code></pre>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
