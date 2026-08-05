"use client";

import { GraduationCap } from "lucide-react";
import FadeUp from "../ui/FadeUp";

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    university: "IU International University of Applied Sciences",
    location: "Berlin, Germany",
    duration: "2025 – Present",
    description:
      "Specializing in Machine Learning, Deep Learning, Computer Vision, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Generative AI.",
  },
  {
    degree: "Bachelor of Engineering in Information Science",
    university: "Visvesvaraya Technological University (VTU)",
    location: "Banglore, India",
    duration: "2019 – 2023",
    description:
      "Studied Software Engineering, Data Structures, Algorithms, Database Systems, Artificial Intelligence, Web Technologies and Computer Networks.",
  },
];

export default function Education() {
  return (
      <section
        id="education"
        className="scroll-mt-24 bg-[#020617] py-5"
      >
        <div className="container mx-auto px-3">

        <div className="text-center">

          <h2 className="text-center text-5xl font-bold tracking-[0.2em] uppercase text-blue-400">
                Education
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            My academic background has provided a strong foundation in Artificial Intelligence, Software Engineering, and modern computing technologies that support my work in AI and Machine Learning.
          </p>

        </div>

        <div className="mt-8 space-y-10">

          {education.map((item) => (

            <div
              key={item.degree}
              className="glass rounded-3xl border border-slate-800 p-8 transition hover:border-blue-500"
            >

              <div className="flex flex-wrap items-start gap-6">

                <div className="rounded-2xl bg-blue-600/20 p-5">

                  <GraduationCap
                    size={36}
                    className="text-blue-400"
                  />

                </div>

                <div className="flex-1">

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                      <h3 className="text-3xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-blue-400 text-xl">
                        {item.university}
                      </p>
                      
                      <p className="text-slate-400">
                        {item.location}
                      </p>

                    </div>

                    {/*Right*/}

                    <div className="text-left md:text-right">

                    <span className="rounded-full bg-blue-600/15 px-5 py-2 font-medium text-blue-300">
                        {item.duration}
                    </span>

                    </div>

                  </div>

                  <p className="mt-6 leading-8 text-slate-300">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}