import Link from "next/link";
import { ArrowLeft, MessageCircleMore } from "lucide-react";

import { company } from "@/content/site";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1152px] flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <p className="mb-3 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">404 — PAGE NOT FOUND</p>
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
        We couldn&apos;t find the page you were looking for.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-[#8B98A8]">
        The link may be outdated or the address may have been typed incorrectly. You can return to the homepage or contact us directly on WhatsApp.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22D3EE] px-5 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to homepage
        </Link>
        <a
          href={company.contact.phoneHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#334155] bg-transparent px-5 py-3 text-sm font-medium text-[#E6EDF3] transition-colors hover:border-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14]"
        >
          <MessageCircleMore size={16} aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

