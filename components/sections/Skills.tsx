"use client";

import {
  Brain,
  Code2,
  Boxes,
  Bug,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-8 w-8 text-blue-400" />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "LLMs",
      "RAG",
      "Generative AI",
      "Prompt Engineering",
      "Neural Networks",
    ],
  },

  {
    title: "Programming",
    icon: <Code2 className="h-8 w-8 text-blue-400" />,
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },

  {
    title: "Frameworks & Libraries",
    icon: <Boxes className="h-8 w-8 text-blue-400" />,
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Scikit-learn",
      "FastAPI",
      "Flask",
      "Rasa",
    ],
  },

  {
    title: "QA Automation",
    icon: <Bug className="h-8 w-8 text-blue-400" />,
    skills: [
      "Selenium",
      "RestAssured",
      "Serenity BDD",
      "Cucumber",
      "TestNG",
      "API Testing",
      "UI Testing",
    ],
  },

  {
    title: "Databases",
    icon: <Database className="h-8 w-8 text-blue-400" />,
    skills: [
      "MongoDB",
      "MySQL",
      "SQLite",
    ],
  },

  {
    title: "Developer Tools",
    icon: <Wrench className="h-8 w-8 text-blue-400" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "VS Code",
      "Jira",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-950 py-3"
    >
      <div className="container mx-auto px-3">

        {/* Heading */}

        <div className="text-center">


          <h2 className="text-center text-5xl font-bold tracking-[0.2em] uppercase text-blue-400">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-400">
            A combination of Artificial Intelligence, software engineering,
            automation, and cloud technologies that I use to build intelligent,
            scalable, and production-ready applications.
          </p>

        </div>

        {/* Skills Grid */}

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="glass rounded-2xl border border-slate-800 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >

              <div className="flex items-center gap-4">

                {category.icon}

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500 hover:text-white"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}