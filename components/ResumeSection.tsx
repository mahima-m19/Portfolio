"use client";

import React from "react";
import {
  Download,
  Briefcase,
  GraduationCap,
  Building2,
  Calendar,
} from "lucide-react";

export default function ResumeSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume/Mahima_Resume.pdf";
    link.download = "Mahima_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-5xl w-full z-10">
        {/* Header */}
        <div className="flex flex-row justify-between items-start gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
              Resume
            </h1>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base">
              My educational background and professional experience.
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-[var(--accent-color)] text-[var(--button-text)] rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-lg whitespace-nowrap flex-shrink-0"
          >
            <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Download</span>
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <GraduationCap
                size={18}
                className="text-[var(--accent-color)] sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                Education
              </h2>
            </div>
            <div className="ml-5 sm:ml-6 md:ml-8 space-y-5 sm:space-y-6 md:space-y-8 relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-[var(--border-color)]"></div>

              {/* BCA */}
              <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-color)] mt-1.5 flex-shrink-0 relative z-10"></div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                    Bachelor of Computer Applications
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>2022 - 2025</span>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3">
                    <Building2 size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>MMK & SDM Mahila Maha Vidyalaya</span>
                  </div>

                  <p className="text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    University of Mysore | CGPA: 9.4/10
                  </p>
                </div>
              </div>

              {/* PU College */}
              <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-color)] mt-1.5 flex-shrink-0 relative z-10"></div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                    Pre-University Education
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>2022</span>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3">
                    <Building2 size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>Gopalaswamy PU College</span>
                  </div>

                  <p className="text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Percentage: 83.83%
                  </p>
                </div>
              </div>

              {/* High School */}
              <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-color)] mt-1.5 flex-shrink-0 relative z-10"></div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                    Secondary Education (SSLC)
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>2020</span>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3">
                    <Building2 size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>St. Mary&apos;s English High School</span>
                  </div>

                  <p className="text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Percentage: 90.84%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Briefcase
                size={18}
                className="text-[var(--accent-color)] sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                Professional Experience
              </h2>
            </div>

            {/* Experience Item */}
            <div className="ml-5 sm:ml-6 md:ml-8 space-y-4 relative">
              {/* Vertical Line */}
              <div className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-[var(--border-color)]"></div>

              {/* Job Circle and Title */}
              <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 relative">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--accent-color)] mt-1.5 flex-shrink-0 relative z-10"></div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                    Intern at Ideonix Solutions
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-1.5 sm:mb-2">
                    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>01/12/2024 – 31/01/2025</span>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] mb-3 sm:mb-4">
                    <Building2 size={12} className="sm:w-[14px] sm:h-[14px]" />
                    <span>On-Site</span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-start gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-color)] mt-0.5 sm:mt-1">
                        •
                      </span>
                      <span>
                        Developed intelligent web applications integrating ML
                        models with ReactJs front-end interfaces.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5 sm:gap-2 text-[0.7rem] sm:text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="text-[var(--accent-color)] mt-0.5 sm:mt-1">
                        •
                      </span>
                      <span>
                        Gained hands-on experience in Python, Flask, and ML
                        libraries such as scikit-learn, NumPy, Matplotlib, and
                        Seaborn.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
