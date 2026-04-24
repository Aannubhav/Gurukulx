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

  const next = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[active];

  return (
    <section className="section-padding relative overflow-hidden bg-[#0F0E13]">
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,140,33,0.15)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,140,33,0.15)] to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(255,140,33,0.05) 0%, transparent 70%)",
        }}
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
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main quote card */}
          <div
            className="relative rounded-3xl p-8 sm:p-12 overflow-hidden"
            style={{
              background: "rgba(255, 160, 50, 0.04)",
              border: "1px solid rgba(255, 140, 33, 0.1)",
            }}
          >
            {/* Orange quote mark */}
            <div className="absolute top-8 left-8 opacity-20" aria-hidden="true">
              <Quote size={72} className="text-[#FF8C21]" fill="#FF8C21" />
            </div>

            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,140,33,0.06) 0%, transparent 60%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="relative"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-[family-name:var(--font-syne)] font-medium text-[#F5F0E8] leading-[1.4] mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#FF8C21] shrink-0"
                    style={{
                      background: "rgba(255,140,33,0.15)",
                      border: "1px solid rgba(255,140,33,0.3)",
                      boxShadow: "0 0 20px rgba(255,140,33,0.15)",
                    }}
                    aria-label={current.author}
                  >
                    {current.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#F5F0E8]">{current.author}</p>
                    <p className="text-sm text-[#9A8E7F]">
                      {current.title}, {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-[#FF8C21]"
                      : "w-2 h-2 bg-[rgba(255,140,33,0.25)] hover:bg-[rgba(255,140,33,0.5)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-[rgba(255,140,33,0.15)] flex items-center justify-center text-[#9A8E7F] hover:text-[#FF8C21] hover:border-[rgba(255,140,33,0.35)] transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-[rgba(255,140,33,0.15)] flex items-center justify-center text-[#9A8E7F] hover:text-[#FF8C21] hover:border-[rgba(255,140,33,0.35)] transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary cards preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <motion.button
              key={t.author}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                active === i
                  ? "border-[rgba(255,140,33,0.3)] bg-[rgba(255,140,33,0.08)]"
                  : "border-[rgba(255,140,33,0.06)] bg-[rgba(255,160,50,0.02)] hover:border-[rgba(255,140,33,0.15)]"
              }`}
            >
              <p className="text-xs text-[#9A8E7F] line-clamp-3 mb-3">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-[#FF8C21]"
                  style={{ background: "rgba(255,140,33,0.12)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F5F0E8]">{t.author}</p>
                  <p className="text-[10px] text-[#9A8E7F]">{t.company}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
