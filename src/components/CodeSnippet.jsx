import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CodeSnippet({ title, code, language = "plaintext" }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/60">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/70 border-b border-slate-800">
        <div className="text-xs font-medium text-slate-300">{title}</div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed bg-gradient-to-b from-slate-950 to-slate-900">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
