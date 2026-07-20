"use client";

import { useState } from "react";
import type { TocItem } from "@/types/table-of-contents";

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({
  items,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveId(id);
  };

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
    >
      <h2 className="mb-4 text-lg font-bold">
        Contents
      </h2>

      <ol className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={
              item.level === 3 ? "ml-5" : ""
            }
          >
            <button
              type="button"
              onClick={() => scrollToHeading(item.id)}
              aria-current={
                activeId === item.id ? "location" : undefined
              }
              className={`text-left transition ${
                activeId === item.id
                  ? "font-semibold text-blue-600"
                  : "text-slate-600 hover:text-blue-600 dark:text-slate-300"
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
