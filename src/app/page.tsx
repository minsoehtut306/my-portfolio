"use client";

import { Icon } from "@iconify/react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


// ---- Skills data helpers ----
type Hue = "amber" | "sky";
type Skill =
  | { label: string; kind: "devicon"; token: string; hue?: Hue }
  | { label: string; kind: "iconify"; token: string; hue?: Hue };

const SkillBadge = ({ label, kind, token, hue = "amber" }: Skill) => {
  const color =
    hue === "amber"
      ? "text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)]"
      : "text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)]";

  return (
    <div className="group flex flex-col items-center gap-2 w-24">
      {kind === "devicon" ? (
        <i className={`${token} text-5xl ${color} transition`} />
      ) : (
        <Icon icon={token} className={`text-5xl ${color} transition`} />
      )}
      <span className="text-xs text-neutral-300">{label}</span>
    </div>
  );
};

// Data
const rowLang: Skill[] = [
  { label: "Azure", kind: "iconify", token: "simple-icons:microsoftazure" },
  { label: "Java", kind: "devicon", token: "devicon-java-plain" },
  { label: "C#", kind: "devicon", token: "devicon-csharp-plain" },
  { label: "Python", kind: "devicon", token: "devicon-python-plain" },
  { label: "JavaScript", kind: "devicon", token: "devicon-javascript-plain" },
  { label: "TypeScript", kind: "devicon", token: "devicon-typescript-plain" },
  { label: "SQL", kind: "devicon", token: "devicon-sqlite-plain" },
  { label: "HTML", kind: "devicon", token: "devicon-html5-plain" },
  { label: "CSS", kind: "devicon", token: "devicon-css3-plain" },
  { label: "PHP", kind: "devicon", token: "devicon-php-plain" },
  { label: "WRAMP", kind: "iconify", token: "mdi:chip" },
  { label: "Batch Script", kind: "iconify", token: "mdi:console" },
];

const rowStack: Skill[] = [
  { label: ".NET", kind: "devicon", token: "devicon-dotnetcore-plain" },
  { label: "React", kind: "devicon", token: "devicon-react-original" },
  { label: "Node.js", kind: "devicon", token: "devicon-nodejs-plain" },
  { label: "MongoDB", kind: "devicon", token: "devicon-mongodb-plain" },
  { label: "Oracle", kind: "devicon", token: "devicon-oracle-original" },
  { label: "MySQL", kind: "devicon", token: "devicon-mysql-plain" },
  { label: "R", kind: "devicon", token: "devicon-r-plain" },
  { label: "LaTeX", kind: "devicon", token: "devicon-latex-original" },
];

const rowTools: Skill[] = [
  { label: "Visual Studio", kind: "devicon", token: "devicon-visualstudio-plain" },
  { label: "VS Code", kind: "devicon", token: "devicon-vscode-plain" },
  { label: "GitHub", kind: "devicon", token: "devicon-github-original" },
  { label: "Android Studio", kind: "devicon", token: "devicon-androidstudio-plain" },
  { label: "Unreal Engine", kind: "devicon", token: "devicon-unrealengine-original" },
  { label: "Google Colab", kind: "iconify", token: "simple-icons:googlecolab" },
  { label: "GraphStream", kind: "iconify", token: "mdi:graph-outline" },

];

const rowAEC: Skill[] = [
  { label: "Revit", kind: "iconify", token: "simple-icons:autodeskrevit" },
  { label: "AutoCAD", kind: "iconify", token: "simple-icons:autocad" },
  { label: "Dynamo", kind: "iconify", token: "simple-icons:autodesk" },
];

// Utility to alternate colors per row
const withAlternatingHues = (arr: Skill[]) =>
  arr.map((s, i) => ({ ...s, hue: (i % 2 === 0 ? "amber" : "sky") as Hue }));


export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const items = [
  { href: "#home", label: "Home" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#Skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

  return (
    <main className="bg-neutral-900 text-neutral-100">
      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled ? "backdrop-blur bg-neutral-900/80" : "bg-neutral-900"
        } border-neutral-800`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-2xl tracking-tight">
            Min <span className="text-amber-400">Soe Htut</span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {items.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="text-base font-medium text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-sm px-3 py-2 rounded border border-neutral-700"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`${open ? "block" : "hidden"} md:hidden border-t border-neutral-800`}
        >
          <ul className="max-w-7xl mx-auto px-6 py-3 space-y-1">
            {items.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-neutral-300 hover:text-amber-400 transition-colors"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* HERO*/}
      <section
        id="home"
        className="min-h-[70vh] flex flex-col-reverse md:flex-row-reverse items-center justify-center px-6 md:px-12 gap-10 pt-8">
        {/* Right: Photo */}
        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex-shrink-0">
          <Image
            src="/profile-body.png"
            alt="Portrait of Min Soe Htut"
            fill
            className="object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>

        {/* Left: Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-amber-400">Min Soe</span>
          </h1>

          <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
            Fresh graduate from the <span className="text-amber-400 font-semibold">University of Waikato </span> 
            with a Bachelor of Science majoring in <span className="text-sky-400 font-semibold">Computer Science</span>. 
            I am passionate about improving my skills across software development, database management, data analytics, 
            network, and cloud systems. I enjoy building <span className="text-amber-400">full-stack applications </span> 
            using modern, interactive tools and writing clean, well-structured code that follows consistent development 
            standards and best practices. With a background in <span className="text-sky-400">Civil & Structural Engineering </span> 
            and <span className="text-amber-400">Operations Management</span>, I’m eager to contribute to opportunities that merge 
            technology, problem-solving, and innovation.
            </p>
          {/* Buttons */}
          <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#journey"
              className="px-5 py-2.5 rounded-lg border border-neutral-600 hover:border-sky-400 text-neutral-200 hover:text-amber-400 transition"
            >
              Know more →
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg border border-neutral-600 hover:border-amber-400 text-neutral-200 hover:text-sky-400 transition"
            >
              Contact Me
            </a>
          </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center md:justify-start gap-5">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=minsoehtut306@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition"
            aria-label="Send Email"
            title="Send me an Email"
          >
            <Mail size={24} className="text-amber-400" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/min-soe-htut"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition"
            aria-label="LinkedIn Profile"
            title="View my LinkedIn"
          >
            <Linkedin size={24} className="text-amber-400" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/minsoehtut306"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition"
            aria-label="GitHub Profile"
            title="View my GitHub Projects"
          >
            <Github size={24} className="text-amber-400" />
          </a>
        </div>
        </div>
      </section>

{/* JOURNEY */}
<section id="journey" className="py-20 bg-neutral-900 border-t border-neutral-800">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Journey</h2>

    {/* Timeline wrapper */}
    <div className="relative">
      {/* Timeline line (mobile: left, md+: center) */}
      <div className="absolute top-0 h-full w-[2px] bg-amber-400/25 left-6 md:left-1/2 md:-translate-x-1/2" />

      {[
        {
          type: "edu",
          title: "B.Sc (Computer Science)",
          place: "University of Waikato, New Zealand",
          period: "2023 – 2025",
          details:
            "Focused on Networking, Software Engineering, Database Systems, and Data Analytics.",
          papersByYear: {
            "2025": [
              "COMPX278 - Technology and Complex Problems",
              "COMPX301 - Design and Analysis of Algorithms",
              "COMPX323 - Advanced Database Concepts",
              "COMPX341 - Software Engineering Methods",
              "HECSS363 - The Impact Lab",
            ],
            "2024": [
              "COMPX201 - Data Structures and Algorithms",
              "COMPX202 - Mobile Computing and Software Architecture",
              "COMPX203 - Computer Systems",
              "COMPX204 - Practical Networking and Cyber Security",
              "COMPX216 - Artificial Intelligence",
              "COMPX223 - Database Practice and Experience",
              "COMPX251 - Applied Computing Tools 1",
              "COMPX310 - Machine Learning",
              "COMPX361 - Logic and Computation",
              "PRMGT200 - Fundamentals of Operations and Project Management",
            ],
            "2023": [
              "COMPX101 - Introduction to Programming",
              "COMPX102 - Object-Oriented Programming",
              "CSMAX170 - Foundations in Computing and Mathematical Sciences",
              "CSMAX270 - Cultural Perspectives for Computing and Mathematical Sciences",
              "DATAX121 - Introduction to Statistical Methods",
              "DIGIB101 - The World of Digital Business",
              "MATHS135 - Discrete Structures",
              "MATHS165 - General Mathematics",
              "MEDIA309 - Game, Play and Society",
            ],
          },
        },
        {
          type: "edu",
          title: "Higher Diploma in Ethical Hacking & Forensic Investigations",
          place: "MDIS Singapore — Awarded by Teesside University, UK",
          period: "2022 – 2023",
          details: "Specialized in cybersecurity, ethical hacking, and digital forensics.",
        },
        {
          type: "work",
          title: "Operation Director",
          place: "Myan Pyi Kyaw Kyar Co., Ltd, Myanmar",
          period: "2020 – 2022",
          details:
            "Directed motel & construction operations; managed teams, budgets, and timelines; trained staff.",
        },
        {
          type: "work",
          title: "Assistant BIM Technician",
          place: "Arup Singapore Pte Ltd",
          period: "2018 – 2020",
          details:
            "Produced 3D BIM drawings for concrete/steel structures; modernized standard details.",
        },
        {
          type: "edu",
          title: "Diploma in Construction Information Technology",
          place: "BCA Academy, Singapore",
          period: "2015 – 2018",
          details:
            "BIM-based drawings, services coordination, and data integration across design",
        },
      ].
      
      
      map((item, i) => {
        const isRight = i % 2 === 0;
        const skyAccent =
          item.title === "Operation Director" || item.title === "Assistant BIM Technician";
        return (
          <div
            key={i}
            className="
              relative mb-14 md:mb-16
              grid grid-cols-[24px,1fr]
              md:grid-cols-2 md:items-center
            "
          >
            {/* DOT on the line */}
            <span
              className={`
                absolute z-10 rounded-full w-3.5 h-3.5
                ${skyAccent
                  ? "bg-sky-400 ring-4 ring-sky-400/20 shadow-[0_0_18px_2px_rgba(56,189,248,0.40)]"
                  : "bg-amber-400 ring-4 ring-amber-400/20 shadow-[0_0_18px_2px_rgba(251,191,36,0.35)]"}
                left-6 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2
                md:top-1/2 md:-translate-y-1/2
              `}
              aria-hidden="true"
            />

            {/* mobile spacer to push card off the line */}
            <div className="col-span-1 md:hidden" />

            {/* CARD */}
            <div
              className={`
                col-span-1 ml-6 md:ml-0 md:mt-0
                ${isRight ? "md:pl-10 md:order-2" : "md:pr-10 md:order-1"}
              `}
            >
              <div
                className={`
                  group relative p-5 rounded-xl border bg-neutral-800/70 border-neutral-700
                  transition-shadow
                  ${skyAccent
                    ? "hover:shadow-[0_0_24px_3px_rgba(56,189,248,0.25)]"
                    : "hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)]"}
                `}
              >
                {/* halo */}
                <div
                  className={`
                    pointer-events-none absolute inset-0 rounded-xl
                    before:content-[''] before:absolute before:inset-0 before:rounded-xl
                    ${skyAccent
                      ? "before:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.14),rgba(56,189,248,0)_60%)]"
                      : "before:bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.14),rgba(251,191,36,0)_60%)]"}
                    opacity-0 group-hover:opacity-100 transition-opacity
                  `}
                />
                <h3
                  className={`text-lg font-semibold ${
                    skyAccent ? "text-sky-400" : "text-neutral-100"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="font-medium text-neutral-300">{item.place}</p>
                <p className="text-sm text-neutral-400">{item.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{item.details}</p>
                <div
                  className={`mt-3 h-1 w-16 rounded ${
                    skyAccent ? "bg-sky-400/70" : "bg-amber-400/70"
                  }`}
                />

            {/* Papers (only for the B.Sc card) */}
            {"papersByYear" in item && (
              <details className="mt-4 group/open">
                <summary className="cursor-pointer select-none text-sm text-neutral-300 hover:text-amber-300 transition flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-amber-400/70" />
                  Show papers
                </summary>

                <div className="mt-3 space-y-4">
                  {(
                    ("papersByYear" in item && item.papersByYear
                      ? (Object.entries(item.papersByYear) as [string, string[]][])
                      : []
                    )
                  )
                    // newest year first (numeric sort)
                    .sort(([a], [b]) => Number(b) - Number(a))
                    .map(([year, papers]) => (
                      <div key={year}>
                        <div className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
                          {year}
                        </div>
                        <ul className="space-y-1.5">
                          {papers.map((raw, idx) => {
                            // Expect "COMPX101 - Intro..." or "COMPX101 Intro..."
                            const m = raw.match(/^([A-Z]+[A-Z0-9]+)\s*(?:-|—)?\s*(.*)$/);
                            const code = m ? m[1] : raw;
                            const name = m && m[2] ? m[2] : "";
                            return (
                              <li key={idx} className="flex items-baseline gap-2">
                                <span className="text-base font-semibold text-amber-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]">
                                  {code}
                                </span>
                                {name && (
                                  <>
                                    <span className="text-neutral-500">-</span>
                                    <span className="text-sm text-neutral-300">{name}</span>
                                  </>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                </div>
              </details>
            )}
              </div>
            </div>

            {/* md+: spacer to keep center line centered */}
            <div className={`hidden md:block ${isRight ? "md:order-1" : "md:order-2"}`} />
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* PROJECTS */}
<section
  id="projects"
  className="py-20 bg-neutral-900 border-t border-neutral-800"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">
      Featured Projects
    </h2>
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      
      {/* AI & Machine Learning Projects */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          AI & Machine Learning Projects
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A comprehensive collection of Artificial Intelligence and Machine Learning coursework,
          covering AI search algorithms, adversarial MCTS, constraint optimization, and Python-based
          machine learning labs (regression, clustering, and neural networks).
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Python, NumPy, Google Colab
        </p>
        <a
          href="https://github.com/minsoehtut306/AI-and-Machine-Learning"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

    {/* Algorithms */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Algorithms
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A curated collection of algorithmic implementations from sorting, graphs, regex,
          dynamic programming, and complexity analysis — written in Java.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Java, Algorithm Design, Graphs, Dynamic Programming
        </p>
        <a
          href="https://github.com/minsoehtut306/Algorithms"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

    {/* Craft World Game */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Craft World – Unreal Engine 5 Game
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A third-person puzzle and shooter game built with Unreal Engine 5.
          Features interactive puzzle rooms, AI combat, health systems, and
          Blueprints-based logic with animations and HUD widgets.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Unreal Engine 5, Blueprints, AI, Level Design
        </p>
        <a
          href="https://github.com/minsoehtut306/Craft-World"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

    {/* Driving Quiz App */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(56,189,248,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">
          Driving Quiz App (.NET MAUI)
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A cross-platform C# quiz app built with .NET MAUI to help users practice for the
          New Zealand driving theory test. Features Android and Windows builds with device setup
          guidance and interactive multiple-choice quizzes.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: .NET MAUI, C#, XAML, Visual Studio 2022
        </p>
        <a
          href="https://github.com/minsoehtut306/DrivingQuiz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 text-neutral-900 font-medium shadow-[0_0_16px_2px_rgba(56,189,248,0.25)] transition"
        >
          View on GitLab →
        </a>
      </div>

    {/* Equipment-Rentals */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Equipment Rentals – Windows Forms Database App
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A login and registration demo using C# WinForms and SQL Server backend. Implements user
          authentication, registration, and session browsing for social media accounts with a
          connected database.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: C#, WinForms, SQL Server, ADO.NET
        </p>
        <a
          href="https://github.com/minsoehtut306/Equipment-Rentals"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

    {/* EV-Charger Finder */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          EV-Charger Finder (Android)
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          An Android app that helps users locate nearby EV charging stations using Google Maps API and device GPS.
          Includes search, location tracking, and charger detail views with integrated unit and instrumentation tests.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Java, Android Studio, Google Maps API, Gradle
        </p>
        <a
          href="https://github.com/minsoehtut306/EV-Changer-Finder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

      {/* Portfolio Website */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(56,189,248,0.25)] transition">
        <h3 className="text-xl font-semibold mb-2 text-sky-400">
          Portfolio Website (Next.js + Tailwind)
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A personal portfolio website built with Next.js and Tailwind CSS to showcase my journey, projects,
          and technical skills. Features a responsive dark theme, animated sections, and custom icon system.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Next.js, React, Tailwind CSS, TypeScript
        </p>
        <a
          href="https://github.com/minsoehtut306/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 text-neutral-900 font-medium shadow-[0_0_16px_2px_rgba(56,189,248,0.25)] transition"
        >
          View on GitHub →
        </a>
      </div>


    {/* Network File Transfer */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Network File Transfer (Java)
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A suite of Java networking projects demonstrating various communication protocols:
          TCP/UDP sockets, a lightweight HTTP server, TLS-encrypted file transfers, and a
          TFTP implementation for UDP-based file exchange.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: Java, TCP/UDP, HTTP, TLS/SSL
        </p>
        <a
          href="https://github.com/minsoehtut306/Network-File-Transfer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

    {/* WRAMP Exercises */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          WRAMP Exercises (Assembly + C)
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A series of low-level programming exercises for the WRAMP system, focusing on assembly and C integration.
          Covers I/O handling, serial communication, exceptions, interrupts, and a multitasking kernel for concurrent task execution.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: WRAMP Assembly, C, WRAMP Simulator / Hardware
        </p>
        <a
          href="https://github.com/minsoehtut306/Ramp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

      {/*Software Engineering Design */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Software Engineering Design Project
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A multi-stage Java project demonstrating full software lifecycle:
          design, testing, implementation, and maintenance. Includes GraphStream
          visualisation, JUnit tests, and CI/CD pipeline automation.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: LaTeX, Java, JUnit, GraphStream, CI/CD
        </p>
        <a
          href="https://github.com/minsoehtut306/Software-Engineering-Design"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

      {/*Boyes Park Redevelopment */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Boyes Park Redevelopment
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          Urban redevelopment project improving park safety, inclusivity, and
          amenities in collaboration with Hamilton City Council. Delivered via
          design documentation, report, and digital poster.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Focus: Safety by Design, Accessibility, Digital Engagement
        </p>
        <a
          href="https://github.com/minsoehtut306/The-Impact-Lab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>

      {/*Zoo Management App */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)] transition">
        <h3 className="text-xl font-semibold mb-2 text-amber-400">
          Zoo Management Application
        </h3>
        <p className="text-sm text-neutral-300 mb-3">
          A C# Windows Forms app for managing zoo data with dual support for Oracle (SQL)
          and MongoDB (NoSQL). Includes CRUD operations for animals, staff, and enclosures.
        </p>
        <p className="text-xs text-neutral-400 mb-4">
          Tech: C#, WinForms, Oracle, MongoDB
        </p>
        <a
          href="https://github.com/minsoehtut306/Zoo-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-auto px-4 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-neutral-900 font-medium"
        >
          View on GitLab →
        </a>
      </div>
    </div>
  </div>
</section>
{/* CERTIFICATIONS */}
<section
  id="certifications"
  className="py-20 bg-neutral-900 border-t border-neutral-800"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">
      Certifications
    </h2>

    <div className="grid gap-8 md:grid-cols-2">
      {/* Azure Fundamentals */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(56,189,248,0.25)] transition">
        <div className="flex items-center gap-3 mb-3">
          <Icon
            icon="simple-icons:microsoftazure"
            className="text-4xl text-sky-400"
          />
          <h3 className="text-lg font-semibold text-sky-400">
            Microsoft Certified: Azure Fundamentals (AZ-900)
          </h3>
        </div>
        <span className="inline-flex items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 mb-3">
          In progress
        </span>
        <p className="text-sm text-neutral-300">
          Currently preparing for the AZ-900 exam, focusing on core cloud
          concepts, Azure services, security, pricing, and governance.
        </p>
      </div>

      {/* Power Platform Fundamentals */}
      <div className="group relative rounded-xl border border-neutral-700 bg-neutral-800/70 p-6 hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.25)] transition">
        <div className="flex items-center gap-3 mb-3">
          <Icon
            icon="simple-icons:powerapps"
            className="text-4xl text-amber-400"
          />
          <h3 className="text-lg font-semibold text-amber-400">
            Microsoft Certified: Power Platform Fundamentals (PL-900)
          </h3>
        </div>
        <span className="inline-flex items-center rounded-full border border-amber-400/70 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300 mb-3">
          In progress
        </span>
        <p className="text-sm text-neutral-300">
          Studying low-code app development, Power Apps, Power Automate,
          Power BI, and Power Platform capabilities in preparation for the PL-900 exam.
        </p>
      </div>
    </div>
  </div>
</section>

{/* SKILLS */}
<section id="Skills" className="py-20 bg-neutral-900 border-t border-neutral-800">
  <div className="max-w-9xl mx-auto px-5">
    <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Skills & Tools</h2>

    {/* Row 1 */}
    <div className="flex flex-wrap justify-center gap-7">
      {withAlternatingHues(rowLang).map((s) => (
        <SkillBadge key={s.label} {...s} />
      ))}
    </div>

    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

    {/* Row 2 */}
    <div className="flex flex-wrap justify-center gap-7">
      {withAlternatingHues(rowStack).map((s) => (
        <SkillBadge key={s.label} {...s} />
      ))}
    </div>

    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

    {/* Row 3 */}
    <div className="flex flex-wrap justify-center gap-7">
      {withAlternatingHues(rowTools).map((s) => (
        <SkillBadge key={s.label} {...s} />
      ))}
    </div>

    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

    {/* Row 4 */}
    <div className="flex flex-wrap justify-center gap-7">
      {withAlternatingHues(rowAEC).map((s) => (
        <SkillBadge key={s.label} {...s} />
      ))}
    </div>
  </div>
</section>

{/* CONTACT */}
<section
  id="contact"
  className="py-8 border-t border-neutral-800 text-center bg-neutral-900"
>
  <h2 className="text-3xl font-bold mb-10 text-amber-400">Contact Me</h2>

  {/* Contact Info Row */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 text-neutral-300">
    <div className="flex items-center gap-2">
      <Mail className="size-5 text-sky-400" />
      <a
        href="mailto:minsoehtut306@email.com"
        className="hover:text-amber-400 transition"
      >
        minsoehtut306@email.com
      </a>
    </div>

    <div className="flex items-center gap-2">
      <Phone className="size-5 text-sky-400" />
      <a href="tel:+64224754505" className="hover:text-amber-400 transition">
        +64204463402
      </a>
    </div>

    <div className="flex items-center gap-2">
      <MapPin className="size-5 text-sky-400" />
      <span>Hamilton, New Zealand</span>
    </div>
  </div>

  {/* Social Icons Row */}
  <div className="flex justify-center gap-10">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=minsoehtut306@email.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition"
      aria-label="Send Email"
      title="Send me an Email"
    >
            <Mail size={24} className="text-amber-400" />
    </a>

    <a
      href="https://www.linkedin.com/in/min-soe-htut"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="p-5 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)] transition"
    >
      <Linkedin className="size-5 text-amber-400" />
    </a>

    <a
      href="https://github.com/minsoehtut306"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="p-5 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)] transition"
    >
      <Github className="size-5 text-amber-400" />
    </a>
  </div>

  {/* Footer */}
  <footer className="mt-16 border-t border-neutral-800 pt-6">
    <nav className="flex flex-wrap justify-center gap-30 text-xl text-400 mb-5">
      <a href="#home" className="hover:text-amber-400">Home</a>
      <a href="#journey" className="hover:text-amber-400">Journey</a>
      <a href="#projects" className="hover:text-amber-400">Projects</a>
      <a href="#certifications" className="hover:text-amber-400">Certifications</a>
      <a href="#Skills" className="hover:text-amber-400">Skills</a>
      <a href="#contact" className="hover:text-amber-400">Contact</a>
    </nav>

    <p className="text-n text-500">
      © {new Date().getFullYear()} Min Soe Htut — All rights reserved
    </p>
  </footer>
</section>

    </main>
  );
}
