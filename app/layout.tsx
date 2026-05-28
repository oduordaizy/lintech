import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Lintech Web Solutions | Best Website Designers in Kenya",
    template: "%s | Lintech Web Solutions"
  },
  description: "Lintech Web Solutions offers premium web design and development services in Kenya. We build stunning, high-performance websites for businesses. Rated as top website designers in Nairobi.",
  keywords: [
    "website designers in kenya",
    "web design company in kenya",
    "web developers in nairobi",
    "best web designers kenya",
    "ecommerce website design kenya",
    "mobile app development kenya",
    "software development company nairobi",
    "Lintech Web Solutions",
    "Daisy Oduor",
    "Daisy Achieng Oduor",
    "Daisy Oduor Web Development",

  ],
  authors: [{ name: "Lintech Web Solutions" }],
  creator: "Lintech Web Solutions",
  publisher: "Lintech Web Solutions",
  applicationName: "Lintech Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lintechwebsolutions.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lintech Web Solutions | Best Website Designers in Kenya",
    description: "Transform your business with world-class web design and development from Lintech. We are the leading digital agency in Kenya.",
    url: "https://lintechwebsolutions.co.ke",
    siteName: "Lintech Web Solutions",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lintech Web Solutions | Top Web Designers Kenya",
    description: "Expert web design and development services in Kenya. Build your digital presence with Lintech.",
    creator: "@lintech",
    site: "@lintech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <StructuredData />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
