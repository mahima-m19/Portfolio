"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mystery Messager",
      description:
        "A full-stack anonymous messaging web application built with Next.js that allows users to send anonymous messages to others.",
      tech: ["Next.js", "MongoDB", "NextAuth.js", "Gemini API", "Nodemailer"],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Formify",
      description:
        "A Flutter-based digital form application using Clean Architecture that enables secure offline data storage and eco-friendly paperless form submissions.",
      tech: ["Flutter", "Google Sheets", "Clean Architecture"],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-6xl w-full z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Projects
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ border: "2px solid var(--sidebar-border)" }}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden bg-[var(--bg-hover)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 bg-[var(--bg-hover)] rounded-full text-xs font-medium border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--bg-hover)] hover:bg-[var(--accent-color)] hover:text-[var(--button-text)] rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--accent-color)] text-[var(--button-text)] hover:opacity-90 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
