import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, MessageSquareText, ShieldCheck } from "lucide-react";

import { company, siteUrl } from "@/content/site";

const values = [
  { title: "Practicality", description: "Solve real problems using appropriate solutions.", icon: Lightbulb },
  { title: "Reliability", description: "Work carefully, communicate clearly, and follow through.", icon: CheckCircle2 },
  { title: "Clear communication", description: "Explain technical problems in understandable language.", icon: MessageSquareText },
  { title: "Responsible support", description: "Treat systems, information, and access permissions carefully.", icon: ShieldCheck },
];

const approach = [
  "Understand the environment and the issue",
  "Diagnose the problem and identify the likely causes",
  "Agree on an appropriate solution",
  "Carry out the approved work carefully",
  "Explain the result and recommend sensible follow-up",
];

export const metadata: Metadata = {
  title: "About",
  description: "About Milimani Group, practical ICT support for businesses and institutions in Busia, Kenya.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${siteUrl}/about`,
    title: "About | Milimani Group",
    description: "About Milimani Group, practical ICT support for businesses and institutions in Busia, Kenya.",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">ABOUT MILIMANI GROUP</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          Practical technology support, built around people.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#8B98A8]">
          {company.aboutIntro} We help keep everyday work moving with straightforward ICT support, networking, and routine system maintenance.
        </p>
      </section>

      <section className="py-10">
        <div className="border-t border-[#1F2A37] pt-10">
          <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">
            Technology should make everyday work easier.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#8B98A8]">
            Milimani Group focuses on practical IT support, connectivity, and maintenance that suits the realities of small organizations. The goal is simple: support systems that need to keep working, while explaining technical issues in a way that helps people make informed decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                <Icon size={18} aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#E6EDF3]">{title}</h3>
              <p className="text-sm leading-6 text-[#8B98A8]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-[#E6EDF3] sm:text-4xl">Working approach</h2>
          <div className="mt-8 space-y-4">
            {approach.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-xl border border-[#1F2A37] bg-[#0B0F14] p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22D3EE] text-xs font-semibold text-[#0B0F14]">
                  {index + 1}
                </span>
                <p className="text-base text-[#E6EDF3]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-[#8B98A8]">Need a practical next step?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#22D3EE] transition-colors hover:text-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            Talk with us
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
