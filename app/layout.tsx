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
  title: "GurukulamX — Launch Your EdTech Platform in Weeks",
  description:
    "Full LMS, mobile apps, AI learning engine, and white-label branding — all under your brand. Three licensing models designed for every stage of growth.",
  keywords: ["EdTech SaaS", "LMS platform", "white-label LMS", "coaching institute software", "MCQ automation", "online teaching platform India"],
  openGraph: {
    title: "GurukulamX — Launch Your EdTech Platform in Weeks",
    description: "Full LMS + AI + mobile apps. Launch, teach, and scale — under your brand.",
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
        className="min-h-full flex flex-col bg-[#F7F7F7] text-[#000000] antialiased"
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
