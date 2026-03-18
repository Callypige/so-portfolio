import Footer from "@/components/Footer";
import GeoBackground from "@/components/GeoBackground";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV — So' Nourry Payn",
  description: "CV de So' Nourry Payn, développeur fullstack Python, Django, TypeScript, React et Next.js.",
};

const experiences = [
  {
    title: "Développeur Full Stack",
    company: "Nalo",
    period: "Déc 2023 — Déc 2025",
    items: [
      "Développé des endpoints Django REST pour l'espace client, facilitant l'accès pour plus de 20k utilisateurs.",
      "Dirigé la création d'un microservice FastAPI pour la comptabilité, améliorant la précision des calculs financiers.",
      "Refactorisé trois modèles de profil financier, optimisant l'exploitation des données avec PostgreSQL.",
      "Développé des composants React/TypeScript pour l'interface client v2 et conçu un système de gestion des RIB.",
    ],
    tags: ["Django", "FastAPI", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Développeur Full Stack",
    company: "Sharingcloud",
    period: "Août 2021 — Nov 2023",
    items: [
      "Conçu l'architecture sécurisée d'endpoints Django REST avec permissions granulaires.",
      "Développé des commandes Django pour automatiser le nettoyage et l'anonymisation RGPD en PostgreSQL.",
      "Contribué au développement de composants React sur le dashboard avec intégration des APIs REST.",
      "Mis en place des conteneurs Docker pour standardiser les environnements de développement.",
    ],
    tags: ["Django", "React", "PostgreSQL", "Docker"],
  },
  {
    title: "Développeur Full Stack Next.js",
    company: "Green Energy Service",
    period: "Oct 2020 — Oct 2021",
    items: [
      "Conçu un microservice Node.js/Express.js/TypeScript de calcul et suivi des commissions commerciales.",
      "Développé un dashboard Next.js de visualisation des commissions en temps réel avec exports de données.",
    ],
    tags: ["Next.js", "Node.js", "Express", "TypeScript"],
  },
  {
    title: "Développeur Full Stack",
    company: "Foodomarket",
    period: "Sept 2019 — Août 2020",
    items: [
      "Refactorisé les modules de connexion et d'inscription en React.js.",
      "Développé un outil de suivi clientèle intégré au back-office Symfony.",
      "Conçu un outil de prospection Node.js avec scraping automatisé.",
    ],
    tags: ["React", "Node.js", "Symfony"],
  },
];

const skills = {
  "Backend": ["Python", "Django", "FastAPI", "API REST", "Microservices", "Node.js", "Express.js"],
  "Frontend": ["React.js", "TypeScript", "Next.js"],
  "Base de données": ["PostgreSQL", "SQL"],
  "DevOps & Outils": ["Docker", "Git", "GitHub"],
  "Qualité & Méthodo": ["TDD", "Tests unitaires", "Code Review", "Clean Code", "Agile", "Kanban"],
};

const languages = [
  { lang: "Français", level: "Natif", pct: 100 },
  { lang: "Anglais", level: "Professionnel", pct: 80 },
  { lang: "Japonais", level: "A2", pct: 20 },
];

const hobbies = [
    "Jeux vidéo (RPG principalement, MMMORPG)",
    "Musique (Pratique de la batterie et du kalimba)",
    "Développement jeux vidéo (projets personnels en Unity et Godot)",
    "Escapades culturelles (musées, expos, concerts)",
    "Sport (Ski, Vélo)",
];

export default function CV() {
  return (
    <>
      <main className="relative min-h-screen bg-[#faf9f5] text-[#1a1a1a] overflow-x-hidden">

        <GeoBackground />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-8">

          {/* Nav */}
          <nav className="flex justify-between items-center pb-14">
            <Link href="/" className="font-bold text-sm">
              so.<span className="text-violet-600">dev</span>
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Accueil</Link>
              <a href="#experience" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Expérience</a>
              <a href="#competences" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Compétences</a>
            </div>
          </nav>

          {/* Header CV */}
          <section className="pb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-300 rounded-full px-4 py-1.5 text-xs text-yellow-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
              6 ans d&apos;expérience
            </div>
            <h1 className="text-4xl font-bold tracking-tighter mb-3">
              So&apos; Nourry Payn
            </h1>
            <p className="text-violet-600 font-medium mb-4">Développeur Full Stack Django/Node.js &amp; React</p>
            <h3 className="text-gray-500 leading-relaxed max-w-xl mb-6">
              Spécialisé en développement backend Django/Node.js et frontend React/TypeScript sur des produits SaaS B2B en production.
              Culture qualité forte : clean code, TDD, code review, architecture microservices.
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/callypige"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2 rounded-lg bg-violet-600 text-white hover:opacity-85 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sophie-nourry-payn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2 rounded-lg border border-gray-200 text-gray-500 bg-white hover:border-violet-400 hover:text-violet-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <hr className="border-[#f0ece4] mb-12" />

          {/* Expériences */}
          <section id="experience" className="mb-16">
            <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-8">expérience</p>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-white border border-[#f0ece4] rounded-xl p-6 hover:border-violet-200 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-base text-gray-900">{exp.title}</p>
                      <p className="text-violet-600 text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 border border-[#f0ece4] px-3 py-1 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 leading-relaxed flex gap-2">
                        <span className="text-violet-300 mt-1 shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-xs text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#f0ece4] mb-12" />

          {/* Compétences */}
          <section id="competences" className="mb-16">
            <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-8">compétences</p>
            <div className="flex flex-col gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white border border-[#f0ece4] rounded-xl p-5">
                  <p className="text-xs font-medium text-gray-400 mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="text-sm text-gray-700 bg-gray-50 border border-[#f0ece4] px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-[#f0ece4] mb-12" />

          {/* Langues */}
          <section className="mb-16">
            <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-8">langues</p>
            <div className="bg-white border border-[#f0ece4] rounded-xl p-6 flex flex-col gap-5">
              {languages.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-700">{l.lang}</span>
                    <span className="text-gray-400">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-400 rounded-full"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies */}
            <section className="mb-16">
                <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-8">hobbies</p>
                <div className="bg-white border border-[#f0ece4] rounded-xl p-6 flex flex-col gap-3">
                    {hobbies.map((hobby, i) => (
                        <div key={i} className="text-sm text-gray-500 leading-relaxed flex gap-2">
                            <span className="text-violet-300 mt-1 shrink-0">▸</span>
                            {hobby}
                        </div>
                    ))}
                </div>
            </section>


          {/* Formation */}
          <section className="mb-16">
            <p className="text-xs font-medium text-gray-300 tracking-widest uppercase mb-8">formation</p>
            <div className="bg-white border border-[#f0ece4] rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-base text-gray-900">BTS SIO Option SLAM</p>
                  <p className="text-sm text-gray-400 mt-1">Services Informatiques aux Organisations</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-50 border border-[#f0ece4] px-3 py-1 rounded-full shrink-0">
                  Sept 2017 — Juil 2019
                </span>
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