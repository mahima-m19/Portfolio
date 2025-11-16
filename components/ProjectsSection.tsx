"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import BreastCancerImage from "@/public/img/breast-cancer.png";
import ChestCancerImage from "@/public/img/chest-cancer.png";
import ParkingSpaceImage from "@/public/img/Real-time-parking.png";
import TensorFlowImage from "@/public/img/tenser-flow.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "TensorFlow-projects",
      description:
        "Developed a digit recognition system using TensorFlow, implementing np.argmax() for prediction decoding and validating performance using a confusion matrix. Achieved 98% accuracy through effective model training, tuning, and error analysis.",
      tech: ["TensorFlow", "Deep Learning", "Data Analysis"],
      github: "https://github.com/mahima-m19/TensorFlow-projects",
      live: null,
      image: TensorFlowImage,
    },

    {
      title: "Breast-Cancer-Detection",
      description:
        "Built a machine learning model to classify malignant and benign breast tumors using diagnostic features. Applied EDA, feature engineering, and model evaluation techniques to ensure accurate and reliable predictions for medical decision-support.",
      tech: ["Machine Learning", "EDA", "Python"],
      github: "https://github.com/mahima-m19/Breast-Cancer-Detection",
      live: null,
      image: BreastCancerImage,
    },

    {
      title: "Chest-Cancer-Diagnosis-Pipeline-with-MLflow-and-DVC",
      description:
        "Implemented a reproducible chest cancer diagnosis pipeline using MLflow for experiment tracking and DVC for data versioning. Automated CI/CD workflows using Docker and GitHub Actions, and deployed the application on AWS for scalable cloud-based inference.",
      tech: [
        "Python",
        "PyTorch",
        "MLflow",
        "DVC",
        "Docker",
        "GitHub Actions",
        "AWS",
      ],
      github:
        "https://github.com/mahima-m19/Chest-Cancer-Diagnosis-Pipeline-with-MLflow-and-DVC",
      live: null,
      image: ChestCancerImage,
    },

    {
      title: "Real-Time-Parking-Space-Recognition-with-MLOps-Integration",
      description:
        "Developed a real-time parking space recognition system using YOLO-based deep learning models and IoT camera feeds. Integrated with an end-to-end MLOps pipeline using MLflow, Docker, and AWS, enabling automated deployment, monitoring, and performance optimization.",
      tech: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "YOLO",
        "Docker",
        "AWS",
        "MLflow",
      ],
      github:
        "https://github.com/mahima-m19/Real-Time-Parking-Space-Recognition-with-MLOps-Integration",
      live: null,
      image: ParkingSpaceImage,
    },
  ];


  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-5xl w-full z-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--bg-secondary)] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ border: "2px solid var(--sidebar-border)" }}
            >
              {/* Project Image */}
              <div className="relative h-24 sm:h-28 overflow-hidden bg-[var(--bg-hover)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-bold mb-1.5">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-snug mb-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 bg-[var(--bg-hover)] rounded text-xs font-medium border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--bg-hover)] hover:bg-[var(--accent-color)] hover:text-[var(--button-text)] rounded-lg transition-all duration-300 text-sm font-medium flex-1"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--accent-color)] text-[var(--button-text)] hover:opacity-90 rounded-lg transition-all duration-300 text-sm font-medium flex-1"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
