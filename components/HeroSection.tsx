"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();

  // Bronze for dark theme, Blue for light theme
  const circleColor =
    theme === "dark" ? "rgba(184, 115, 51, 0.25)" : "rgba(59, 130, 246, 0.25)";

  const [positions, setPositions] = useState([
    { top: "10%", left: "70%", size: 300 },
    { top: "60%", left: "75%", size: 220 },
    { top: "30%", left: "10%", size: 160 },
  ]);

  // Typing animation state
  const strings = ["Web Developer", "UI/UX Designer", "Creative Thinker"];
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
  }, [charIndex, stringIndex]);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] lg:ml-[22rem] overflow-hidden transition-colors duration-300">
      {/* This ensures the main content area has the right background */}
      {/* Animated Semi-Transparent Circles */}
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

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 max-w-7xl w-full z-10">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-none mb-3">
            Port<span className="text-[var(--text-secondary)]">folio</span>
          </h1>
          <div className="w-32 h-[3px] bg-[var(--accent-color)] mb-10 mx-auto lg:mx-0"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Mahima M
          </h2>

          {/* Typing Text */}
          <p className="text-xl sm:text-2xl mb-10 text-[var(--text-secondary)]">
            I'm a{" "}
            <span className="border-b-2 border-[var(--accent-color)] pb-1 animate-pulse">
              {text}
            </span>
          </p>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-14 max-w-xl mx-auto lg:mx-0">
            Passionate about creating exceptional digital experiences that blend
            innovative design with functional development. Let's bring your
            vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-14 justify-center lg:justify-start">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[var(--button-primary)] text-[var(--button-text)] rounded-full font-semibold hover:opacity-90 transition-all duration-300">
              View My Work
            </button>
            <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[var(--accent-color)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--accent-color)] hover:text-[var(--button-text)] transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-1 flex justify-center">
          {/* Semi-Transparent Box Behind Photo */}
          <div
            className="absolute w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] rounded-[2.5rem] shadow-[0_25px_80px_rgba(0,0,0,0.6)] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 backdrop-blur-sm transition-colors duration-300"
            style={{ backgroundColor: circleColor }}
          ></div>

          {/* Portrait */}
          <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px] rounded-[2.5rem] overflow-hidden bg-[var(--bg-secondary)] shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
            <img
              src="img/profile-img.jpg"
              alt="Mahima M"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
