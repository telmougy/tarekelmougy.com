import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedShaderBackground } from "@/components/ui/animated-shader-background";
import { profile } from "@/data/cv";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tarekelmougy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tarek Elmougy — Senior QA Automation Engineer & SDET",
  description: profile.pitch,
  authors: [{ name: profile.name }],
  keywords: [
    "Tarek Elmougy",
    "Senior QA Automation Engineer",
    "Senior SDET",
    "Test Architect",
    "Playwright",
    "Cypress",
    "Web3 QA",
    "Fintech QA",
  ],
  openGraph: {
    title: "Tarek Elmougy — Senior QA Automation Engineer & SDET",
    description: profile.pitch,
    url: siteUrl,
    siteName: "Tarek Elmougy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarek Elmougy — Senior QA Automation Engineer & SDET",
    description: profile.pitch,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Senior QA Automation Engineer / Senior SDET",
    email: `mailto:${profile.email}`,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimatedShaderBackground className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen opacity-40 dark:opacity-60" />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
