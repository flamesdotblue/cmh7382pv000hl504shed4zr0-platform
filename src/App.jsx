import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <section className="relative mx-auto max-w-7xl px-6 py-20">
          <CourseGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
