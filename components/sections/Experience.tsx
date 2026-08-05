"use client";

const experiences = [
  {
    company: "NODI Kids GmbH",
    role: "Working Student – Product Testing & Software Automation Engineer",
    location: "Berlin, Germany",
    duration: "Sep 2025 – April 2026",

    description:
      "Contributing to the quality assurance of AI-enabled educational hardware and companion mobile applications through software automation, firmware validation, hardware testing and product quality assurance.",

    tech: [
      "QA Automation",
      "Python",
      "Bluetooth",
      "Firmware",
      "Hardware Testing",
      "Git",
      "Linux",
      "Jira",
    ],
  },

  {
    company: "Clarivate Analytics",
    role: "Associate Quality Assurance Engineer",
    location: "Bangalore, India",
    duration: "Aug 2023 – Mar 2025",

    description:
      "Developed scalable UI and API automation frameworks using Selenium, RestAssured and Serenity BDD while working in Agile software development teams.",

    tech: [
      "Java",
      "Selenium",
      "RestAssured",
      "Serenity",
      "Cucumber",
      "Maven",
      "Git",
      "Jira",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 pt-4 pb-12"
    >
      <div className="container mx-auto max-w-5xl px-4">

        <div className="text-center mb-10">

          <h2 className="text-center text-5xl font-bold tracking-[0.2em] uppercase text-blue-400">
                Experience
          </h2>

          <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-lg">
            My transition from enterprise software automation to
            Artificial Intelligence and intelligent product development.
          </p>

        </div>

        <div className="relative border-l border-slate-700 ml-4">

          {experiences.map((exp) => (

            <div
              key={exp.company}
              className="relative mb-14 ml-10"
            >

              {/* Timeline Dot */}

              <div className="absolute -left-[52px] top-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-500"></div>

              {/* Card */}

              <div className="glass rounded-2xl border border-slate-800 p-4 hover:border-blue-500 transition">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="mt-2 text-blue-400">
                      {exp.company}
                    </p>

                    <p className="text-slate-500">
                      {exp.location}
                    </p>

                  </div>

                  <span className="rounded-full bg-blue-600/15 px-3 py-2 text-sm text-blue-300 whitespace-nowrap">
                    {exp.duration}
                  </span>

                </div>

                <p className="mt-4 leading-8 text-slate-300">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  {exp.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-600/15 px-4 py-2 text-sm text-blue-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}