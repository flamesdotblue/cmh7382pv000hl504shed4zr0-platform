import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.4)_45%,rgba(2,6,23,0.8)_70%,rgba(2,6,23,1)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Learn in 3D: the future of immersive education
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Interact with futuristic environments, master complex concepts visually, and track progress in real-time. Built for creators, students, and teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#courses"
              className="rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-slate-900 shadow hover:opacity-95 transition"
            >
              Explore Courses
            </a>
            <a
              href="#features"
              className="rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              How it works
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm" id="features">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-slate-300">Interactive 3D Labs</dt>
              <dd className="mt-1 text-white font-semibold">Physics, Bio, Data Viz</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-slate-300">AI-Powered Pathways</dt>
              <dd className="mt-1 text-white font-semibold">Personalized learning</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-slate-300">Real-time Progress</dt>
              <dd className="mt-1 text-white font-semibold">Badges & analytics</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-slate-300">Eco-conscious</dt>
              <dd className="mt-1 text-white font-semibold">Sustainable mindset</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
