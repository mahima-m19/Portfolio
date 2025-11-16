"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  const router = useRouter();

  // Bronze for dark theme, Blue for light theme
  const circleColor =
    theme === "dark" ? "rgba(184, 115, 51, 0.25)" : "rgba(59, 130, 246, 0.25)";

  const [positions, setPositions] = useState([
    { top: "10%", left: "70%", size: 300 },
    { top: "60%", left: "75%", size: 220 },
    { top: "30%", left: "10%", size: 160 },
  ]);

  // Typing animation state
  const strings = useMemo(
    () => ["Machine Learning Engineer", "Data Analyst", "Python Developer"],
    []
  );

  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((circle) => ({
          ...circle,
          top: `${parseFloat(circle.top) + (Math.random() - 0.5) * 2}%`,
          left: `${parseFloat(circle.left) + (Math.random() - 0.5) * 2}%`,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (charIndex < strings[stringIndex].length) {
        setText((prev) => prev + strings[stringIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Pause before deleting
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }, 2000);
      }
    }, 100); // typing speed

    return () => clearTimeout(typingTimeout);
  }, [charIndex, stringIndex, strings]);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      {/* Animated Semi-Transparent Circles - Hidden on mobile for better performance */}
      <div className="hidden md:block">
        {positions.map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-[3000ms] ease-in-out backdrop-blur-sm"
            style={{
              top: circle.top,
              left: circle.left,
              width: circle.size,
              height: circle.size,
              backgroundColor: circleColor,
            }}
          ></div>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 max-w-7xl w-full z-10">
        {/* Left Text Section - Top part only on mobile */}
        <div className="flex-1 text-center lg:text-left w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-tight mb-3">
            Port<span className="text-[var(--text-secondary)]">folio</span>
          </h1>
          <div className="w-24 sm:w-32 h-[3px] bg-[var(--accent-color)] mb-6 sm:mb-8 md:mb-10 mx-auto lg:mx-0"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            Mahima M
          </h2>

          {/* Typing Text */}
          <div className="min-h-[2.5rem] sm:min-h-[3rem] mb-6 sm:mb-8 md:mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)]">
              I&apos;m{" "}
              <span className="border-b-2 border-[var(--accent-color)] pb-1 animate-pulse inline-block">
                {text}
              </span>
            </p>
          </div>

          {/* Image appears here on mobile - Hidden on lg+ */}
          <div className="lg:hidden mb-8 sm:mb-10">
            <div className="relative flex justify-center w-full">
              {/* Semi-Transparent Box Behind Photo */}
              <div
                className="absolute w-[240px] h-[310px] sm:w-[280px] sm:h-[360px] md:w-[340px] md:h-[440px] rounded-3xl sm:rounded-[2.5rem] shadow-xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.6)] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 md:translate-x-6 md:translate-y-6 backdrop-blur-sm transition-colors duration-300"
                style={{ backgroundColor: circleColor }}
              ></div>

              {/* Portrait */}
              <div className="relative w-[240px] h-[310px] sm:w-[280px] sm:h-[360px] md:w-[340px] md:h-[440px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-[var(--bg-secondary)] shadow-xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/img/hero-img.jpeg"
                  alt="Mahima M"
                  width={520}
                  height={520}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-14 max-w-xl mx-auto lg:mx-0">
            Passionate about building intelligent, scalable solutions that
            combine smart engineering with seamless user experiences. Let&apos;s
            transform innovative ideas into impactful reality together!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-14 justify-center lg:justify-start">
            <button
              onClick={() => router.push("#projects")}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full font-semibold hover:opacity-90 transition-all duration-300 text-sm sm:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => router.push("#contact")}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 border-2 border-[var(--accent-color)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--accent-color)] hover:text-[var(--button-text)] transition-all duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image Section - Hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex relative flex-1 justify-center w-full lg:w-auto">
          {/* Semi-Transparent Box Behind Photo */}
          <div
            className="absolute w-[380px] h-[480px] xl:w-[420px] xl:h-[520px] rounded-3xl sm:rounded-[2.5rem] shadow-xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.6)] translate-x-6 translate-y-6 backdrop-blur-sm transition-colors duration-300"
            style={{ backgroundColor: circleColor }}
          ></div>

          {/* Portrait */}
          <div className="relative w-[380px] h-[480px] xl:w-[420px] xl:h-[520px] rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-[var(--bg-secondary)] shadow-xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <Image
              src="/img/hero-img.jpeg"
              alt="Mahima M"
              width={520}
              height={520}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
