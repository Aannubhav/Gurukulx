"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket, Video, ClipboardList, BookOpen, Mic,
  Users, ShoppingBag, TrendingUp, Puzzle, Shield,
  type LucideProps,
} from "lucide-react";

type LucideIcon = (props: LucideProps) => React.ReactElement;

const leftFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Rocket as LucideIcon,        title: "Launch Your Online Academy",   desc: "Create & sell courses, cohorts & programs" },
  { icon: Video as LucideIcon,         title: "Live Classes & Webinars",      desc: "Engage your audience in real-time" },
  { icon: ClipboardList as LucideIcon, title: "Test Series & Assessments",    desc: "Create tests, quizzes & assignments" },
  { icon: BookOpen as LucideIcon,      title: "E-books & Digital Products",   desc: "Share knowledge in multiple formats" },
  { icon: Mic as LucideIcon,           title: "Podcasts",                     desc: "Monetize your audio content" },
];

const rightFeatures: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Users as LucideIcon,       title: "Communities & Memberships",  desc: "Build loyal communities & recurring revenue" },
  { icon: ShoppingBag as LucideIcon, title: "Merchandise",                desc: "Sell branded products" },
  { icon: TrendingUp as LucideIcon,  title: "Multiple Revenue Streams",   desc: "Courses, subscriptions, products & more" },
  { icon: Puzzle as LucideIcon,      title: "Third Party Integrations",   desc: "Connect with tools you love" },
  { icon: Shield as LucideIcon,      title: "Secure & Reliable",          desc: "100% content security & data protection" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

function FeatureItem({ icon: Icon, title, desc, align = "left", index = 0 }: {
  icon: LucideIcon;
  title: string;
  desc: string;
  align?: "left" | "right";
  index?: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex items-start gap-3 ${align === "right" ? "flex-row-reverse text-right" : ""}`}
    >
      <div className="shrink-0 w-9 h-9 rounded-xl bg-[rgba(255,107,0,0.1)] flex items-center justify-center">
        <Icon size={16} className="text-[#FF6B00]" />
      </div>
      <div className={align === "right" ? "text-right" : ""}>
        <p className="text-sm font-semibold text-[#1A1209] leading-snug">{title}</p>
        <p className="text-xs text-[#6B6058] mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function DesktopMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Monitor bezel */}
      <div className="relative rounded-2xl bg-[#1A1209] p-2.5 shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
        {/* Screen */}
        <div className="rounded-xl overflow-hidden bg-white aspect-[16/10]">
          <Image
            src="/images/desktop-mockup.jpg"
            alt="GurukulamX Dashboard"
            width={1120}
            height={700}
            className="w-full h-full object-cover object-top"
            unoptimized
          />
        </div>
      </div>
      {/* Stand neck */}
      <div className="mx-auto w-12 h-5 bg-[#2A2218] rounded-b-sm" />
      {/* Stand base */}
      <div className="mx-auto w-32 h-2.5 bg-[#2A2218] rounded-full" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[180px] sm:w-[200px] mx-auto">
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] bg-[#1A1209] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
        {/* Notch bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1A1209] rounded-full z-10" />
        {/* Screen */}
        <div className="rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
          <Image
            src="/images/mobile-mockup.jpg"
            alt="GurukulamX Mobile App"
            width={400}
            height={860}
            className="w-full h-full object-cover object-top"
            unoptimized
          />
        </div>
        {/* Home bar */}
        <div className="mx-auto mt-1.5 w-16 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}

export default function DeviceShowcase() {
  return (
    <section id="showcase" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6B00] mb-3">
            Platform Preview
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1209] leading-[1.1]">
            Your Platform. Your Brand.{" "}
            <span className="text-gradient">Your Success.</span>
          </h2>
          <p className="mt-4 text-base text-[#6B6058] max-w-xl mx-auto leading-relaxed">
            Teach. Engage. Grow. All in One Place.
          </p>
        </motion.div>

        {/* ── Desktop showcase: features | laptop | features ── */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 xl:gap-12 items-center mb-16">
          {/* Left features */}
          <div className="flex flex-col gap-5">
            {leftFeatures.map((f, i) => (
              <FeatureItem key={f.title} {...f} align="right" index={i} />
            ))}
          </div>

          {/* Desktop mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-[460px] xl:w-[520px] shrink-0"
          >
            <DesktopMockup />
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-5">
            {rightFeatures.map((f, i) => (
              <FeatureItem key={f.title} {...f} align="left" index={i} />
            ))}
          </div>
        </div>

        {/* ── Mobile showcase: phone centered + features stacked ── */}
        <div className="lg:hidden">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <PhoneMockup />
          </motion.div>

          {/* Features 2-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...leftFeatures, ...rightFeatures].map((f, i) => (
              <FeatureItem key={f.title} {...f} align="left" index={i} />
            ))}
          </div>
        </div>

        {/* ── Phone + Desktop side by side — tablet breakpoint ── */}
        {/* Hidden on mobile, hidden on lg (handled above); shown only on md–lg */}
        <div className="hidden md:flex lg:hidden items-end justify-center gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PhoneMockup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 max-w-[400px]"
          >
            <DesktopMockup />
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 border-t border-black/[0.06]"
        >
          {[
            { icon: "🖥️", label: "Own Your Brand" },
            { icon: "👥", label: "Teach. Engage. Grow." },
            { icon: "🔒", label: "100% Content Security" },
            { icon: "📊", label: "All-in-One Platform" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-[#6B6058] font-medium">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA tagline */}
        <p className="text-center mt-6 text-base font-semibold text-[#FF6B00]">
          Start Your Journey with GurukulamX Today!
        </p>
      </div>
    </section>
  );
}
