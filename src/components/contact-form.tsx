'use client';

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircleMore } from "lucide-react";

import { company, serviceHighlights } from "@/content/site";

const contactBlocks = [
  {
    title: "WhatsApp",
    items: [
      {
        label: company.contact.phoneDisplay,
        href: company.contact.phoneHref,
        ariaLabel: `Chat on WhatsApp (${company.contact.phoneDisplay})`,
      },
    ],
    icon: MessageCircleMore,
  },
  {
    title: "Email",
    items: [
      {
        label: company.contact.email,
        href: company.contact.emailHref,
        ariaLabel: `Send email to ${company.contact.email}`,
      },
      {
        label: company.contact.secondaryEmail,
        href: company.contact.secondaryEmailHref,
        ariaLabel: `Send email to ${company.contact.secondaryEmail}`,
      },
    ],
    icon: Mail,
  },
  {
    title: "Location",
    items: [{ label: company.contact.location, href: undefined, ariaLabel: undefined }],
    icon: MapPin,
  },
] as const;

type FormErrors = {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
};

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [mailtoLaunched, setMailtoLaunched] = useState(false);

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

    const nextErrors: FormErrors = {};
    if (!name) {
      nextErrors.name = "Please enter your name.";
    }
    if (!contact) {
      nextErrors.contact = "Please enter your email address or phone number.";
    }
    if (!service) {
      nextErrors.service = "Please select a service.";
    }
    if (!message) {
      nextErrors.message = "Please enter a brief description of what you need help with.";
    } else if (message.length < 10) {
      nextErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setMailtoLaunched(false);
      return;
    }

    const subject = encodeURIComponent(
      `New inquiry from ${name} - ${service}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail or Phone: ${contact}\nService: ${service}\n\nMessage:\n${message}`,
    );

    setMailtoLaunched(true);
    window.location.href = `mailto:${company.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-[1152px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <section className="pb-12">
        <p className="mb-4 text-xs font-medium tracking-[0.2em] text-[#22D3EE]">CONTACT US</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#E6EDF3] sm:text-5xl">
          Let&apos;s talk about your IT needs in Busia.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#8B98A8]">
          Tell us a little about the issue or service you need help with. You can reach us directly on WhatsApp or prepare an email inquiry below.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {contactBlocks.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-[#1F2A37] bg-[#121821] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1F2A37] bg-[#161F2B] text-[#22D3EE]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8B98A8]">{title}</p>
                  <div className="mt-1 flex flex-col gap-1">
                    {items.map((item) =>
                      !item.href ? (
                        <p key={item.label} className="text-base text-[#E6EDF3]">
                          {item.label}
                        </p>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          aria-label={item.ariaLabel}
                          className="inline-block rounded-sm text-base text-[#E6EDF3] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                        >
                          {item.label}
                        </a>
                      ),
                    )}
                  </div>
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
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Leave this field blank</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-2 block text-sm text-[#E6EDF3]">
                Name <span className="text-[#22D3EE]" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-xl border border-[#334155] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" role="alert" className="mt-1.5 text-xs text-[#F87171]">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="contact" className="mb-2 block text-sm text-[#E6EDF3]">
                Email or Phone <span className="text-[#22D3EE]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "contact-error" : undefined}
                className="w-full rounded-xl border border-[#334155] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="email@example.com or phone"
              />
              {errors.contact ? (
                <p id="contact-error" role="alert" className="mt-1.5 text-xs text-[#F87171]">
                  {errors.contact}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-2 block text-sm text-[#E6EDF3]">
                Service <span className="text-[#22D3EE]" aria-hidden="true">*</span>
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                className="w-full rounded-xl border border-[#334155] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceHighlights.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="General inquiry">General inquiry</option>
              </select>
              {errors.service ? (
                <p id="service-error" role="alert" className="mt-1.5 text-xs text-[#F87171]">
                  {errors.service}
                </p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm text-[#E6EDF3]">
                Message <span className="text-[#22D3EE]" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full rounded-xl border border-[#334155] bg-[#0B0F14] px-3 py-3 text-[#E6EDF3] placeholder:text-[#8B98A8] focus:border-[#22D3EE] focus:outline-none focus:ring-2 focus:ring-[#22D3EE]"
                placeholder="Tell us what you need help with..."
              />
              {errors.message ? (
                <p id="message-error" role="alert" className="mt-1.5 text-xs text-[#F87171]">
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-[#8B98A8]">
            Submitting this form opens your email application with a pre-filled draft to{" "}
            <span className="text-[#E6EDF3]">{company.contact.email}</span>. Your details are not stored on this website. See our{" "}
            <Link
              href="/privacy#privacy"
              className="text-[#22D3EE] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
            >
              Privacy Notice
            </Link>
            .
          </p>

          {mailtoLaunched ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-4 rounded-xl border border-[#22D3EE] bg-[#0B0F14] p-4 text-sm leading-6 text-[#E6EDF3]"
            >
              We opened your email application with your inquiry details. Please press <strong>Send</strong> in your email app to complete your message, or{" "}
              <a
                href={company.contact.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#22D3EE] underline-offset-4 hover:underline"
              >
                message us on WhatsApp ({company.contact.phoneDisplay})
              </a>{" "}
              if no email app opened.
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[#22D3EE] px-5 py-3 text-sm font-medium text-[#0B0F14] transition-colors hover:bg-[#67E8F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121821]"
            >
              Open in email app
            </button>
            <a
              href={company.contact.phoneHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp (${company.contact.phoneDisplay})`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#334155] bg-transparent px-5 py-3 text-sm font-medium text-[#E6EDF3] transition-colors hover:border-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121821]"
            >
              <MessageCircleMore size={16} aria-hidden="true" />
              Chat on WhatsApp instead
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
