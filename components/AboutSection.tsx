"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl w-full z-10">
        {/* Left Profile Card */}
        <div
          className="w-full lg:w-[26rem] xl:w-[28rem] bg-[var(--bg-secondary)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl flex-shrink-0"
          style={{ border: "2px solid var(--sidebar-border)" }}
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="relative">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden bg-[var(--bg-hover)]">
                <Image
                  src="/img/profile-img.jpeg"
                  alt="Mahima M"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-3 sm:border-4 border-[var(--bg-secondary)]"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
              Mahima M
            </h2>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm">
              Creative Director & Developer
            </p>
          </div>

          {/* Fun Facts / Personal Touch */}
          <div className="space-y-3 sm:space-y-4">
            {/* Achievements */}
            <div className="p-4 sm:p-5 bg-[var(--bg-hover)] rounded-xl text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                🏆 Multiple 1st Places
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Debates, Speeches & Quizzes
              </p>
            </div>

            {/* Interests */}
            <div className="p-4 sm:p-5 bg-[var(--bg-hover)] rounded-xl">
              <p className="text-xs sm:text-sm text-center leading-relaxed">
                💡 Literary enthusiast, public speaker, and event organizer with
                a passion for leadership
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
            Passionate About Creating Digital Experiences
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 md:mb-12">
            <p>
              Hello, I'm Mahima M, a Bachelor of Computer Applications student
              from Mysore, Karnataka. I’m passionate about building intelligent,
              scalable, and user-centric applications across web development and
              machine learning.
            </p>
            <p>
              I work with technologies like Python, React.js, Flask, Django,
              TensorFlow, and modern analytics tools to create solutions that
              are both functional and impactful. From developing full-stack web
              apps to implementing machine learning models and MLOps workflows,
              I enjoy turning complex challenges into efficient, real-world
              systems.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-[var(--accent-color)]">
                2+
              </h3>
              <p className="text-[var(--text-secondary)] text-[0.7rem] sm:text-xs md:text-sm">
                Projects Completed
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-[var(--accent-color)]">
                3
              </h3>
              <p className="text-[var(--text-secondary)] text-[0.7rem] sm:text-xs md:text-sm">
                Months Internship
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-[var(--accent-color)]">
                9.4
              </h3>
              <p className="text-[var(--text-secondary)] text-[0.7rem] sm:text-xs md:text-sm">
                CGPA
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-x-12 xl:gap-x-16">
            <div>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1 sm:mb-2">
                Specialization
              </p>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Web Development & ML
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1 sm:mb-2">
                Experience
              </p>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Intern at Ideonix Solutions
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1 sm:mb-2">
                Education
              </p>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                BCA, University of Mysore
              </p>
            </div>
            <div>
              <p className="text-[var(--text-secondary)] text-xs sm:text-sm mb-1 sm:mb-2">
                Location
              </p>
              <p className="font-semibold text-sm sm:text-base md:text-lg">
                Mysore, Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
