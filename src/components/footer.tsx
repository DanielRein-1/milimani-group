import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { company, navItems, serviceHighlights } from "@/content/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[#1F2A37] bg-[#0B0F14]">
      <div className="mx-auto max-w-[1152px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-8 border-b border-[#1F2A37] pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">{company.shortLabel}</p>
            <h2 className="text-2xl font-semibold text-[#E6EDF3]">Have a project in mind?</h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#22D3EE] px-5 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
          >
            Get in touch
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              aria-label="Milimani Group home"
              className="mb-3 inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/milimani-logo.svg"
                alt="Milimani Group"
                width={248}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mb-4 text-xs font-medium tracking-[0.18em] text-[#22D3EE]">{company.shortLabel}</p>
            <p className="max-w-xs text-sm leading-6 text-[#8B98A8]">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#E6EDF3]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#8B98A8]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                  >
                    {item.label === "Home"
                      ? "Home"
                      : item.label === "About"
                        ? "About Us"
                        : item.label === "Services"
                          ? "Our Services"
                          : item.label === "Projects"
                            ? "Projects"
                            : "Contact Us"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#E6EDF3]">Our Services</h3>
            <ul className="space-y-3 text-sm text-[#8B98A8]">
              {serviceHighlights.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#E6EDF3]">Contact</h3>
            <ul className="space-y-3 text-sm text-[#8B98A8]">
              <li>{company.contact.location}</li>
              <li>
                <a
                  href={company.contact.emailHref}
                  className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  {company.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={company.contact.secondaryEmailHref}
                  className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  {company.contact.secondaryEmail}
                </a>
              </li>
              <li>
                <a
                  href={company.contact.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
                  className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  WhatsApp: {company.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1F2A37] pt-6">
          <div className="flex flex-col gap-3 text-sm text-[#8B98A8] sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Milimani Group. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy#privacy"
                className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
              >
                Privacy Notice
              </Link>
              <Link
                href="/privacy#terms"
                className="rounded-sm transition-colors hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
              >
                Terms of Use
              </Link>
              <span className="text-[#8B98A8]">@ Milimani Group company.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
