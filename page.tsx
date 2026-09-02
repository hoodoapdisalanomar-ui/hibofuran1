"use client";

import { useState } from "react";
import SubmitModal from "./components/SubmitModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#07090e]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 font-black text-emerald-400 border border-emerald-500/20">
              HO
            </span>
            <span className="text-lg font-extrabold tracking-wider text-white">
              HARGEISA OPEN
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-slate-800 bg-[#121824]/50 p-1.5 text-sm font-medium text-slate-300">
            <a href="#" className="rounded-xl bg-emerald-500 px-4 py-2 text-black font-bold shadow-lg shadow-emerald-500/20 transition">Home</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Hibo Furan</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Dadka</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Aqoon & Qoraallo</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Fikrado</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Miiska Furan</a>
            <a href="#" className="rounded-xl px-4 py-2 transition hover:bg-slate-800 hover:text-white">Creative</a>
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-emerald-500/25 transition hover:brightness-110 active:scale-95"
          >
            + Soo Bandhig
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6">
            ✨ Hal kursi • Hal qof • Dad kala duwan
          </div>
          
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hargeisa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Open</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-300 sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Madal lagu ogaado, lagu muujiyo, laguna horumariyo hibada, xirfadaha, aqoonteeda, fikradaha iyo khibradaha bulshada.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-2xl bg-emerald-500 px-8 py-4 font-black text-black shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-400 hover:scale-105"
            >
              Hadda Soo Bandhig Hibadaada
            </button>
          </div>
        </div>
      </section>

      {/* Categories / Modern Cards Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Qaybaha Muhiimka ah</h2>
          <p className="mt-2 text-2xl font-black text-white sm:text-3xl">Madal casriya oo loogu talagalay horumarka</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-3xl border border-slate-800 bg-[#121824]/60 p-8 backdrop-blur-sm transition hover:border-emerald-500/50 hover:bg-[#121824]">
            <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/10 text-2xl border border-emerald-500/20">🎓</div>
            <h3 className="text-xl font-bold text-white">Waxbarasho</h3>
            <p className="mt-2 text-sm text-slate-400">Arday, macallimiin, iyo aqoonyahanno la wadaagaya aqoonta.</p>
          </div>
          <div className="group rounded-3xl border border-slate-800 bg-[#121824]/60 p-8 backdrop-blur-sm transition hover:border-emerald-500/50 hover:bg-[#121824]">
            <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/10 text-2xl border border-emerald-500/20">💼</div>
            <h3 className="text-xl font-bold text-white">Ganacsi & Hoggaan</h3>
            <p className="mt-2 text-sm text-slate-400">Ganacsato, maamulayaal, iyo hoggaamiyeyaal soo bandhigaya khibradooda.</p>
          </div>
          <div className="group rounded-3xl border border-slate-800 bg-[#121824]/60 p-8 backdrop-blur-sm transition hover:border-emerald-500/50 hover:bg-[#121824]">
            <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/10 text-2xl border border-emerald-500/20">🎨</div>
            <h3 className="text-xl font-bold text-white">Hal-abuur</h3>
            <p className="mt-2 text-sm text-slate-400">Qorayaal, farshaxanno, iyo naqshadeeyayaal soo bandhigaya hal-abuurkooda.</p>
          </div>
        </div>
      </section>

      {/* Submit Modal Component */}
      <SubmitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          alert("Si guul leh ayaa loo gudbiyey!");
        }}
      />
    </main>
  );
}