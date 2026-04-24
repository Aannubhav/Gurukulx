import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexStack — Your Complete Digital Product Suite",
  description:
    "Web, Android, and iOS — unified under one platform. Ship faster, scale smarter, and deliver exceptional user experiences across every device.",
  keywords: ["B2B SaaS", "web application", "Android app", "iOS app", "digital platform"],
  openGraph: {
    title: "NexStack — Your Complete Digital Product Suite",
    description: "Ship faster, scale smarter across web, Android, and iOS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col bg-[#08080C] text-[#F5F0E8] antialiased"
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
