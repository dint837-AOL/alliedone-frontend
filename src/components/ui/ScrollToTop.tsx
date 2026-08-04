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
          className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 p-3 bg-[#2180C0] hover:bg-[#5BAEE8] text-white rounded-full shadow-2xl shadow-[#2180C0]/50 transition-all duration-300 hover:-translate-y-1 focus:outline-none border-2 border-white/90 backdrop-blur-md"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
