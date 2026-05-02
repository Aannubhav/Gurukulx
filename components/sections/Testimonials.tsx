"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!paused) start();
    else stop();
    return stop;
  }, [paused]);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const current = TESTIMONIALS[active];

  return (
    <section className="section-padding relative overflow-hidden bg-[#FAF8F4]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,107,0,0.15)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,107,0,0.15)] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Social Proof"
          title="What Our"
          titleHighlight="Customers Say"
          subtitle="Don't take our word for it. Here's what institute founders and EdTech builders say about GurukulamX."
          className="mb-16"
        />

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative rounded-2xl p-7 sm:p-10 bg-white border border-black/[0.07] shadow-sm overflow-hidden">
            <Quote size={40} className="text-[#FF6B00]/20 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl sm:text-2xl text-[#1A1209] leading-relaxed font-medium mb-8">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #FF8C21, #FF6B00)" }}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1209]">{current.author}</p>
                    <p className="text-sm text-[#6B6058]">{current.title}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FF6B00] text-sm">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-[#FF6B00]" : "w-1.5 bg-black/[0.12]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-black/[0.1] flex items-center justify-center text-[#6B6058] hover:text-[#FF6B00] hover:border-[rgba(255,107,0,0.3)] transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full border border-black/[0.1] flex items-center justify-center text-[#6B6058] hover:text-[#FF6B00] hover:border-[rgba(255,107,0,0.3)] transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
