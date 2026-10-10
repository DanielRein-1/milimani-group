'use client';

import Link from "next/link";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { navItems } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2A37] bg-[#0B0F14]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1152px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Mlimani Group home">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#1F2A37] bg-[#121821]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#22D3EE]" fill="none" aria-hidden="true">
              <path d="M5 17V7h6v10M13 17V9h6v8M5 7l6-3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-[0.2em] text-[#E6EDF3] sm:text-base">
            MLIMANI GROUP
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "relative text-sm transition-colors duration-200",
                  isActive ? "text-[#E6EDF3]" : "text-[#8B98A8] hover:text-[#E6EDF3]",
                ].join(" ")}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-5 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[#22D3EE]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="https://wa.me/254105668218"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#22D3EE] px-4 py-2.5 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            <MessageCircleMore size={16} />
            Chat on WhatsApp
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[#1F2A37] p-2 text-[#E6EDF3] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-[#1F2A37] bg-[#0B0F14] md:hidden">
          <nav className="mx-auto flex max-w-[1152px] flex-col px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-[#121821] text-[#E6EDF3]" : "text-[#8B98A8] hover:text-[#E6EDF3]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="https://wa.me/254105668218"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#22D3EE] px-4 py-3 text-sm font-medium text-[#0B0F14]"
            >
              <MessageCircleMore size={16} />
              Chat on WhatsApp
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
