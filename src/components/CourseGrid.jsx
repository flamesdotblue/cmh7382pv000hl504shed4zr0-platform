import React from 'react';
import { BookOpen, MonitorSmartphone, Brain, Satellite } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Intro to Spatial Computing',
    level: 'Beginner',
    icon: Satellite,
    color: 'from-cyan-400 to-blue-500',
    description: 'Navigate and interact with 3D scenes, build spatial intuition, and understand coordinate systems.',
  },
  {
    id: 2,
    title: 'Data Visualization in 3D',
    level: 'Intermediate',
    icon: MonitorSmartphone,
    color: 'from-violet-500 to-fuchsia-500',
    description: 'Transform complex datasets into immersive, explorable visual stories inside your browser.',
  },
  {
    id: 3,
    title: 'Neural Networks, Visually',
    level: 'Intermediate',
    icon: Brain,
    color: 'from-emerald-400 to-teal-500',
    description: 'Understand tensors, layers, and training dynamics with interactive 3D simulations.',
  },
  {
    id: 4,
    title: 'Sustainable Tech Design',
    level: 'All Levels',
    icon: BookOpen,
    color: 'from-amber-400 to-orange-500',
    description: 'Design with the environment in mind: lifecycle thinking, energy budgets, and green UX patterns.',
  },
];

function CourseCard({ course }) {
  const Icon = course.icon;
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/10">
      <div className={`inline-flex items-center justify-center rounded-md bg-gradient-to-r ${course.color} text-slate-900 h-10 w-10 shadow`}> 
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{course.title}</h3>
      <p className="mt-1 text-sm text-slate-300">{course.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-slate-200">{course.level}</span>
        <button className="rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1.5 font-medium text-slate-900 shadow hover:opacity-95 transition">
          Enroll
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-r from-white/10 to-white/0 blur-2xl" />
      </div>
    </article>
  );
}

export default function CourseGrid() {
  return (
    <div id="courses">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Courses</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Build skills with interactive lessons, hands-on labs, and real-time feedback. Learn by doing—directly inside your browser.
          </p>
        </div>
        <a href="#" className="hidden sm:inline-block rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
