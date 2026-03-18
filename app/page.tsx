import Footer from "@/components/Footer";
import GeoBackground from "@/components/GeoBackground";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "So' Nourry Payn — Développeur fullstack Python & React",
  description: "Portfolio de So' Nourry Payn, développeur fullstack Python, Django, TypeScript, React et Next.js.",
};

const stack = ["Python", "Django", "TypeScript", "React", "Next.js", "PostgreSQL", "Docker"];
const mainStack = ["Python", "Django", "TypeScript", "React", "Next.js"];

const projects = [
  {
    icon: "⚙",
    title: "DataFeedParserPy",
    desc: "CLI Python qui fetch un flux XML depuis un serveur distant, le parse et le stocke dans une base SQLite.",
    tags: ["Python", "SQLite", "CLI"],
    href: "https://github.com/callypige/DataFeedParserPy",
  },
  {
    icon: "◆",
    title: "Django-todo-notes-api",
    desc: "API REST avec deux apps Django interconnectées : Notes et Todos.",
    tags: ["Python", "Django", "REST API"],
    href: "https://github.com/callypige/Django-todo-notes-api",
  },
  {
    icon: "▶",
    title: "ExpressRecorder",
    desc: "Application web d'enregistrement audio construite avec Node.js/Express.js, TypeScript et une interface front-end moderne.",
    tags: ["TypeScript", "Node.js", "Express"],
    href: "https://github.com/callypige/ExpressRecorder",
  },
  {
    icon: "◉",
    title: "nextjs-trends-feed",
    desc: "Application Next.js pour suivre les discussions réglementaires sur les réseaux sociaux sur les technologies émergentes.",
    tags: ["Next.js", "TypeScript", "Reddit"],
    href: "https://github.com/callypige/nextjs-trends-feed",
  },
  {
    icon: "🌙",
    title: "Dreamology Diary",
    desc: "App Next.js pour gérer et tracker ses rêves en privé. Construit avec MongoDB Atlas, NextAuth.js et React.",
    tags: ["Next.js", "MongoDB", "NextAuth"],
    href: "https://github.com/callypige/dreamology-diary",
  },
];

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-[#faf9f5] text-[#1a1a1a] overflow-x-hidden">

        <GeoBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-8">

          {/* Nav */}
          <nav className="flex justify-between items-center pb-14">
            <span className="font-bold text-sm">
              so.<span className="text-violet-600">dev</span>
            </span>
            <div className="flex gap-8">
              <a href="#about" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">A propos</a>
              <a href="#projets" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Projets</a>
              <a href="https://github.com/callypige" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">GitHub</a>
            </div>
          </nav>

          
          {/* Hero */}
          <section className="py-12 pb-20 flex items-start justify-between gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 rounded-full px-4 py-1.5 text-xs text-yellow-800 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                Disponible pour de nouvelles opportunités
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tighter mb-6">
                Développeur fullstack
                <br />
                <span className="text-violet-600">Python et React</span>
              </h1>

              <h3 className="text-gray-500 text-base leading-relaxed max-w-md mb-8 font-light">
                Salut, je suis So&apos; Nourry Payn. Je construis des applications web robustes
                et des APIs performantes. Passionné par le clean code et les architectures
                qui tiennent dans le temps.
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {stack.map((s) => (
                  <span
                    key={s}
                    className={[
                      "text-xs px-3 py-1.5 rounded-full border",
                      mainStack.includes(s)
                        ? "border-violet-200 text-violet-600 bg-violet-50"
                        : "border-gray-200 text-gray-400 bg-white",
                    ].join(" ")}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="#projets" className="text-sm font-medium px-6 py-2.5 rounded-lg bg-violet-600 text-white hover:opacity-85 transition-opacity">
                  Voir mes projets
                </a>
                <a href="https://www.linkedin.com/in/sophie-nourry-payn/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-6 py-2.5 rounded-lg border border-gray-200 text-gray-500 bg-white hover:border-violet-400 hover:text-violet-600 transition-colors">
                  LinkedIn
                </a>
                <Link href="/cv" className="text-sm font-medium px-6 py-2.5 rounded-lg border border-gray-200 text-gray-500 bg-white hover:border-violet-400 hover:text-violet-600 transition-colors">
                  Voir mon CV
                </Link>
              </div>
            </div>

            <div className="shrink-0 pt-8">
              <Image
                src="/avatar_so_nourry.jpg"
                alt="So' Nourry Payn"
                width={160}
                height={160}
                className="rounded-full border-4 border-violet-100"
              />
            </div>
          </section>

          <hr className="border-[#f0ece4] mb-12" />

          {/* Projets */}
            <section id="projets" className="mb-16">
              <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-6">projets</p>
              <div className="flex flex-col gap-4">
                {projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-[#f0ece4] rounded-xl p-8 flex justify-between items-start gap-6 hover:border-violet-200 transition-colors"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-yellow-50 border border-yellow-200 flex items-center justify-center text-lg mb-4">
                        {p.icon}
                      </div>
                      <p className="font-semibold text-base text-gray-900 mb-2">{p.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-lg">{p.desc}</p>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-300 group-hover:text-violet-500 transition-all text-xl mt-1 shrink-0">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>

          <hr className="border-[#f0ece4] mb-12" />

          {/* About */}
          <section id="about" className="mb-16">
            <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-6">A propos</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                <p className="text-3xl font-bold text-violet-600">5+</p>
                <p className="text-xs text-gray-400 mt-1">ans d&apos;Expérience</p>
              </div>
              <div className="bg-white border border-[#f0ece4] rounded-xl p-5">
                <p className="text-3xl font-bold text-violet-600">5</p>
                <p className="text-xs text-gray-400 mt-1">Projets sur GitHub</p>
              </div>
              <div className="col-span-2 bg-white border border-[#f0ece4] rounded-xl p-5 text-sm text-gray-500 leading-relaxed">
                <Link href="/cv" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Voir mon CV</Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />

        </div>
      </main>
    </>
  );
}