import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { sampleProjects, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Sample project scenarios showing practical ICT work handled by Milimani Group in Busia, Kenya.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: `${siteUrl}/projects`,
    title: "Projects | Milimani Group",
    description: "Sample project scenarios showing practical ICT work handled by Milimani Group in Busia, Kenya.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">PROJECT EXAMPLES</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          Examples of practical ICT work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#8B98A8]">
          The entries below are sample project scenarios intended to illustrate the types of work the company handles. They are examples only and do not represent verified client engagements.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {sampleProjects.map(({ title, summary, tags }) => (
          <article key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-6">
            <div className="mb-4 inline-flex rounded-full border border-[#22D3EE] bg-[#0B0F14] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#22D3EE]">
              SAMPLE PROJECT
            </div>
            <h2 className="text-2xl font-semibold text-[#E6EDF3]">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#8B98A8]">{summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#1F2A37] bg-[#0B0F14] px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#8B98A8]">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-12 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-[#22D3EE] px-5 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
        >
          Discuss a similar requirement
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
