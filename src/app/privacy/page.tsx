import type { Metadata } from "next";
import Link from "next/link";

import { company, siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Notice & Terms",
  description: "Plain-language privacy notice and website terms of use for Milimani Group.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: `${siteUrl}/privacy`,
    title: "Privacy Notice & Terms | Milimani Group",
    description: "Plain-language privacy notice and website terms of use for Milimani Group.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">PRIVACY &amp; TERMS</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          Privacy Notice &amp; Terms of Use
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#8B98A8]">
          Straightforward information on how inquiries are handled and how to use this website.
        </p>
      </section>

      <div className="space-y-8">
        <section id="privacy" className="scroll-mt-24 rounded-2xl border border-[#1F2A37] bg-[#121821] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#E6EDF3]">Privacy Notice</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[#8B98A8]">
            <p>
              This website does not use user accounts, advertising trackers, or a database to store visitor form submissions.
            </p>
            <p>
              When you use the inquiry form on the <Link href="/contact" className="text-[#22D3EE] hover:underline">Contact</Link> page, the form prepares an email in your own email application addressed to{" "}
              <a href={company.contact.emailHref} className="text-[#22D3EE] hover:underline">
                {company.contact.email}
              </a>{" "}
              (or you may email{" "}
              <a href={company.contact.secondaryEmailHref} className="text-[#22D3EE] hover:underline">
                {company.contact.secondaryEmail}
              </a>
              ). When you choose to message us on WhatsApp ({company.contact.phoneDisplay}), your message is handled through WhatsApp under their platform terms.
            </p>
            <p>
              Any contact details or technical descriptions you share with us by email or WhatsApp are used solely to respond to your inquiry, discuss your ICT support needs, and carry out agreed work. We do not sell your contact details to third parties.
            </p>
          </div>
        </section>

        <section id="terms" className="scroll-mt-24 rounded-2xl border border-[#1F2A37] bg-[#121821] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#E6EDF3]">Terms of Use</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-[#8B98A8]">
            <p>
              The content on this website is provided for general information about the ICT support, networking, systems administration, backup, and web maintenance services offered in {company.contact.location}.
            </p>
            <p>
              Project entries on the <Link href="/projects" className="text-[#22D3EE] hover:underline">Projects</Link> page are illustrative sample scenarios only and do not represent verified client endorsements or specific past contracts.
            </p>
            <p>
              Specific scope of work, timelines, and service terms are agreed directly with each client before any support or maintenance work begins.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

