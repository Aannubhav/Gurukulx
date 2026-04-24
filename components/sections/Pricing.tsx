"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, TrendingUp, Code2, Info } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { PRICING_PLANS } from "@/lib/constants";

function StarterCalculator() {
  const [gmv, setGmv] = useState(500000);

  const annualFee = 20000;
  const share = gmv * 0.08;
  const infraShare = gmv * 0.02;
  const marginShare = gmv * 0.06;
  const totalCost = annualFee + share;
  const clientEarns = gmv - share;
  const breakeven = 2500000;
  const pctToBreakeven = Math.min((gmv / breakeven) * 100, 100);

  const fmt = (n: number) =>
    n >= 100000
      ? `₹${(n / 100000).toFixed(1)}L`
      : `₹${n.toLocaleString("en-IN")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="mt-4 p-5 rounded-xl bg-[rgba(255,140,33,0.06)] border border-[rgba(255,140,33,0.15)]"
    >
      <p className="text-xs font-semibold text-[#FF8C21] uppercase tracking-wider mb-4">
        Revenue Share Calculator
      </p>
      <div className="mb-4">
        <div className="flex justify-between text-xs text-[#9A8E7F] mb-2">
          <span>Your annual GMV</span>
          <span className="font-bold text-[#F5F0E8]">{fmt(gmv)}</span>
        </div>
        <input
          type="range"
          min={100000}
          max={5000000}
          step={100000}
          value={gmv}
          onChange={(e) => setGmv(Number(e.target.value))}
          className="w-full accent-[#FF8C21] h-1.5 rounded-full"
        />
        <div className="flex justify-between text-[10px] text-[#9A8E7F]/50 mt-1">
          <span>₹1L</span><span>₹50L</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        {[
          { label: "Annual fee", val: "₹20,000", highlight: false },
          { label: "8% GMV share", val: fmt(share), highlight: true },
          { label: "Total you pay", val: fmt(totalCost), highlight: false },
          { label: "You keep", val: fmt(clientEarns), highlight: true },
        ].map(({ label, val, highlight }) => (
          <div key={label} className="p-3 rounded-lg bg-[rgba(255,140,33,0.04)] border border-[rgba(255,140,33,0.08)]">
            <p className="text-[10px] text-[#9A8E7F] mb-1">{label}</p>
            <p className={`font-bold text-sm ${highlight ? "text-[#FF8C21]" : "text-[#F5F0E8]"}`}>{val}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-[10px] text-[#9A8E7F] mb-1.5">
          <span>Progress to Professional breakeven</span>
          <span>{Math.round(pctToBreakeven)}% of ₹25L</span>
        </div>
        <div className="h-1.5 rounded-full bg-[rgba(255,140,33,0.12)]">
          <div className="h-full rounded-full bg-[#FF8C21] transition-all duration-300" style={{ width: `${pctToBreakeven}%` }} />
        </div>
        {gmv >= breakeven && (
          <p className="text-[10px] text-[#FF8C21] mt-1.5 font-semibold">✓ At this GMV, Professional saves you money</p>
        )}
      </div>

      <div className="pt-3 border-t border-[rgba(255,140,33,0.08)]">
        <p className="text-[10px] text-[#9A8E7F] mb-2">Where your 8% goes:</p>
        <div className="flex gap-3">
          {[
            { label: "Payment & infra (2%)", val: fmt(infraShare), w: "25%" },
            { label: "Platform margin (6%)", val: fmt(marginShare), w: "75%" },
          ].map(({ label, val, w }) => (
            <div key={label} className="flex-1">
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className="text-[#9A8E7F]">{label}</span>
                <span className="text-[#F5F0E8]">{val}</span>
              </div>
              <div className="h-1 rounded-full bg-[rgba(255,140,33,0.15)]">
                <div className="h-full rounded-full bg-[#FF8C21]" style={{ width: w }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const planIcons = [TrendingUp, Zap, Code2];

export default function Pricing() {
  const [expandedCalc, setExpandedCalc] = useState(false);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,140,33,0.06) 0%, transparent 60%)" }}
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Pricing"
          title="Three Models."
          titleHighlight="One Platform."
          subtitle="Pick the model that fits where you are today — and upgrade as you grow. No lock-in, no surprises."
          className="mb-6"
        />

        {/* Decision logic pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {[
            { q: "Low cash now", a: "→ Starter" },
            { q: "Want fixed cost", a: "→ Professional" },
            { q: "Want ownership", a: "→ Enterprise" },
          ].map(({ q, a }) => (
            <div key={q} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs border border-[rgba(255,140,33,0.12)] bg-[rgba(255,140,33,0.04)]">
              <span className="text-[#9A8E7F]">{q}</span>
              <span className="text-[#FF8C21] font-semibold">{a}</span>
            </div>
          ))}
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => {
            const Icon = planIcons[i];
            const isHighlight = plan.highlighted;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: isHighlight ? 1.03 : 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                  isHighlight
                    ? "border-2 border-[#FF8C21] bg-gradient-to-b from-[rgba(255,140,33,0.1)] to-[rgba(255,107,0,0.04)] shadow-[0_0_60px_rgba(255,140,33,0.18)]"
                    : "glass-card hover:border-[rgba(255,140,33,0.2)] hover:shadow-[0_0_30px_rgba(255,140,33,0.08)]"
                }`}
              >
                {isHighlight && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" aria-hidden="true"
                    style={{ background: "radial-gradient(ellipse at top, rgba(255,140,33,0.12) 0%, transparent 60%)" }}
                  />
                )}

                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="solid" className="shadow-[0_0_20px_rgba(255,140,33,0.4)]">
                      <Zap size={10} fill="currentColor" /> {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="relative flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                        isHighlight ? "bg-[#FF8C21] shadow-[0_0_20px_rgba(255,140,33,0.4)]" : "bg-[rgba(255,140,33,0.12)]"
                      }`}>
                        <Icon size={18} className={isHighlight ? "text-[#08080C]" : "text-[#FF8C21]"} />
                      </div>
                      <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F0E8]">{plan.name}</h3>
                      <p className="text-xs text-[#9A8E7F] mt-0.5">{plan.tagline}</p>
                    </div>
                    {plan.insight && (
                      <span className="text-[10px] text-[#FF8C21] bg-[rgba(255,140,33,0.1)] border border-[rgba(255,140,33,0.2)] px-2 py-1 rounded-lg text-right leading-tight max-w-[90px]">
                        {plan.insight}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <p className={`font-[family-name:var(--font-syne)] text-3xl font-bold ${isHighlight ? "text-[#FF8C21]" : "text-[#F5F0E8]"}`}>
                      {plan.priceDisplay}
                    </p>
                    <p className="text-sm text-[#9A8E7F] mt-0.5">{plan.subDisplay}</p>
                  </div>

                  {/* Calculator toggle for Starter */}
                  {plan.id === "starter" && (
                    <button
                      onClick={() => setExpandedCalc((v) => !v)}
                      className="flex items-center gap-1.5 text-xs text-[#FF8C21] hover:text-[#FFB366] transition-colors mb-2 mt-1 w-fit"
                    >
                      <Info size={12} />
                      {expandedCalc ? "Hide" : "Calculate"} your revenue share
                    </button>
                  )}
                  <AnimatePresence>
                    {plan.id === "starter" && expandedCalc && <StarterCalculator />}
                  </AnimatePresence>

                  <p className="text-sm text-[#9A8E7F] leading-relaxed mt-3 mb-5">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isHighlight ? "bg-[#FF8C21]" : "bg-[rgba(255,140,33,0.15)]"
                        }`}>
                          <Check size={9} className={isHighlight ? "text-[#08080C]" : "text-[#FF8C21]"} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-[#9A8E7F]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={isHighlight ? "primary" : "outline"} size="md" glow={isHighlight} className="w-full">
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infrastructure transparency note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl border border-[rgba(255,140,33,0.1)] bg-[rgba(255,140,33,0.03)]"
        >
          <p className="text-xs font-semibold text-[#FF8C21] uppercase tracking-wider mb-4">
            Infrastructure costs — paid separately, kept fully transparent
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { item: "Hosting / Server", range: "₹5K – ₹20K / mo" },
              { item: "Domain + CDN", range: "₹500 – ₹2K / mo" },
              { item: "SMS / Email", range: "₹500 – ₹3K / mo" },
            ].map(({ item, range }) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C21]/50 mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs text-[#F5F0E8] font-medium">{item}</p>
                  <p className="text-xs text-[#9A8E7F]">{range}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#9A8E7F]/60 mt-4">
            GurukulamX carries zero infra liability — our margins stay clean, your costs stay predictable.{" "}
            <a href="#contact" className="text-[#FF8C21] hover:underline">Need a bundled quote?</a>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-5 text-center text-sm text-[#9A8E7F]"
        >
          Custom development:{" "}
          <span className="text-[#F5F0E8]">₹699/hr</span> (Starter & Professional) ·{" "}
          <span className="text-[#F5F0E8]">₹599/hr</span> (Enterprise)
        </motion.p>
      </div>
    </section>
  );
}
