import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-slate-400">
        <p>
          Built with Go, React, and Tailwind CSS. Start the server, send any request, and receive: <span className="text-slate-200">Hello World</span>.
        </p>
      </div>
    </footer>
  );
}
