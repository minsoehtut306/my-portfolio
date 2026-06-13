"use client";

import { Icon } from "@iconify/react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";


// --- Skills data helpers ---
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
    <span className="text-xs text-neutral-700 dark:text-neutral-300">{label}</span>
    </div>
  );
};

// Data
const rowNetworking: Skill[] = [
    { label: "Networking Fundamentals", kind: "iconify", token: "mdi:lan" },
    { label: "TCP/IP", kind: "iconify", token: "mdi:protocol" },
    { label: "Subnetting", kind: "iconify", token: "mdi:ip-network" },
    { label: "Routing", kind: "iconify", token: "mdi:routes" },
    { label: "Switching", kind: "iconify", token: "mdi:switch" },
    { label: "Troubleshooting", kind: "iconify", token: "mdi:wrench-cog" },
];

const rowTools: Skill[] = [
    { label: "Cisco Packet Tracer", kind: "iconify", token: "mdi:router-network" },
    { label: "Wireshark", kind: "iconify", token: "simple-icons:wireshark" },
    { label: "GitHub", kind: "devicon", token: "devicon-github-original" },
    { label: "VS Code", kind: "devicon", token: "devicon-vscode-plain" },
    { label: "Visual Studio", kind: "devicon", token: "devicon-visualstudio-plain" },
];

const rowTech: Skill[] = [
    { label: "Python", kind: "devicon", token: "devicon-python-plain" },
    { label: "JavaScript", kind: "devicon", token: "devicon-javascript-plain" },
    { label: "SQL", kind: "devicon", token: "devicon-mysql-plain" },
    { label: "Azure", kind: "devicon", token: "devicon-azure-plain" },
];

// Utility to alternate colors per row
const withAlternatingHues = (arr: Skill[]) =>
  arr.map((s, i) => ({ ...s, hue: (i % 2 === 0 ? "amber" : "sky") as Hue }));

const SkillRow = ({
    title,
    skills,
    titleColor = "text-sky-400",
}: {
    title: string;
    skills: Skill[];
    titleColor?: string;
}) => (
    <div className="mb-14">
        <h3 className={`mb-8 text-center text-2xl font-bold ${titleColor}`}>
            {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
            {withAlternatingHues(skills).map((skill) => (
                <SkillBadge key={skill.label} {...skill} />
            ))}
        </div>
    </div>
);

type ProjectCardProps = {
    title: string;
    description: string;
    tech: string;
    href: string;
    accent?: "amber" | "sky";
};

const ProjectCard = ({
    title,
    description,
    tech,
    href,
    accent = "amber",
}: ProjectCardProps) => {
    const titleColor = accent === "sky" ? "text-sky-400" : "text-amber-400";
    const buttonClass =
        accent === "sky"
            ? "bg-sky-500/90 hover:bg-sky-400 shadow-[0_0_16px_2px_rgba(56,189,248,0.25)]"
            : "bg-amber-500/90 hover:bg-amber-400 shadow-[0_0_16px_2px_rgba(251,191,36,0.22)]";

    const hoverClass =
        accent === "sky"
            ? "hover:shadow-[0_0_24px_3px_rgba(56,189,248,0.20)]"
            : "hover:shadow-[0_0_24px_3px_rgba(251,191,36,0.18)]";

    return (
        <div
            className={`group relative flex h-full flex-col rounded-xl border border-neutral-400 bg-white/80 p-6 transition dark:border-neutral-700 dark:bg-neutral-800/70 ${hoverClass}`}
        >
            <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>
                    {title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">{description}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{tech}</p>
            </div>

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-auto w-fit px-4 py-2 rounded-lg text-neutral-900 font-medium transition ${buttonClass}`}
            >
                View on GitHub →
            </a>
        </div>
    );
};

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
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

  return (
      <main className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* NAVBAR */}
        <header
            className={`sticky top-0 z-50 border-b transition-colors ${scrolled
                    ? "backdrop-blur bg-white/80 dark:bg-neutral-900/80"
                    : "bg-white dark:bg-neutral-900"
                } border-neutral-400 dark:border-neutral-800`}
        >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">
            Min <span className="text-amber-400">Soe Htut</span>
          </a>

          {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
                {items.map((i) => (
                    <li key={i.href}>
                        <a
                            href={i.href}
                            className="text-base font-medium text-neutral-700 hover:text-amber-400 transition-colors dark:text-neutral-300 dark:hover:text-amber-400"
                        >
                            {i.label}
                        </a>
                    </li>
                ))}
            </ul>

            <ThemeToggle />
        </div>

          {/* Mobile menu button */}
        <button
            className="md:hidden text-sm px-3 py-2 rounded border border-neutral-400 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
            onClick={() => setOpen((v) => !v)}
        >
            Menu
        </button>
        </nav>

        {/* Mobile dropdown */}
        <div
            className={`${open ? "block" : "hidden"} md:hidden border-t border-neutral-400 bg-white dark:border-neutral-800 dark:bg-neutral-900`}
        >
            <ul className="max-w-7xl mx-auto px-6 py-3 space-y-1">
                {items.map((i) => (
                    <li key={i.href}>
                        <a
                            href={i.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-neutral-700 hover:text-amber-400 transition-colors dark:text-neutral-300 dark:hover:text-amber-400"
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
             Hi, I’m <span className="text-sky-500 dark:text-amber-400">Min Soe</span>
            </h1>

            <p className="mt-3 text-lg text-neutral-400">
                Aspiring Network Engineer | CCNA Learner | IT Support Enthusiast
            </p>

                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I’m a Computer Science graduate from the{" "}
                <span className="text-amber-400 font-semibold">
                    University of Waikato
                </span>{" "}
                with a growing focus on{" "}
                <span className="text-sky-400 font-semibold">
                    networking, IT support, and infrastructure
                </span>.
                <br /><br />
                I am currently building my knowledge in{" "}
                <span className="text-amber-400 font-semibold">
                    CCNA topics
                </span>{" "}
                such as networking fundamentals, IP addressing, routing, switching, and troubleshooting.
                My background in computer systems, cybersecurity, and software development gives me a strong technical foundation and a practical problem-solving mindset.
            </p>


            <div className="mt-7 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                    href="#experience"
                    className="px-5 py-2.5 rounded-lg border border-neutral-400 text-neutral-800 hover:border-amber-400 hover:text-sky-400 transition dark:border-neutral-600 dark:text-neutral-200"
                >
                    Know more →
                </a>

                <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-lg border border-neutral-400 text-neutral-800 hover:border-amber-400 hover:text-sky-400 transition dark:border-neutral-600 dark:text-neutral-200"
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
            className="p-3 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition dark:bg-neutral-800"
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
            className="p-3 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition dark:bg-neutral-800"
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
            className="p-3 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_15px_2px_rgba(251,191,36,0.3)] transition dark:bg-neutral-800"
            aria-label="GitHub Profile"
            title="View my GitHub Projects"
          >
            <Github size={24} className="text-amber-400" />
          </a>
        </div>
        </div>
      </section>

{/* Experience */}
  <section id="experience" className="py-20 bg-white dark:bg-neutral-900 border-t border-neutral-400 dark:border-neutral-800">
  <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-12 text-center text-amber-400">Experience</h2>

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
                 group relative p-5 rounded-xl border bg-white/80 border-neutral-400 dark:bg-neutral-800/70 dark:border-neutral-700
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
                    skyAccent ? "text-sky-400" : "text-neutral-900 dark:text-neutral-100"
                  }`}
                >
                  {item.title}
                </h3>
                  <p className="font-medium text-neutral-700 dark:text-neutral-300">{item.place}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</p>
                 <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{item.details}</p>
                <div
                  className={`mt-3 h-1 w-16 rounded ${
                    skyAccent ? "bg-sky-400/70" : "bg-amber-400/70"
                  }`}
                />

            {/* Papers (only for the B.Sc card) */}
            {"papersByYear" in item && (
              <details className="mt-4 group/open">
                  <summary className="cursor-pointer select-none text-sm text-neutral-700 hover:text-amber-400 transition flex items-center gap-2 dark:text-neutral-300 dark:hover:text-amber-300">
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
                          <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
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
                                    <span className="text-neutral-500 dark:text-neutral-500">-</span>
                                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{name}</span>
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
     className="py-20 bg-white dark:bg-neutral-900 border-t border-neutral-400 dark:border-neutral-800">
    <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-amber-400">
            Selected Projects
        </h2>

         <p className="max-w-3xl mx-auto text-center text-neutral-500 dark:text-neutral-400 mb-12">
            A selection of projects that reflect my technical foundation across networking,
            systems, software development, and problem-solving.
        </p>

        {/* Technical Projects */}
        <h3 className="text-2xl font-bold mb-10 text-center text-sky-400">
            Technical Projects
        </h3>

        {/* Divider */}
        <div className="mt-16 mb-12 h-px w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
                title="Network File Transfer (Java)"
                description="A suite of Java networking projects exploring client-server communication and core protocols, including TCP/UDP socket programming, a lightweight HTTP server, TLS-encrypted file transfer, and TFTP-based file exchange."
                tech="Tech: Java, TCP/UDP, HTTP, TLS/SSL, Networking Fundamentals"
                href="https://github.com/minsoehtut306/Network-File-Transfer"
                accent="sky"
            />

            <ProjectCard
                title="EV-Charger Finder (Android)"
                description="An Android app for locating nearby EV charging stations using GPS and Google Maps API. Includes location-based search, charger detail views, and tested mobile functionality."
                tech="Tech: Java, Android Studio, Google Maps API, Gradle"
                href="https://github.com/minsoehtut306/EV-Changer-Finder"
                accent="amber"
            />

            <ProjectCard
                title="Driving Quiz App (.NET MAUI)"
                description="A cross-platform quiz application built with .NET MAUI to help users prepare for the New Zealand driving theory test, with interactive multiple-choice questions and Android/Windows support."
                tech="Tech: .NET MAUI, C#, XAML, Visual Studio 2022"
                href="https://github.com/minsoehtut306/DrivingQuiz"
                accent="sky"
            />

            <ProjectCard
                title="Equipment Rentals – Windows Forms Database App"
                description="A Windows Forms database application with login, registration, and connected SQL Server functionality. Built to strengthen my understanding of desktop applications, data handling, and user interaction."
                tech="Tech: C#, WinForms, SQL Server, ADO.NET"
                href="https://github.com/minsoehtut306/Equipment-Rentals"
                accent="amber"
            />

            <ProjectCard
                title="Portfolio Website (Next.js + Tailwind)"
                description="A personal portfolio website built with Next.js and Tailwind CSS to showcase my journey, projects, and technical skills. Designed with a responsive layout, reusable components, and a clean modern interface."
                tech="Tech: Next.js, React, Tailwind CSS, TypeScript"
                href="https://github.com/minsoehtut306/my-portfolio"
                accent="sky"
            />

            <ProjectCard
                title="Software Engineering Design Project"
                description="A multi-stage software engineering project covering design, implementation, testing, and maintenance, supported by JUnit testing, graph visualisation, and CI/CD pipeline automation."
                tech="Tech: Java, JUnit, GraphStream, CI/CD"
                href="https://github.com/minsoehtut306/Software-Engineering-Design"
                accent="amber"
            />
        </div>

        {/* Divider */}
        <div className="mt-16 mb-12 h-px w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        {/* Additional Projects */}
        <h3 className="text-2xl font-bold mb-10 text-center text-amber-400">
            Additional Projects
        </h3>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
                title="Algorithms"
                description="A curated collection of algorithmic implementations covering sorting, graphs, regex, dynamic programming, and complexity analysis in Java."
                tech="Tech: Java, Algorithm Design, Graphs, Dynamic Programming"
                href="https://github.com/minsoehtut306/Algorithms"
                accent="amber"
            />

            <ProjectCard
                title="AI & Machine Learning Projects"
                description="A collection of AI and machine learning coursework covering search algorithms, adversarial MCTS, constraint optimisation, and Python-based machine learning labs such as regression, clustering, and neural networks."
                tech="Tech: Python, NumPy, Google Colab"
                href="https://github.com/minsoehtut306/AI-and-Machine-Learning"
                accent="amber"
            />

            <ProjectCard
                title="Zoo Management Application"
                description="A C# Windows Forms application for managing zoo data with support for both Oracle (SQL) and MongoDB (NoSQL), including CRUD operations for animals, staff, and enclosures."
                tech="Tech: C#, WinForms, Oracle, MongoDB"
                href="https://github.com/minsoehtut306/Zoo-"
                accent="amber"
            />

            <ProjectCard
                title="WRAMP Exercises (Assembly + C)"
                description="A series of low-level programming exercises focused on assembly and C integration, covering I/O handling, serial communication, interrupts, exceptions, and a multitasking kernel."
                tech="Tech: WRAMP Assembly, C, WRAMP Simulator / Hardware"
                href="https://github.com/minsoehtut306/Ramp"
                accent="amber"
            />

            <ProjectCard
                title="Boyes Park Redevelopment"
                description="An urban redevelopment project focused on improving park safety, inclusivity, and amenities in collaboration with Hamilton City Council, delivered through design documentation, reporting, and digital presentation."
                tech="Focus: Safety by Design, Accessibility, Digital Engagement"
                href="https://github.com/minsoehtut306/The-Impact-Lab"
                accent="amber"
            />
        </div>

        <div className="mt-12 text-center">
            <a
                href="https://github.com/minsoehtut306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-lg border border-neutral-400 text-neutral-800 hover:border-sky-400 hover:text-sky-400 transition dark:border-neutral-600 dark:text-neutral-200"
            >
                View More on GitHub →
            </a>
        </div>
    </div>
</section>
{/* SKILLS */}
    <section id="skills" className="py-20 px-6 border-t border-neutral-400 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-amber-400">Skills</h2>
            <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
                Currently focused on building networking knowledge and practical skills through CCNA study
                and hands-on learning.
            </p>

            <SkillRow title="Networking" skills={rowNetworking} titleColor="text-sky-400" />
            <SkillRow title="Tools & Technologies" skills={rowTools} titleColor="text-amber-400" />
            <SkillRow title="Supporting Technical Skills" skills={rowTech} titleColor="text-sky-400" />
        </div>
    </section>

{/* CONTACT */}
<section
    id="contact"
    className="py-8 border-t border-neutral-400 dark:border-neutral-800 text-center bg-white dark:bg-neutral-900"
>
  <h2 className="text-3xl font-bold mb-10 text-amber-400">Contact Me</h2>

  {/* Contact Info Row */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 text-neutral-700 dark:text-neutral-300">
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
    <a href="tel:+64204463402" className="hover:text-amber-400 transition">
        +64 20 4463 402
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
                      className="p-5 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)] transition dark:bg-neutral-800"
      title="Send me an Email"
    >
            <Mail size={24} className="text-amber-400" />
    </a>

    <a
      href="https://www.linkedin.com/in/min-soe-htut"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
                      className="p-5 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)] transition dark:bg-neutral-800"
    >
      <Linkedin className="size-5 text-amber-400" />
    </a>

    <a
      href="https://github.com/minsoehtut306"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
                      className="p-5 rounded-full bg-neutral-100 hover:bg-amber-500/20 hover:shadow-[0_0_18px_rgba(251,191,36,0.35)] transition dark:bg-neutral-800"
    >
      <Github className="size-5 text-amber-400" />
    </a>
  </div>

  {/* Footer */}
    <footer className="mt-16 border-t border-neutral-800 pt-6">
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-neutral-400 mb-5">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#experience" className="hover:text-amber-400 transition">Experience</a>
            <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
            <a href="#skills" className="hover:text-amber-400 transition">Skills</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </nav>

        <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Min Soe Htut — All rights reserved
        </p>
    </footer>
</section>

    </main>
  );
}
