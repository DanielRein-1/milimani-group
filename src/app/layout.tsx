import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company, serviceHighlights, siteUrl } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.displayName} | ICT Support in Busia, Kenya`,
    template: `%s | ${company.displayName}`,
  },
  description:
    "Practical ICT support, networking, systems administration and web support for offices, schools, shops and small businesses in Busia, Kenya.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: company.displayName,
    title: `${company.displayName} | ICT Support in Busia, Kenya`,
    description:
      "Practical ICT support, networking, systems administration and web support for offices, schools, shops and small businesses in Busia, Kenya.",
  },
  verification: {
    google: "R3wBcbEaDG7hR5xQpnTd9cFxsGIPSzqpszg7g8ORit4",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.displayName,
  url: siteUrl,
  logo: `${siteUrl}/milimani-logo.svg`,
  image: `${siteUrl}/milimani-logo.svg`,
  description: company.description,
  email: company.contact.email,
  telephone: company.contact.phoneInternational,
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "P.O. Box 485",
    addressLocality: company.contact.locality,
    addressCountry: company.contact.country,
  },
  areaServed: {
    "@type": "City",
    name: "Busia, Kenya",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.contact.phoneInternational,
      email: company.contact.email,
      contactType: "customer support",
      url: company.contact.phoneHref,
    },
    {
      "@type": "ContactPoint",
      email: company.contact.secondaryEmail,
      contactType: "customer support",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ICT Support Services",
    itemListElement: serviceHighlights.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body className="min-h-screen bg-[#0B0F14] text-[#E6EDF3] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
