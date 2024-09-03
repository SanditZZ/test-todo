"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      const mainElement = document.getElementById("main");
      if (mainElement) {
        const scrollTop = mainElement.scrollTop;

        if (scrollTop > 300) {
          if (!isVisible) {
            setIsVisible(true);
          }
          if (!isFading) {
            setIsFading(true);
          }
        } else {
          if (isFading) {
            setIsFading(false);
            setTimeout(() => {
              if (mainElement.scrollTop <= 300) {
                setIsVisible(false);
              }
            }, 500);
          }
        }
      }
    };

    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScrollBtnVisibility);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScrollBtnVisibility);
      }
    };
  }, [isVisible, isFading]);

  const handleScrollToTop = () => {
    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          id="scrollToTopBtn"
          title="Scroll Up"
          onClick={handleScrollToTop}
          className={`fixed bottom-10 right-1/2 translate-x-1/2 md:right-20 z-50 p-3 text-white transition-all duration-500 ease-in-out transform rounded-full shadow-lg bg-blue-500 ${
            isFading ? "fade-in" : "fade-out"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
