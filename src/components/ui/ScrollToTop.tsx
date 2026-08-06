"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

/**
 * Floating button component that appears when the user scrolls down the page.
 * Clicking the button smoothly scrolls the window back to the very top.
 * 
 * @returns {JSX.Element} The rendered ScrollToTop button component.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 p-2.5 bg-[#0D3A5C]/90 hover:bg-[#0D3A5C] backdrop-blur-md text-white/90 hover:text-white rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.2)] border border-white/10 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
