"use client";

import { Icon } from "@iconify/react";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
              "COMPX278 Technology and Complex Problems",
              "COMPX301 Design and Analysis of Algorithms",
              "COMPX323 Advanced Database Concepts",
              "COMPX341 Software Engineering Methods",
              "HECSS363 The Impact Lab",
            ],
            "2024": [
              "COMPX201 Data Structures and Algorithms",
              "COMPX202 Mobile Computing and Software Architecture",
              "COMPX203 Computer Systems",
              "COMPX204 Practical Networking and Cyber Security",
              "COMPX216 Artificial Intelligence",
              "COMPX223 Database Practice and Experience",
              "COMPX251 Applied Computing Tools 1",
              "COMPX310 Machine Learning",
              "COMPX361 Logic and Computation",
              "PRMGT200 Fundamentals of Operations and Project Management",
            ],
            "2023": [
              "COMPX101 Introduction to Programming",
              "COMPX102 Object-Oriented Programming",
              "CSMAX170 Foundations in Computing and Mathematical Sciences",
              "CSMAX270 Cultural Perspectives for Computing and Mathematical Sciences",
              "DATAX121 Introduction to Statistical Methods",
              "DIGIB101 The World of Digital Business",
              "MATHS135 Discrete Structures",
              "MATHS165 General Mathematics",
              "MEDIA309 Game, Play and Society",
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
      ].map((item, i) => {
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
                      {Object.entries(item.papersByYear).map(([year, papers]) => (
                        <div key={year}>
                          <div className="text-xs uppercase tracking-wide text-neutral-400 mb-2">
                            {year}
                          </div>
                          <ul className="space-y-1.5">
                            {papers.map((p) => {
                              const [code, ...nameParts] = p.split(" "); // separate code from name
                              const name = nameParts.join(" ");
                              return (
                                <li key={p} className="flex items-baseline gap-2">
                                  {/* code: highlighted */}
                                  <span className="text-base font-semibold text-amber-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]">
                                    {code}
                                  </span>
                                  {/* hyphen */}
                                  <span className="text-neutral-500">-</span>
                                  {/* course name */}
                                  <span className="text-sm text-neutral-300">{name}</span>
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
          Tech: Python, NumPy, scikit-learn, TensorFlow, Google Colab
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
          dynamic programming, and complexity analysis — written in Java with academic notes.
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
          Tech: Next.js, React, Tailwind CSS, Framer Motion, TypeScript
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
          Tech: Java, TCP/UDP, HTTP, TLS/SSL, KeyStores
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
          Tech: Java, JUnit, GraphStream, CI/CD
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

{/* SKILLS */}
<section
id="Skills"
className="py-20 bg-neutral-900 border-t border-neutral-800">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">
      Skills & Tools
    </h2>

    {/* ---- Row 1 ---- */}
    <div className="flex flex-wrap justify-center gap-8">

    <div className="group flex flex-col items-center gap-2 w-24">
      <Icon
        icon="simple-icons:microsoftazure"
        className="text-5xl text-amber-400 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)]"/>
        <span className="text-xs text-neutral-300">Azure</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-java-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Java</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-csharp-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">C#</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-python-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Python</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-javascript-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">JavaScript</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-sqlite-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">SQL</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-html5-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">HTML</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-css3-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">CSS</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-php-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">PHP</span>
      </div>
    </div>

    {/* Divider*/}
    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent"></div>

    {/* ---- Row 2 ---- */}
    <div className="flex flex-wrap justify-center gap-8">
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-dotnetcore-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">.NET</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-react-original text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">React</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-nodejs-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Node.js</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-mongodb-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">MongoDB</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-oracle-original text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Oracle</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-mysql-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">MySQL</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-r-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">R</span>
      </div>
    </div>

    {/* Divider*/}
    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"></div>

    {/* ---- Row 3 ---- */}
    <div className="flex flex-wrap justify-center gap-8">
      <div className="group flex flex-col items-center gap-2 w-24">
        <i className="devicon-visualstudio-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Visual Studio</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-vscode-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">VS Code</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-20">
        <i className="devicon-gitlab-plain text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">GitLab</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-24">
        <i className="devicon-androidstudio-plain text-5xl text-sky-400 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Android Studio</span>
      </div>
      <div className="group flex flex-col items-center gap-2 w-24">
        <i className="devicon-unrealengine-original text-5xl text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)] transition"></i>
        <span className="text-xs text-neutral-300">Unreal Engine</span>
      </div>
    </div>
  </div>

  {/* Divider*/}
<div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent"></div>

{/* ---- Row 4 ---- */}
<div className="flex flex-wrap justify-center gap-8">
  <div className="group flex flex-col items-center gap-2 w-24">
    <Icon
      icon="simple-icons:autodeskrevit"
      className="text-5xl text-amber-400 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)]"/>
    <span className="text-xs text-neutral-300">Revit</span>
  </div>
  <div className="group flex flex-col items-center gap-2 w-24">
    <Icon
      icon="simple-icons:autocad"
      className="text-5xl text-sky-400 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.55)]"/>
    <span className="text-xs text-neutral-300">AutoCAD</span>
  </div>
  <div className="group flex flex-col items-center gap-2 w-24">
    <Icon
      icon="simple-icons:autodesk"
      className="text-5xl text-amber-400 transition transform group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(251,191,36,0.55)]"/>
    <span className="text-xs text-neutral-300">Dynamo</span>
  </div>
</div>
</section>


{/* CONTACT */}
<section
  id="contact"
  className="py-20 border-t border-neutral-800 text-center bg-neutral-900"
>
  <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
  <p className="text-lg text-neutral-300 mb-10">
    I’m open to data and software roles in New Zealand.
    Let’s connect through email, LinkedIn, or GitLab.
  </p>

  {/* Icon Buttons */}
  <div className="flex justify-center gap-8">
    {/* Email */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=minsoehtut306@email.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_20px_2px_rgba(251,191,36,0.3)] transition"
      aria-label="Send Email"
      title="Send me an Email"
    >
      <Mail size={30} className="text-amber-400" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/min-soe-htut"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_20px_2px_rgba(251,191,36,0.3)] transition"
      aria-label="LinkedIn Profile"
      title="View my LinkedIn"
    >
      <Linkedin size={30} className="text-amber-400" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/minsoehtut306"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-neutral-800 hover:bg-amber-500/20 hover:shadow-[0_0_20px_2px_rgba(251,191,36,0.3)] transition"
      aria-label="GitHub Profile"
      title="View my GitHub Projects"
    >
      <Github size={30} className="text-amber-400" />
    </a>
  </div>
</section>
    </main>
  );
}
