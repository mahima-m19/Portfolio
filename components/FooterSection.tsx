"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 text-center border-t-2 border-[var(--border-color)] bg-[var(--bg-primary)] lg:ml-[22rem] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            Mahima M
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
