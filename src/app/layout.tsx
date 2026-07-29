import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { PersonJsonLd } from "@/components/seo/person-json-ld";
import { siteConfig } from "@/config/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.seo.applicationName,

  authors: [
    {
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  generator: "Next.js",

  keywords: [...siteConfig.seo.keywords],
  category: siteConfig.seo.category,

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} portfolio preview`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        alt: `${siteConfig.fullName} portfolio preview`,
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080909",
  colorScheme: "dark",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <PersonJsonLd
          name={siteConfig.fullName}
          jobTitle={siteConfig.title}
          description={siteConfig.description}
          websiteUrl={siteConfig.url}
          email={siteConfig.email}
          location={{
            locality: "Sammanthurai",
            country: "Sri Lanka",
          }}
          sameAs={siteConfig.socialLinks.map((socialLink) => socialLink.href)}
        />

        {children}
      </body>
    </html>
  );
}
