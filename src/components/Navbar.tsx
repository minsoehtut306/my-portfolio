"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors
        ${
          scrolled
            ? "backdrop-blur bg-white/70 dark:bg-black/40"
            : "bg-transparent"
        }
        border-neutral-200 dark:border-neutral-800`}
    >
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="#home" className="font-semibold text-lg">
          Min Soe
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-4">
            {items.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Dark Mode Toggle (mobile) */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            className="text-sm px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } md:hidden border-t border-neutral-200 dark:border-neutral-800`}
      >
        <ul className="max-w-5xl mx-auto px-4 py-2 space-y-1">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="block py-2 text-neutral-700 dark:text-neutral-200 hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
