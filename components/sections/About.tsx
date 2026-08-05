"use client";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaBrain,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import FadeUp from "../ui/FadeUp";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="container mx-auto px-6">


          <div className="max-w-4xl mx-auto text-center">

            <p className="mt-3 text-blue-400 font-semibold">
              👋 Hi, I'm
            </p>

            {/* Name */}

            <h1 className="text-5xl md:text-6xl font-extrabold text-white">
              Divyashree Nagaraj
            </h1>

          {/* Role */}

            <p className="mt-4 uppercase tracking-[0.35em] text-blue-400 font-semibold">
              AI & Machine Learning Engineer
            </p>

            {/* Summary */}

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">

              Master's student in
              <span className="font-semibold text-white">
                {" "}Artificial Intelligence
              </span>
              {" "}with
              <span className="font-semibold text-white">
                {" "}2+ years of software engineering experience
              </span>.
              Passionate about building intelligent applications using
              <span className="text-blue-400">
                {" "}Computer Vision
              </span>,
              <span className="text-blue-400">
                {" "}Machine Learning
              </span>,
              <span className="text-blue-400">
                {" "}Large Language Models (LLMs)
              </span>,
              <span className="text-blue-400">
                {" "}Retrieval-Augmented Generation (RAG)
              </span>,
              and
              <span className="text-blue-400">
                {" "}Software Automation
              </span>
              {" "}to solve real-world problems.

            </p>

            {/* Buttons */}

            <div className="mt-6 flex flex-wrap justify-center gap-5">

              <a
                href="/Divyashree_Nagaraj_Resume.pdf"
                target="_blank"
                className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#projects"
                className="flex items-center gap-3 rounded-xl border border-slate-700 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                <FaArrowRight />
                View Projects
              </a>

            </div>

            {/* Social */}

            <div className="mt-8 flex justify-center gap-5">

              <a
                href="https://github.com/DivyashreeNagaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 p-4 transition hover:bg-blue-600"
              >
                <FaGithub className="text-2xl text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/divyashree-nagaraj-9903351a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 p-4 transition hover:bg-blue-600"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>

            </div>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap justify-center gap-8">

              <div className="glass w-60 rounded-2xl border border-slate-800 p-6 text-center transition hover:-translate-y-2 hover:border-blue-500">

                <div className="flex justify-center text-5xl text-blue-400">
                  <FaBrain />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  M.Sc.
                </h3>

                <p className="mt-3 text-slate-400">
                  Artificial Intelligence
                </p>

              </div>

              <div className="glass w-60 rounded-2xl border border-slate-800 p-6 text-center transition hover:-translate-y-2 hover:border-blue-500">

                <div className="flex justify-center text-5xl text-blue-400">
                  <FaBriefcase />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  2+
                </h3>

                <p className="mt-3 text-slate-400">
                  Years Experience
                </p>

              </div>

              <div className="glass w-60 rounded-2xl border border-slate-800 p-6 text-center transition hover:-translate-y-2 hover:border-blue-500">

                <div className="flex justify-center text-5xl text-blue-400">
                  <FaLaptopCode />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  5+
                </h3>

                <p className="mt-3 text-slate-400">
                  AI Projects
                </p>

              </div>

            </div>

          </div>

      </div>
    </section>
  );
}