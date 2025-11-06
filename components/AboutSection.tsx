"use client";

import React from "react";

export default function AboutSection() {

  // const circleColor =
  //   theme === "dark" ? "rgba(184, 115, 51, 0.25)" : "rgba(59, 130, 246, 0.25)";

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full z-10">
        {/* Left Profile Card */}
        <div
          className="w-full lg:w-[28rem] bg-[var(--bg-secondary)] rounded-3xl p-6 sm:p-8 shadow-2xl"
          style={{ border: "2px solid var(--sidebar-border)" }}
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-[var(--bg-hover)]">
                <img
                  src="img/profile-img.jpg"
                  alt="Marcus Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[var(--bg-secondary)]"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Mahima M</h2>
            <p className="text-[var(--text-secondary)] text-sm">
              Creative Director & Developer
            </p>
          </div>

          {/* Fun Facts / Personal Touch */}
          <div className="space-y-4">
            {/* Achievements */}
            <div className="p-5 bg-[var(--bg-hover)] rounded-xl text-center">
              <p className="text-2xl font-bold mb-1">🏆 Multiple 1st Places</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Debates, Speeches & Quizzes
              </p>
            </div>

            {/* Interests */}
            <div className="p-5 bg-[var(--bg-hover)] rounded-xl">
              <p className="text-sm text-center leading-relaxed">
                💡 Literary enthusiast, public speaker, and event organizer with
                a passion for leadership
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
            Passionate About Creating Digital Experiences
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-4 sm:space-y-6 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8 sm:mb-12">
            <p>
              Hello, I&apos;m Mahima M, a Bachelor of Computer Applications student
              from Mysore, Karnataka. I&apos;m passionate about web development,
              machine learning, and building intelligent applications that solve
              real-world problems.
            </p>
            <p>
              I have hands-on experience with Python, ReactJs, Flask, and modern
              web technologies. I love turning complex problems into simple,
              beautiful, and intuitive solutions. Whether it&apos;s building
              full-stack applications or integrating ML models, I&apos;m always eager
              to learn and create innovative software projects.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[var(--accent-color)]">
                2+
              </h3>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[var(--accent-color)]">
                3
              </h3>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm">
                Months Internship
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[var(--accent-color)]">
                9.4
              </h3>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm">
                CGPA
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-12 md:gap-x-16 sm:gap-y-6">
            <div>
              <p className="text-[var(--text-secondary)] text-sm mb-2">
                Specialization
              </p>
              <p className="font-semibold text-base sm:text-lg">
                Web Development & ML
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-sm mb-2">
                Experience
              </p>
              <p className="font-semibold text-base sm:text-lg">
                Intern at Ideonix Solutions
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-sm mb-2">
                Education
              </p>
              <p className="font-semibold text-base sm:text-lg">
                BCA, University of Mysore
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-sm mb-2">
                Location
              </p>
              <p className="font-semibold text-base sm:text-lg">
                Mysore, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
