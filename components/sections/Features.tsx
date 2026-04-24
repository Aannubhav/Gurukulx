"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield, Zap, Globe, Code2, BarChart3,
  Users, RefreshCw, Puzzle,
  type LucideProps,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";

type LucideIcon = (props: LucideProps) => React.ReactElement;

const iconMap: Record<string, LucideIcon> = {
  Shield: Shield as LucideIcon,
  Zap: Zap as LucideIcon,
  Globe: Globe as LucideIcon,
  Code2: Code2 as LucideIcon,
  BarChart3: BarChart3 as LucideIcon,
  Users: Users as LucideIcon,
  RefreshCw: RefreshCw as LucideIcon,
  Puzzle: Puzzle as LucideIcon,
};

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,140,33,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to"
          titleHighlight="Ship Fast"
          subtitle="Stop building infrastructure. Start shipping product. NexStack handles the hard parts so your team can focus on what matters."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Zap;
            const isHighlight = feature.highlight;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (i % 4) * 0.1,
                }}
                className={`group relative rounded-2xl p-6 transition-all duration-400 cursor-default ${
                  isHighlight
                    ? "sm:col-span-1 lg:col-span-2 bg-gradient-to-br from-[rgba(255,140,33,0.1)] to-[rgba(255,107,0,0.04)] border border-[rgba(255,140,33,0.2)] shadow-[0_0_40px_rgba(255,140,33,0.1)]"
                    : "glass-card hover:border-[rgba(255,140,33,0.2)] hover:bg-[rgba(255,160,50,0.07)] hover:shadow-[0_0_30px_rgba(255,140,33,0.1)] hover:-translate-y-1"
                }`}
              >
                {isHighlight && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(255,140,33,0.15), transparent 70%)",
                    }}
                  />
                )}

                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                      isHighlight
                        ? "bg-[#FF8C21] shadow-[0_0_20px_rgba(255,140,33,0.5)]"
                        : "bg-[rgba(255,140,33,0.12)] group-hover:bg-[rgba(255,140,33,0.2)]"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isHighlight ? "text-[#08080C]" : "text-[#FF8C21]"}
                      strokeWidth={isHighlight ? 2.5 : 2}
                    />
                  </div>

                  <h3
                    className={`font-[family-name:var(--font-syne)] font-bold mb-2 ${
                      isHighlight ? "text-xl text-[#F5F0E8]" : "text-lg text-[#F5F0E8]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-[#9A8E7F] leading-relaxed ${
                      isHighlight ? "text-base" : "text-sm"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {isHighlight && (
                    <div className="mt-4 flex items-center gap-2 text-[#FF8C21] text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn more
                      <span>→</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
