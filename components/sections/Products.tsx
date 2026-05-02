"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, BarChart3, GitBranch, Plug,
  Bell, WifiOff, Palette, Fingerprint,
  Zap, CreditCard, Layers, Mic,
  CheckCircle2,
  type LucideProps,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/constants";

type LucideIcon = (props: LucideProps) => React.ReactElement;

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard: LayoutDashboard as LucideIcon,
  BarChart3: BarChart3 as LucideIcon,
  GitBranch: GitBranch as LucideIcon,
  Plug: Plug as LucideIcon,
  Bell: Bell as LucideIcon,
  WifiOff: WifiOff as LucideIcon,
  Palette: Palette as LucideIcon,
  Fingerprint: Fingerprint as LucideIcon,
  Zap: Zap as LucideIcon,
  CreditCard: CreditCard as LucideIcon,
  Layers: Layers as LucideIcon,
  Mic: Mic as LucideIcon,
};

/* Map product id → local screenshot */
const mockupImages: Record<string, string> = {
  web: "/images/desktop-mockup.jpg",
  android: "/images/mobile-mockup.jpg",
  ios: "/images/mobile-mockup.jpg",
};

interface ProductCardProps {
  product: (typeof PRODUCTS)[0];
  index: number;
  reversed?: boolean;
}

function ProductCard({ product, index, reversed }: ProductCardProps) {
  const textVariants = {
    hidden: { opacity: 0, x: reversed ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reversed ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.15 } },
  };

  const imgSrc = mockupImages[product.id] || mockupImages.web;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}>
      {/* Text side */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`flex flex-col gap-6 ${reversed ? "lg:col-start-2" : ""}`}
      >
        <div>
          <Badge className="mb-4">
            {index === 0 ? "01" : index === 1 ? "02" : "03"} / Platform
          </Badge>
          <h3 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-3">
            {product.name}
          </h3>
          <p className="text-[#FF6A2A] font-semibold mb-4">{product.tagline}</p>
          <p className="text-[#555555] leading-relaxed text-lg">{product.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {product.features.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <div
                key={feature.text}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E5E5E5] hover:border-[rgba(255,106,42,0.25)] hover:shadow-[0_2px_12px_rgba(255,106,42,0.08)] transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFE5D6] flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#FF6A2A]" />
                </div>
                <span className="text-sm text-[#000000] font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>

        <div>
          <Button variant="outline" size="md">
            Explore {product.name.split(" ")[0]} →
          </Button>
        </div>
      </motion.div>

      {/* Screenshot side */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`w-full relative ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}
        aria-hidden="true"
      >
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,106,42,0.06) 0%, transparent 70%)" }}
        />
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#E5E5E5]">
          <Image
            src={imgSrc}
            alt={product.name}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="section-padding relative overflow-hidden bg-[#F7F7F7]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,106,42,0.04) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Platform"
          title="LMS. Mobile. AI."
          titleHighlight="All Under Your Brand."
          subtitle="One platform to launch your institute's full digital presence — customised with your logo, colours, and domain. No vendor lock-in, no generic software."
          className="mb-20"
        />

        <div className="flex flex-col gap-28 lg:gap-36">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
