"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/config/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        aria-label="Open Menu"
        onClick={() => setOpen(true)}
        className="rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <Logo size="sm" />

          <button
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            <X />
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <SearchBar />
        </div>

        {/* Navigation */}
        <nav className="px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full border-t p-4">
          <div className="flex items-center justify-between">
            <ThemeToggle />

            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
