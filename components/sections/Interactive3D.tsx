"use client";

import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InteractiveShowcaseScene from "@/components/three/InteractiveShowcase";
import { useIsMobile } from "@/hooks/useMediaQuery";

const products = [
  {
    id: "web",
    name: "Full LMS Portal",
    tagline: "White-label Web Platform",
    description:
      "A complete learning management system on your own domain — live classes, recorded content, test series, fee collection, analytics, and more. Zero coding required.",
    icon: Monitor,
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "3 wks", label: "Avg launch" },
      { value: "50+", label: "LMS modules" },
    ],
  },
  {
    id: "android",
    name: "Android Learning App",
    tagline: "Your Brand on Play Store",
    description:
      "Native Android app published under your institute's name. Push notifications, offline downloads, live class access, and in-app payments — all branded to you.",
    icon: Smartphone,
    stats: [
      { value: "4.8★", label: "Avg rating" },
      { value: "60fps", label: "UI smoothness" },
      { value: "Offline", label: "Video support" },
    ],
  },
  {
    id: "ios",
    name: "iOS Learning App",
    tagline: "Your Brand on App Store",
    description:
      "Premium iOS experience under your institute's App Store listing. Apple Pay for fees, Siri shortcuts for schedules, and a polished UI your students will love.",
    icon: Tablet,
    stats: [
      { value: "4.9★", label: "App Store" },
      { value: "Face ID", label: "Auth support" },
      { value: "A+", label: "Apple audit" },
    ],
  },
];

export default function Interactive3D() {
  const [selected, setSelected] = useState(1);
  const isMobile = useIsMobile();
  const currentProduct = products[selected];

  return (
    <section className="section-padding relative overflow-hidden bg-[#0F0E13]">
      {/* Top and bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,140,33,0.2)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,140,33,0.2)] to-transparent" />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Interactive"
          title="Your Institute."
          titleHighlight="Every Screen."
          subtitle="Click any platform to explore it. Drag to rotate. See exactly what your students will experience."
          className="mb-12"
        />

        <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,140,33,0.1)]"
          style={{
            background: "rgba(8, 8, 12, 0.8)",
            boxShadow: "0 0 80px rgba(255,140,33,0.06) inset",
          }}
        >
          {/* 3D Canvas */}
          <div className="w-full h-[55vh] min-h-[380px]" aria-label="Interactive 3D product showcase">
            {!isMobile ? (
              <Canvas
                camera={{ position: [0, 1.5, 7], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
              >
                <Suspense fallback={null}>
                  <InteractiveShowcaseScene selected={selected} onSelect={setSelected} />
                  <EffectComposer>
                    <Bloom
                      intensity={2.0}
                      luminanceThreshold={0.5}
                      luminanceSmoothing={0.025}
                      mipmapBlur
                    />
                  </EffectComposer>
                </Suspense>
              </Canvas>
            ) : (
              <div className="w-full h-full flex items-center justify-center gap-6">
                {products.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelected(i)}
                    className={`relative w-20 h-32 rounded-2xl border transition-all duration-300 ${
                      selected === i
                        ? "border-[#FF8C21] shadow-[0_0_30px_rgba(255,140,33,0.4)] scale-110 bg-[rgba(255,140,33,0.15)]"
                        : "border-[rgba(255,140,33,0.15)] bg-[rgba(255,140,33,0.04)]"
                    }`}
                  >
                    <div className="absolute inset-2 rounded-xl bg-[#FF8C21]/20 border border-[#FF8C21]/40" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product selector buttons */}
          <div className="border-t border-[rgba(255,140,33,0.08)] flex flex-col sm:flex-row">
            {products.map((product, i) => {
              const Icon = product.icon;
              const isActive = selected === i;

              return (
                <button
                  key={product.id}
                  onClick={() => setSelected(i)}
                  className={`flex-1 flex items-center gap-3 px-6 py-4 transition-all duration-300 text-left ${
                    isActive
                      ? "bg-[rgba(255,140,33,0.08)] border-t-2 border-t-[#FF8C21] sm:border-t-0 sm:border-l-2 sm:border-l-[#FF8C21]"
                      : "hover:bg-[rgba(255,140,33,0.04)] border-t-2 border-t-transparent sm:border-t-0 sm:border-l-2 sm:border-l-transparent"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#FF8C21]" : "bg-[rgba(255,140,33,0.1)]"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={isActive ? "text-[#08080C]" : "text-[#FF8C21]"}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isActive ? "text-[#F5F0E8]" : "text-[#9A8E7F]"
                      }`}
                    >
                      {product.name}
                    </p>
                    <p className="text-xs text-[#9A8E7F]/60">{product.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Product info overlay */}
          <div className="border-t border-[rgba(255,140,33,0.08)] p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12"
              >
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F0E8] mb-2">
                    {currentProduct.name}
                  </h3>
                  <p className="text-sm text-[#9A8E7F] leading-relaxed max-w-lg">
                    {currentProduct.description}
                  </p>
                </div>
                <div className="flex gap-8 shrink-0">
                  {currentProduct.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-[family-name:var(--font-syne)] text-2xl font-bold text-gradient">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[#9A8E7F] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hint */}
        {!isMobile && (
          <p className="text-center text-xs text-[#9A8E7F]/50 mt-4 tracking-wider">
            Click a product · Drag to rotate
          </p>
        )}
      </div>
    </section>
  );
}
