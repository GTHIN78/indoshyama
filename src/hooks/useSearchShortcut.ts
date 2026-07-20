"use client";

import { useEffect } from "react";

export function useSearchShortcut(
  callback: () => void
) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        callback();
      }
    }

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, [callback]);
}
