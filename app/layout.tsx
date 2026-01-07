import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    "Lintech Web Solutions"
  ],
  authors: [{ name: "Lintech Web Solutions" }],
  creator: "Lintech Web Solutions",
  publisher: "Lintech Web Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lintechwebsolutions.co.ke"), // Replace with actual domain
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
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or mapped
        width: 1200,
        height: 630,
        alt: "Lintech Web Solutions Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lintech Web Solutions | Top Web Designers Kenya",
    description: "Expert web design and development services in Kenya. Build your digital presence with Lintech.",
    images: ["/og-image.jpg"], // Needs to be created or mapped
    creator: "@lintech", // Replace if available
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LinTech Web Solutions",
              "image": "https://lintechwebsolutions.co.ke/og-image.jpg",
              "url": "https://lintechwebsolutions.co.ke",
              "telephone": "+254797967839",
              "email": "contact@lintechwebsolutions.co.ke",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nairobi",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2921",
                "longitude": "36.8219"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "priceRange": "Ksh 20000 - 70000"
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
