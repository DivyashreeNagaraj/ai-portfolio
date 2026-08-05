"use client";

import { FaGithub, FaLock } from "react-icons/fa";

const projects = [
  {
    title: "Vision Pipeline",
    category: "FEATURED PROJECT",
    description:
      "End-to-end Computer Vision pipeline for real-time object detection, image processing, and intelligent visual analytics using modern deep learning models and scalable backend services.",

    tech: [
      "Python",
      "YOLO",
      "OpenCV",
      "FastAPI",
      "Docker",
    ],

    github:
      "https://github.com/DivyashreeNagaraj/Vision-Pipeline",

    restricted: false,
  },

  {
    title: "DocMind AI",

    category: "GENERATIVE AI",

    description:
      "AI-powered document intelligence platform leveraging Retrieval-Augmented Generation (RAG) and Large Language Models to enable semantic search and context-aware question answering from uploaded documents.",

    tech: [
      "Python",
      "LangChain",
      "RAG",
      "LLMs",
      "FastAPI",
    ],

    github:
      "https://github.com/DivyashreeNagaraj/DocMind-AI",

    restricted: false,
  },

  {
    title: "Smart Farmer Assistant",

    category: "CONVERSATIONAL AI",

    description:
      "Intelligent agricultural assistant providing weather forecasts, crop recommendations, irrigation guidance, and conversational farming support using Natural Language Processing and external APIs.",

    tech: [
      "Python",
      "Rasa",
      "NLP",
      "Weather API",
      "REST API",
    ],

    github:
      "https://github.com/DivyashreeNagaraj/Smart-Farmer-Assistant",

    restricted: false,
  },

  {
    title: "AI Doctor Chatbot",

    category: "HEALTHCARE AI",

    description:
      "Developed an AI-powered healthcare chatbot that assists users with symptom-based guidance and medical information using Natural Language Processing and conversational AI. Completed as an academic project.",

    tech: [
      "Python",
      "Flask",
      "NLP",
      "REST API",
      "Machine Learning",
    ],

    github: "",

    restricted: true,
  },

  {
    title: "Intelligent Trajectory Planning for Robotics",

    category: "RESEARCH PROJECT",

    description:
      "Designed an AI-driven trajectory planning system for autonomous robotic navigation focusing on intelligent motion planning, path optimization, collision avoidance and decision-making in dynamic environments. Completed as an academic research project.",

    tech: [
      "Python",
      "Robotics",
      "Computer Vision",
      "Motion Planning",
      "Artificial Intelligence",
    ],

    github: "",

    restricted: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-center text-5xl font-bold tracking-[0.2em] uppercase text-blue-400">
                Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A selection of Artificial Intelligence projects spanning
            Computer Vision, Large Language Models, Conversational AI,
            Healthcare AI and Robotics.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (

            <div
              key={project.title}
              className="glass rounded-3xl border border-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >

              <div className="flex h-full flex-col">

                {/* Category */}

                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-400">
                  {project.category}
                </p>

                {/* Title */}

                <h3 className="mt-4 text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-6 flex-1 text-slate-300 leading-8">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-8">

                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                {/* Footer */}

                <div className="mt-8 border-t border-slate-800 pt-6">
                                      {project.restricted ? (

                    <div className="flex items-start gap-3">

                      <FaLock className="mt-1 text-yellow-400" />

                      <div>

                        <p className="font-medium text-yellow-400">
                          Repository Unavailable
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          This project was completed as part of university coursework.
                          The source code cannot be shared due to academic
                          restrictions.
                        </p>

                      </div>

                    </div>

                  ) : (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-blue-400 font-semibold transition hover:text-white"
                    >

                      <FaGithub className="text-lg" />

                      <span>
                        View Repository
                      </span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </a>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}