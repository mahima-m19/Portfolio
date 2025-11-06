"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Code, Palette, Database, Wrench } from "lucide-react";

type CategoryId = "programming" | "frameworks" | "tools" | "analytics";

export default function SkillsSection() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] =
    useState<CategoryId>("programming");

  const categories: { id: CategoryId; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
    { id: "programming", label: "Programming", icon: Code },
    { id: "frameworks", label: "Frameworks", icon: Wrench },
    { id: "tools", label: "Tools & Software", icon: Database },
    { id: "analytics", label: "Analytics & Design", icon: Palette },
  ];

  const skills: Record<CategoryId, { name: string; level: number }[]> = {
    programming: [
      { name: "Python", level: 90 },
      { name: "ReactJs", level: 85 },
      { name: "HTML & Tailwind CSS", level: 90 },
      { name: "C/C++", level: 75 },
      { name: "SQL", level: 80 },
    ],
    frameworks: [
      { name: "Django", level: 85 },
      { name: "Flask", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Git & GitHub", level: 90 },
    ],
    tools: [
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "AWS", level: 70 },
      { name: "MS Office", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
    analytics: [
      { name: "Power BI", level: 85 },
      { name: "Tableau", level: 85 },
      { name: "Google Analytics", level: 80 },
      { name: "Excel", level: 90 },
      { name: "Data Visualization", level: 85 },
    ],
  };

  // const circleColor =
  //   theme === "dark" ? "rgba(184, 115, 51, 0.25)" : "rgba(59, 130, 246, 0.25)";

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-6xl w-full z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Skills
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            My technical skills and expertise in various technologies and tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[var(--accent-color)] text-[var(--button-text)]"
                    : "bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                }`}
                style={
                  activeCategory === category.id
                    ? {}
                    : { border: "1.5px solid var(--sidebar-border)" }
                }
              >
                <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">{category.label}</span>
                <span className="xs:hidden">
                  {category.label.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 bg-[var(--bg-secondary)] rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
              style={{ border: "1.5px solid var(--sidebar-border)" }}
            >
              {/* Skill Name and Percentage */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base sm:text-lg font-semibold">
                  {skill.name}
                </h3>
                <span className="text-lg sm:text-xl font-bold text-[var(--accent-color)]">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2.5 bg-[var(--bg-hover)] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    background:
                      theme === "dark"
                        ? "linear-gradient(90deg, rgba(184, 115, 51, 0.8), rgba(184, 115, 51, 1))"
                        : "linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 1))",
                  }}
                >
                  {/* Animated shine effect */}
                  <div
                    className="absolute top-0 left-0 h-full w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      animation: "shine 2s infinite",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Machine Learning Libraries Section */}
        {activeCategory === "programming" && (
          <div
            className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[var(--bg-secondary)] rounded-xl shadow-lg"
            style={{ border: "1.5px solid var(--sidebar-border)" }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-[var(--accent-color)]">
              Machine Learning Libraries
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {[
                "scikit-learn",
                "NumPy",
                "Pandas",
                "Matplotlib",
                "Seaborn",
                "TensorFlow",
                "Keras",
              ].map((lib, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 bg-[var(--bg-hover)] rounded-full text-xs sm:text-sm font-medium border border-[var(--border-color)] hover:scale-105 transition-transform duration-200"
                >
                  {lib}
                </span>
              ))}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </main>
  );
}
