import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polaris Web - Affordable Websites for Small Businesses",
  description: "Custom-built, mobile-ready websites with military-grade hosting and protection. Professional web design for small businesses with transparent pricing.",
  keywords: "web design, small business websites, affordable websites, custom websites, mobile-ready, SEO, hosting, Canadian web design",
  authors: [{ name: "Polaris Web" }],
  creator: "Polaris Web",
  publisher: "Polaris Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://polarisweb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Polaris Web - Affordable Websites for Small Businesses",
    description: "Custom-built, mobile-ready websites with military-grade hosting and protection. Professional web design for small businesses with transparent pricing.",
    url: 'https://polarisweb.com',
    siteName: 'Polaris Web',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Polaris Web - Professional Web Design',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Polaris Web - Affordable Websites for Small Businesses",
    description: "Custom-built, mobile-ready websites with military-grade hosting and protection.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
