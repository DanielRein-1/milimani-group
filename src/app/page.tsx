import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCheck, Network, ShieldCheck, Wrench } from "lucide-react";

import { Button } from "@/components/button";
import { HeroIllustration } from "@/components/hero-illustration";
import { approachSteps, company, sampleProjects, serviceHighlights, siteUrl } from "@/content/site";

const serviceIcons = [Wrench, Network, BriefcaseBusiness, ShieldCheck, CheckCheck] as const;

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: "Milimani Group | ICT Support in Busia, Kenya",
    description:
      "Practical ICT support, networking, systems administration and web support for offices, schools, shops and small businesses in Busia, Kenya.",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">{company.shortLabel}</p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl lg:text-6xl">
              Reliable ICT support for everyday business in Busia, Kenya.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#8B98A8]">
              Practical IT support, networking, systems administration and web support for offices, schools, shops and small businesses in Busia and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href={company.contact.phoneHref}
                ariaLabel={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
              <Button href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore services
                <ArrowRight className="ml-2" size={16} aria-hidden="true" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#8B98A8]">Practical solutions. Clear communication. Reliable support.</p>
          </div>

          <HeroIllustration />
        </div>
      </section>

      <section className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">WHAT WE DO</p>
          <h2 className="max-w-2xl text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">
            Technology support that keeps work moving.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#8B98A8]">
            Practical ICT services designed around the everyday needs of small organizations in Busia, Kenya.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {serviceHighlights.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={service.id} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-5 transition-colors hover:border-[#22D3EE]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#E6EDF3]">{service.title}</h3>
                <p className="text-sm leading-6 text-[#8B98A8]">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#22D3EE] hover:text-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  Explore {service.title}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">OUR APPROACH</p>
          <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">
            A straightforward approach to IT support.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {approachSteps.map(({ title, description }, index) => (
            <div key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-6">
              <div className="mb-4 inline-flex rounded-full border border-[#1F2A37] bg-[#161F2B] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#22D3EE]">
                Step 0{index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#E6EDF3]">{title}</h3>
              <p className="text-sm leading-7 text-[#8B98A8]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8">
          <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">SELECTED EXAMPLES</p>
          <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">
            Practical solutions for everyday IT challenges.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sampleProjects.slice(0, 2).map(({ title, summary }) => (
            <article key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-6">
              <div className="mb-4 inline-flex rounded-full border border-[#22D3EE] bg-[#0B0F14] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#22D3EE]">
                SAMPLE PROJECT
              </div>
              <h3 className="text-2xl font-semibold text-[#E6EDF3]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#8B98A8]">{summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1152px] px-4 py-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-[#22D3EE] bg-[#121821] p-8 sm:p-10">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle,_rgba(34,211,238,0.12),transparent_60%)] lg:block" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">Need help with your business IT?</h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#8B98A8]">
                Tell us what you need help with and we can discuss the next steps.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={company.contact.phoneHref}
                ariaLabel={`Talk to us on WhatsApp (${company.contact.phoneDisplay})`}
              >
                Talk to us on WhatsApp
              </Button>
              <Button href="/contact" variant="secondary">Send an inquiry</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
