'use client';

import type { FormEvent } from "react";
import { Mail, MapPin, MessageCircleMore } from "lucide-react";

import { company } from "@/content/site";

const contactBlocks = [
  {
    title: "WhatsApp",
    value: company.contact.phoneDisplay,
    href: company.contact.phoneHref,
    icon: MessageCircleMore,
  },
  {
    title: "Email",
    value: company.contact.email,
    href: `mailto:${company.contact.email}`,
    icon: Mail,
  },
  { title: "Location", value: company.contact.location, href: "#", icon: MapPin },
] as const;

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      form.reset();
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `New inquiry from ${name || "website visitor"} - ${service || "General support"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail or Phone: ${contact}\nService: ${service}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          Let&apos;s talk about your IT needs.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8B98A8]">
          Tell us a little about the issue or service you need help with.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {contactBlocks.map(({ title, value, href, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8B98A8]">{title}</p>
                  {href === "#" ? (
                    <p className="mt-1 text-base text-[#E6EDF3]">{value}</p>
                  ) : (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-1 inline-block text-base text-[#E6EDF3] transition-colors hover:text-[#22D3EE]"
                    >
                      {value}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-6 sm:p-8"
          noValidate
        >
          <div className="sr-only">
            <label htmlFor="website">Leave this field blank</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm text-[#E6EDF3]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-[#1F2A37] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="Your name"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="contact" className="mb-2 block text-sm text-[#E6EDF3]">
                Email or Phone
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="w-full rounded-xl border border-[#1F2A37] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="email@example.com or phone"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-2 block text-sm text-[#E6EDF3]">
                Service
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="w-full rounded-xl border border-[#1F2A37] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="IT Support & Maintenance">IT Support & Maintenance</option>
                <option value="Networking & Wi-Fi">Networking & Wi-Fi</option>
                <option value="Systems Administration">Systems Administration</option>
                <option value="Security & Backups">Security & Backups</option>
                <option value="Web & Database Support">Web & Database Support</option>
                <option value="General inquiry">General inquiry</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-[#E6EDF3]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={6}
                className="w-full rounded-xl border border-[#1F2A37] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="Tell us what you need help with..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#22D3EE] px-5 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121821]"
          >
            Send inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
