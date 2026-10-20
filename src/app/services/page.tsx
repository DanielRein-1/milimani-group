import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Database,
  HardDrive,
  MessageCircleMore,
  MonitorCog,
  ShieldCheck,
  Wifi,
} from "lucide-react";

import { company, faqItems, serviceHighlights, siteUrl } from "@/content/site";

const serviceIcons = {
  support: MonitorCog,
  network: Wifi,
  admin: HardDrive,
  security: ShieldCheck,
  web: Database,
} as const;

export const metadata: Metadata = {
  title: "Services",
  description:
    "ICT support, networking, systems administration, security and web support services for offices, schools and small businesses in Busia, Kenya.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: `${siteUrl}/services`,
    title: "Services | Milimani Group",
    description:
      "ICT support, networking, systems administration, security and web support services for offices, schools and small businesses in Busia, Kenya.",
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">OUR SERVICES</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          ICT services for the way your organization works.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#8B98A8]">
          Practical ICT support, networking, systems administration, backups, and web maintenance for offices, schools, shops, and small businesses in Busia, Kenya.
        </p>
      </section>

      <div className="space-y-8">
        {serviceHighlights.map(({ id, title, intro, coverage, suitability, example, icon }) => {
          const Icon = serviceIcons[icon];
          return (
            <article id={id} key={id} className="scroll-mt-24 rounded-2xl border border-[#1F2A37] bg-[#121821] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#E6EDF3]">{title}</h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={company.contact.phoneHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask about ${title} on WhatsApp`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22D3EE] px-4 py-2.5 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121821]"
                  >
                    <MessageCircleMore size={16} aria-hidden="true" />
                    WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    aria-label={`Discuss ${title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#334155] bg-transparent px-4 py-2.5 text-sm font-medium text-[#E6EDF3] transition-colors hover:border-[#22D3EE] hover:text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121821]"
                  >
                    Discuss {title}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-7 text-[#8B98A8]">{intro}</p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1.3fr]">
                <div className="rounded-xl border border-[#1F2A37] bg-[#0B0F14] p-5">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#22D3EE]">Coverage</p>
                  <ul className="space-y-3 text-sm leading-6 text-[#E6EDF3]">
                    {coverage.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 text-[#34D399]" size={16} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-[#1F2A37] bg-[#0B0F14] p-5">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#22D3EE]">Suitable for</p>
                    <p className="text-sm leading-6 text-[#8B98A8]">{suitability}</p>
                  </div>
                  <div className="rounded-xl border border-[#1F2A37] bg-[#0B0F14] p-5">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#22D3EE]">Practical example</p>
                    <p className="text-sm leading-6 text-[#8B98A8]">{example}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="pt-16">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">FAQ</p>
          <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">Common questions</h2>
        </div>

        <div className="space-y-4">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group rounded-2xl border border-[#1F2A37] bg-[#121821] p-5 text-left">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-base font-medium text-[#E6EDF3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]">
                {question}
                <span className="text-[#22D3EE] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#8B98A8]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
