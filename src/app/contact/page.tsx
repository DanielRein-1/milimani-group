import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { siteUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Milimani Group in Busia, Kenya via WhatsApp or email for practical ICT support and service inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${siteUrl}/contact`,
    title: "Contact | Milimani Group",
    description: "Contact Milimani Group in Busia, Kenya via WhatsApp or email for practical ICT support and service inquiries.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
