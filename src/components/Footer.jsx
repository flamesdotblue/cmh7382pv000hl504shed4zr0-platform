import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-semibold">NeuroSphere LMS</h3>
          <p className="mt-2 text-sm text-slate-400">
            A futuristic, interactive learning platform where complex ideas become intuitive in 3D.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li><a className="hover:text-white" href="#features">Features</a></li>
            <li><a className="hover:text-white" href="#courses">Courses</a></li>
            <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#careers">Careers</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-300">
            <li><a className="hover:text-white" href="#community">Community</a></li>
            <li><a className="hover:text-white" href="#guides">Guides</a></li>
            <li><a className="hover:text-white" href="#status">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} NeuroSphere. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
