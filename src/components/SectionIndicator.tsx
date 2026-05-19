"use client";

import React, { useEffect, useState } from "react";

const SectionIndicator = () => {
  const [sectionName, setSectionName] = useState("Hero section");

  useEffect(() => {
    const markerOffset = 168;

    const updateActiveSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-section-label]")
      );

      if (sections.length === 0) return;

      let activeLabel = sections[0].dataset.sectionLabel ?? "Hero section";

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const markerY = window.scrollY + markerOffset;

        if (sectionTop <= markerY) {
          activeLabel = section.dataset.sectionLabel ?? activeLabel;
        } else {
          break;
        }
      }

      setSectionName(activeLabel);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-16 z-[10000] pointer-events-none hidden md:block">
      <hr className="w-full border-t border-[#222222]" />
      <div className="font-sans font-light absolute top-0 right-10 text-xs text-[#888888] bg-[#111] px-2 py-0.5 rounded-b border-b border-l border-r border-[#222222]">
        {sectionName}
      </div>
    </div>
  );
};

export default SectionIndicator;
