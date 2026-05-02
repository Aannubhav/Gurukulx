"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF6A2A] mb-3">
            Platform Preview
          </p>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] leading-[1.1]">
            Your Platform. Your Brand.{" "}
            <span className="text-gradient">Your Success.</span>
          </h2>
          <p className="mt-4 text-base text-[#555555] max-w-xl mx-auto leading-relaxed">
            Teach. Engage. Grow. All in One Place.
          </p>
        </motion.div>

        {/* Desktop image — shown on md+ */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:block mb-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.10)] border border-[#E5E5E5]">
            <Image
              src="/images/desktop-mockup.png"
              alt="GurukulamX Platform — Desktop"
              width={1400}
              height={800}
              className="w-full h-auto object-cover"
              unoptimized
              priority
            />
          </div>
        </motion.div>

        {/* Mobile image — shown on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden mb-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.10)] border border-[#E5E5E5] max-w-sm mx-auto">
            <Image
              src="/images/mobile-mockup.png"
              alt="GurukulamX Platform — Mobile"
              width={600}
              height={1000}
              className="w-full h-auto object-cover"
              unoptimized
              priority
            />
          </div>
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 border-t border-[#E5E5E5]"
        >
          {[
            { icon: "🖥️", label: "Own Your Brand" },
            { icon: "👥", label: "Teach. Engage. Grow." },
            { icon: "🔒", label: "100% Content Security" },
            { icon: "📊", label: "All-in-One Platform" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-[#555555] font-medium">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        <p className="text-center mt-6 text-base font-semibold text-[#FF6A2A]">
          Start Your Journey with GurukulamX Today!
        </p>
      </div>
    </section>
  );
}
