import { Database, HardDrive, MonitorCog, ShieldCheck, Wifi } from "lucide-react";

import { company } from "@/content/site";

const capabilities = [
  {
    title: "IT Support & Maintenance",
    detail: "Computers, printers & routine checks",
    icon: MonitorCog,
  },
  {
    title: "Networking & Wi-Fi",
    detail: "Routers, cabling & office connectivity",
    icon: Wifi,
  },
  {
    title: "Systems & Security",
    detail: "Device setup, updates & data backups",
    icon: ShieldCheck,
  },
  {
    title: "Web & Database Support",
    detail: "Website maintenance & business data",
    icon: Database,
  },
] as const;

export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#1F2A37] bg-[#121821] p-5 sm:p-6"
      aria-label="Milimani Group ICT capabilities overview"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.16),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Brand header inside the hero card */}
        <div className="flex items-center justify-between gap-3 border-b border-[#1F2A37] pb-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.svg"
              alt="Milimani Group emblem"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-[#E6EDF3]">
                {company.name}
              </p>
              <p className="mt-0.5 text-xs text-[#8B98A8]">
                Busia, Kenya • Practical ICT Support
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1F2A37] bg-[#0B0F14] px-2.5 py-1 text-[11px] font-medium text-[#22D3EE]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" aria-hidden="true" />
            Local Support
          </span>
        </div>

        {/* Core service pillars with real labels instead of empty bars */}
        <div className="mt-4 space-y-2.5">
          {capabilities.map(({ title, detail, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-3.5 rounded-xl border border-[#1F2A37] bg-[#0B0F14]/90 p-3 transition-colors hover:border-[#22D3EE]/50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                <Icon size={17} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#E6EDF3]">{title}</p>
                <p className="truncate text-xs text-[#8B98A8]">{detail}</p>
              </div>
              <span
                className="h-1.5 w-6 shrink-0 rounded-full bg-[#22D3EE]/80"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Bottom contact bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#1F2A37] bg-[#161F2B]/70 px-3.5 py-2.5 text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#E6EDF3]">
            <HardDrive size={14} className="text-[#22D3EE]" aria-hidden="true" />
            On-site &amp; remote assistance
          </span>
          <span className="text-[#22D3EE]">{company.contact.email}</span>
        </div>
      </div>
    </div>
  );
}
