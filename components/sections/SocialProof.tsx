"use client";

import { motion } from "framer-motion";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-[rgba(255,140,33,0.06)] overflow-hidden" id="about">
      <div className="container-custom mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9A8E7F]"
        >
          Trusted by <span className="text-[#FF8C21]">500+</span> companies worldwide
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #08080C, transparent)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #08080C, transparent)" }}
        />

        <div className="flex overflow-hidden">
          <div className="flex gap-12 animate-marquee shrink-0">
            {TRUSTED_COMPANIES.map((company, i) => (
              <div
                key={`${company}-${i}`}
                className="shrink-0 flex items-center justify-center"
              >
                <span
                  className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#9A8E7F]/30 hover:text-[#9A8E7F]/70 transition-colors duration-300 cursor-default tracking-tight whitespace-nowrap"
                  style={{ fontWeight: 800 }}
                >
                  {company}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-12 animate-marquee shrink-0" aria-hidden="true">
            {TRUSTED_COMPANIES.map((company, i) => (
              <div
                key={`${company}-dup-${i}`}
                className="shrink-0 flex items-center justify-center"
              >
                <span
                  className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#9A8E7F]/30 tracking-tight whitespace-nowrap"
                  style={{ fontWeight: 800 }}
                >
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="container-custom mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Companies" },
            { value: "2M+", label: "End users" },
            { value: "99.99%", label: "Uptime" },
            { value: "<50ms", label: "Avg. response" },
          ].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
            >
              <p className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-bold text-gradient mb-1">
                {value}
              </p>
              <p className="text-sm text-[#9A8E7F]">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
