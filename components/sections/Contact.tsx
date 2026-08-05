"use client";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-30">
      <div className="container mx-auto px-4">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-5xl font-bold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Interested in AI, Machine Learning, Computer Vision, or Software
            Engineering opportunities? Feel free to connect with me through
            any of the platforms below.
          </p>
        </div>

        {/* Contact Card */}

        <div className="mx-auto mt-16 max-w-6xl grid gap-6 md:grid-cols-3">

        {/* Email */}

        <a
          href="mailto:divyashreenagarajm@gmail.com"
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
            <FaEnvelope className="text-3xl text-blue-400" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            Email
          </h3>

          <p className="mt-3 text-slate-400 break-all">
            divyashreenagarajm@gmail.com
          </p>
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/divyashree-nagaraj-m/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
            <FaLinkedin className="text-3xl text-blue-400" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            LinkedIn
          </h3>

          <p className="mt-3 text-slate-400">
            Connect with me
          </p>
        </a>

        {/* GitHub */}

        <a
          href="https://github.com/DivyashreeNagaraj"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center transition hover:border-blue-500 hover:-translate-y-1"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
            <FaGithub className="text-3xl text-blue-400" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            GitHub
          </h3>

          <p className="mt-3 text-slate-400">
            View my projects
          </p>
        </a>

      </div>
      </div>
    </section>
  );
}