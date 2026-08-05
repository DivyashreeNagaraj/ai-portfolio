"use client";

import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-xl">

      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-4"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-white text-xl">

            DN

          </div>

          <div>

            <h1 className="text-lg font-bold text-white">
              Divyashree Nagaraj
            </h1>

            <p className="text-sm text-slate-400">
              AI Engineer
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {item.label}
            </a>

          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden items-center gap-4 lg:flex">

          <a
            href="https://github.com/DivyashreeNagaraj"
            target="_blank"
            className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-slate-800"
          >
            <Github size={20} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            Resume
          </a>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >

          {open ? <X /> : <Menu />}

        </button>

      </div>

      {open && (

        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">

          <nav className="flex flex-col p-6">

            {navItems.map((item) => (

              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-4 text-slate-300 hover:text-blue-400"
              >
                {item.label}
              </a>

            ))}

          </nav>

        </div>

      )}

    </header>
  );
}