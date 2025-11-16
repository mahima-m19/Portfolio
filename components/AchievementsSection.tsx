"use client";

import React from "react";
import { Trophy, Award, Mic, Pen } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Place - Inter-College Debates",
      description:
        "Secured first place in multiple inter-college debate competitions, showcasing excellence in critical thinking and articulation.",
      category: "Competition",
      year: "2024",
    },
    {
      icon: Mic,
      title: "1st Place - Speech Competitions",
      description:
        "Won first place in both college and inter-college speech competitions, demonstrating strong public speaking skills.",
      category: "Competition",
      year: "2024",
    },
    {
      icon: Award,
      title: "1st Place - Quiz Competitions",
      description:
        "Achieved top position in college-level CS and general quizzes, reflecting consistent academic excellence.",
      category: "Competition",
      year: "2024",
    },
    {
      icon: Pen,
      title: "2nd Place - Writing Competition",
      description:
        "Secured second place in inter-college writing competition, demonstrating creative writing abilities.",
      category: "Competition",
      year: "2024",
    },
    {
      icon: Mic,
      title: "Literary Committee Member & MC",
      description:
        "Served as Literary Committee Member and Master of Ceremonies for various academic and cultural programs.",
      category: "Leadership",
      year: "2023-2024",
    },
    {
      icon: Award,
      title: "Event Organizer",
      description:
        "Actively organized and led multiple college and inter-college literary events, fostering communication and collaboration.",
      category: "Leadership",
      year: "2023-2024",
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-6xl w-full z-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
            Achievements
          </h1>
          <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base">
            Recognition and accomplishments throughout my academic journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-5 md:p-6 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ border: "2px solid var(--sidebar-border)" }}
              >
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-[var(--bg-hover)] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent
                      size={18}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[var(--accent-color)]"
                    />
                  </div>
                  <span className="text-[0.7rem] sm:text-xs font-semibold text-[var(--accent-color)] bg-[var(--bg-hover)] px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 line-clamp-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-3">
                  {achievement.description}
                </p>

                {/* Category Badge */}
                <div className="inline-block px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-[var(--bg-hover)] rounded-full text-[0.7rem] sm:text-xs font-medium">
                  {achievement.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div
            className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl"
            style={{ border: "2px solid var(--sidebar-border)" }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--accent-color)] mb-1 sm:mb-2">
              6+
            </div>
            <div className="text-[0.65rem] sm:text-xs md:text-sm text-[var(--text-secondary)]">
              Total Achievements
            </div>
          </div>
          <div
            className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl"
            style={{ border: "2px solid var(--sidebar-border)" }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--accent-color)] mb-1 sm:mb-2">
              4
            </div>
            <div className="text-[0.65rem] sm:text-xs md:text-sm text-[var(--text-secondary)]">
              1st Place Wins
            </div>
          </div>
          <div
            className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl"
            style={{ border: "2px solid var(--sidebar-border)" }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--accent-color)] mb-1 sm:mb-2">
              2
            </div>
            <div className="text-[0.65rem] sm:text-xs md:text-sm text-[var(--text-secondary)]">
              Leadership Roles
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
