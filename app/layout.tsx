import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akmstudios.com"),
  title: {
    default: "AKM Studios | Software & Digital Product Studio",
    template: "%s | AKM Studios",
  },
  description:
    "AKM Studios is a software and digital product studio specializing in web applications, mobile engineering, React/React Native, and cloud solutions based in Pune, Maharashtra, India.",
  keywords: [
    "AKM Studios",
    "Software Development Studio",
    "Digital Product Studio",
    "React Native Development",
    "Next.js Development",
    "Web Application Development",
    "Mobile App Development Pune",
    "Software Studio Pune India",
  ],
  authors: [{ name: "AKM Studios" }],
  creator: "AKM Studios",
  publisher: "AKM Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "AKM Studios | Software & Digital Product Studio",
    description:
      "Building digital products that make an impact. High-performance web platforms, mobile applications, and cloud-integrated software solutions.",
    url: "https://akmstudios.com",
    siteName: "AKM Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKM Studios | Software & Digital Product Studio",
    description:
      "Building digital products that make an impact. Software development, web platforms, and mobile apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AKM Studios",
    url: "https://akmstudios.com",
    logo: "https://akmstudios.com/icon",
    description:
      "AKM Studios is a software and digital product studio developing mobile applications, web platforms, and custom software.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: "contact@akmstudios.com",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
