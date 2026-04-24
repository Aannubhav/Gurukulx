"use client";

import React from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import {
  LayoutDashboard, BarChart3, GitBranch, Plug,
  Bell, WifiOff, Palette, Fingerprint,
  Zap, CreditCard, Layers, Mic,
  CheckCircle2,
  type LucideProps,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ProductDevice from "@/components/three/ProductDevice";
import { PRODUCTS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/useMediaQuery";

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

interface ProductCardProps {
  product: (typeof PRODUCTS)[0];
  index: number;
  reversed?: boolean;
}

function ProductCard({ product, index, reversed }: ProductCardProps) {
  const isMobile = useIsMobile();

  const deviceType = product.id as "web" | "android" | "ios";

  const textVariants = {
    hidden: { opacity: 0, x: reversed ? 40 : -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const canvasVariants = {
    hidden: { opacity: 0, x: reversed ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.15 },
    },
  };

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reversed ? "lg:grid-flow-dense" : ""
      }`}
    >
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
          <h3 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0E8] mb-3">
            {product.name}
          </h3>
          <p className="text-[#FF8C21] font-medium mb-4">{product.tagline}</p>
          <p className="text-[#9A8E7F] leading-relaxed text-lg">
            {product.description}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">
          {product.features.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle2;
            return (
              <div
                key={feature.text}
                className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,140,33,0.04)] border border-[rgba(255,140,33,0.08)] hover:border-[rgba(255,140,33,0.2)] hover:bg-[rgba(255,140,33,0.07)] transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(255,140,33,0.12)] flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#FF8C21]" />
                </div>
                <span className="text-sm text-[#F5F0E8] font-medium">
                  {feature.text}
                </span>
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

      {/* 3D Canvas side */}
      <motion.div
        variants={canvasVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`w-full h-[400px] lg:h-[500px] relative ${
          reversed ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,140,33,0.08) 0%, transparent 65%)",
          }}
        />

        {!isMobile ? (
          <Canvas
            camera={{ position: [0, 0, deviceType === "web" ? 5 : 4], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <ProductDevice type={deviceType} />
              <EffectComposer>
                <Bloom
                  intensity={1.6}
                  luminanceThreshold={0.5}
                  luminanceSmoothing={0.03}
                  mipmapBlur
                />
              </EffectComposer>
            </Suspense>
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-32 h-32 rounded-2xl flex items-center justify-center animate-float"
              style={{
                background: "rgba(255,140,33,0.1)",
                border: "1px solid rgba(255,140,33,0.3)",
                boxShadow: "0 0 40px rgba(255,140,33,0.2)",
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-[#FF8C21]/30 border border-[#FF8C21]/60" />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,140,33,0.04) 0%, transparent 60%)",
        }}
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
