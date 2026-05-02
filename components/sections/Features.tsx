"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield, Zap, Globe, BarChart3,
  Users, Palette, BookOpen, Brain,
  type LucideProps,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";

type LucideIcon = (props: LucideProps) => React.ReactElement;

const iconMap: Record<string, LucideIcon> = {
  Shield: Shield as LucideIcon,
  Zap: Zap as LucideIcon,
  Globe: Globe as LucideIcon,
  BarChart3: BarChart3 as LucideIcon,
  Users: Users as LucideIcon,
  Palette: Palette as LucideIcon,
  BookOpen: BookOpen as LucideIcon,
  Brain: Brain as LucideIcon,
};

export default function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#FAF8F4]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to"
          titleHighlight="Ship Fast"
          subtitle="Stop building infrastructure. Start shipping product. GurukulamX handles the hard parts so your team can focus on what matters."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-fr">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Zap;
            const isHighlight = feature.highlight;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`group relative rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-default ${
                  isHighlight
                    ? "sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#FF6B00] to-[#FF8C21] shadow-[0_8px_40px_rgba(255,107,0,0.25)]"
                    : "card-light hover:shadow-[0_8px_32px_rgba(255,107,0,0.10)] hover:-translate-y-1"
                }`}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0 transition-all duration-300 group-hover:scale-105 ${
                  isHighlight ? 'bg-white/20' : 'bg-[rgba(255,107,0,0.1)]'
                }">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isHighlight ? "bg-white/20" : "bg-[rgba(255,107,0,0.1)]"
                  }`}>
                    <Icon size={20} className={isHighlight ? "text-white" : "text-[#FF6B00]"} strokeWidth={2} />
                  </div>
                </div>

                <h3 className={`font-[family-name:var(--font-syne)] font-bold mb-2 ${
                  isHighlight ? "text-xl text-white" : "text-base text-[#1A1209]"
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${
                  isHighlight ? "text-white/80" : "text-[#6B6058]"
                }`}>
                  {feature.description}
                </p>

                {isHighlight && (
                  <div className="mt-5 flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
