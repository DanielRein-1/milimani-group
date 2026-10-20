'use client';

import Link from "next/link";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { company, navItems } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2A37] bg-[#0B0F14]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1152px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          aria-label="Milimani Group home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/milimani-logo.svg"
            alt="Milimani Group"
            width={248}
            height={36}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative rounded-md px-1 py-1 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]",
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
            href={company.contact.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#22D3EE] px-4 py-2.5 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            <MessageCircleMore size={16} aria-hidden="true" />
            Chat on WhatsApp
          </Link>
        </div>

        <button
          ref={toggleButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#334155] p-2.5 text-[#E6EDF3] transition-colors hover:border-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="border-t border-[#1F2A37] bg-[#0B0F14] md:hidden">
          <nav className="mx-auto flex max-w-[1152px] flex-col px-4 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-lg px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]",
                    isActive ? "bg-[#121821] text-[#E6EDF3]" : "text-[#8B98A8] hover:text-[#E6EDF3]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={company.contact.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#22D3EE] px-4 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
            >
              <MessageCircleMore size={16} aria-hidden="true" />
              Chat on WhatsApp
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
