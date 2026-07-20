"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const article = document.querySelector("article");

      if (!article) {
        setProgress(0);
        ticking = false;
        return;
      }

      const rect = article.getBoundingClientRect();

      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;

      const viewportHeight = window.innerHeight;

      const totalScrollable = Math.max(
        articleHeight - viewportHeight,
        1
      );

      const current = Math.min(
        Math.max(window.scrollY - articleTop, 0),
        totalScrollable
      );

      setProgress((current / totalScrollable) * 100);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className="h-full bg-blue-600 transition-[width] duration-75"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
