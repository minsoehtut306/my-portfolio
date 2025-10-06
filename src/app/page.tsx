import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  // Project data (edit these later with real links)
  const projects = [
    {
      title: "EquipEase Rentals",
      summary:
        "Desktop DB app for bookings/returns & rental reports. Parameterized queries to resist SQL injection.",
      tags: ["C#", ".NET", "SQL Server"],
      repo: "https://gitlab.com/your/repo",
    },
    {
      title: "Fitbit Activity Analytics",
      summary:
        "Cleaned & analyzed daily activity; built dashboards with actionable insights on activity + calories.",
      tags: ["Python", "SQL", "Tableau"],
      repo: "https://gitlab.com/your/repo2",
      demo: "https://public.tableau.com/profile/you",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section
        id="home"
        className="min-h-[60vh] md:min-h-[70vh] flex items-center"
      >
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[160px,1fr] gap-6 items-center">
          {/* avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/profile.jpg" // or /profile.webp
              alt="Portrait of Min Soe"
              fill
              sizes="160px"
              className="rounded-full object-cover ring-2 ring-blue-500/40"
              priority
            />
          </div>

          {/* text + buttons */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Hi, I’m <span className="text-blue-600">Min Soe</span>.
            </h1>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
              Graduate Data/Software professional in Hamilton, NZ. I build clean
              data pipelines & web apps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium"
              >
                See my work
              </a>
              <a
                href="/MinSoe_CV.pdf"
                className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Featured Projects
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Experience & Education
          </h2>

          <div className="space-y-6 border-l border-neutral-300 dark:border-neutral-700 pl-6">
            <div>
              <h3 className="font-semibold text-lg">
                Macpac — 3IC / Shift Supervisor
              </h3>
              <p className="text-sm opacity-80">
                Customer operations, leadership, KPI management, and
                merchandising (2014 – 2025)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                B.CompSci — University of Waikato
              </h3>
              <p className="text-sm opacity-80">
                GPA ~7.5 / 9 · DBMS, Data Science, Software Engineering (2019 –
                2024)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Arup Singapore — BIM Modeller (Structural Team)
              </h3>
              <p className="text-sm opacity-80">
                Produced 3D models and detail drawings in Revit and AutoCAD;
                collaborated with engineers on complex structural projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>

          <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-prose">
            I’m open to graduate and junior positions in data analytics and
            software engineering. Feel free to reach out via email or LinkedIn.
          </p>

          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li>
              📧 Email:{" "}
              <a href="mailto:you@email.com" className="underline">
                you@email.com
              </a>
            </li>
            <li>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/your"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                linkedin.com/in/your
              </a>
            </li>
            <li>
              💻 GitLab:{" "}
              <a
                href="https://gitlab.com/your"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                gitlab.com/your
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
