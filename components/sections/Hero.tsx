"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Play, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/useMediaQuery";
import HeroScene from "@/components/three/HeroScene";

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-[#FF8C21]/30 border-t-[#FF8C21] animate-spin" />
        <p className="text-xs text-[#9A8E7F] tracking-wider uppercase">Initializing</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { normalized } = useMousePosition();
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(255,140,33,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #FF8C21, transparent)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-32 lg:py-0">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:gap-8"
        >
          <motion.div variants={itemVariants}>
            <Badge>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C21] animate-pulse-glow inline-block" />
              EdTech SaaS Platform
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#F5F0E8]"
          >
            Launch. Teach.{" "}
            <span className="block">
              <span className="text-gradient">Scale.</span>
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl mt-1">Under Your Brand.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-[#9A8E7F] max-w-lg leading-relaxed"
          >
            Full LMS, white-label mobile apps, and an AI learning engine — ready in weeks.
            Three licensing models built for every stage of your EdTech journey.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" glow>
              See Pricing
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg">
              <Play size={16} fill="currentColor" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Social proof micro */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-2"
          >
            <div className="flex -space-x-2">
              {["RS", "PM", "AG", "SR"].map((initials, i) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full border-2 border-[#08080C] flex items-center justify-center text-[10px] font-bold text-[#FF8C21]"
                  style={{
                    background: `rgba(255,140,33,${0.15 + i * 0.03})`,
                    zIndex: 4 - i,
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#9A8E7F]">
              <span className="text-[#F5F0E8] font-semibold">200+</span> institutes
              already live
            </p>
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full h-[500px] lg:h-[650px] relative"
          aria-hidden="true"
        >
          {/* Canvas glow base */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,140,33,0.08) 0%, transparent 70%)",
            }}
          />

          {!isMobile ? (
            <Canvas
              camera={{ position: [0, 0.5, 5.5], fov: 50 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              style={{ background: "transparent" }}
            >
              <Suspense fallback={null}>
                <HeroScene mouseX={normalized.x} mouseY={normalized.y} />
                <EffectComposer>
                  <Bloom
                    intensity={1.8}
                    luminanceThreshold={0.55}
                    luminanceSmoothing={0.025}
                    mipmapBlur
                  />
                </EffectComposer>
              </Suspense>
            </Canvas>
          ) : (
            /* Mobile static fallback */
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div
                  className="absolute inset-0 rounded-full animate-pulse-glow"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,140,33,0.4) 0%, transparent 70%)",
                  }}
                />
                <div className="absolute inset-8 rounded-full border-2 border-[#FF8C21]/30 animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#FF8C21]/20 border border-[#FF8C21]/50 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#FF8C21]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#9A8E7F]/60">
          Scroll
        </span>
        <div className="flex flex-col gap-1 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
              className="w-0.5 h-1.5 rounded-full bg-[#FF8C21]"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
