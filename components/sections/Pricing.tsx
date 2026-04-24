"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,140,33,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple,"
          titleHighlight="Transparent Pricing"
          subtitle="No hidden fees. No surprise charges. Scale up as you grow — start free, upgrade when you're ready."
          className="mb-10"
        />

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span
            className={`text-sm font-medium transition-colors ${
              !annual ? "text-[#F5F0E8]" : "text-[#9A8E7F]"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C21] ${
              annual ? "bg-[#FF8C21]" : "bg-[rgba(255,140,33,0.2)]"
            }`}
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                annual ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${
              annual ? "text-[#F5F0E8]" : "text-[#9A8E7F]"
            }`}
          >
            Annual
          </span>
          {annual && (
            <Badge variant="solid" className="text-[10px]">
              Save 20%
            </Badge>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.65,
                delay: i * 0.12,
              }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 card-tilt ${
                plan.highlighted
                  ? "border-2 border-[#FF8C21] bg-gradient-to-b from-[rgba(255,140,33,0.1)] to-[rgba(255,107,0,0.04)] shadow-[0_0_60px_rgba(255,140,33,0.2)] scale-105"
                  : "glass-card hover:border-[rgba(255,140,33,0.2)] hover:shadow-[0_0_30px_rgba(255,140,33,0.08)]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" aria-hidden="true">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at top, rgba(255,140,33,0.12) 0%, transparent 60%)",
                    }}
                  />
                </div>
              )}

              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="solid" className="shadow-[0_0_20px_rgba(255,140,33,0.5)]">
                    <Zap size={10} fill="currentColor" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-[family-name:var(--font-syne)] text-xl font-bold text-[#F5F0E8] mb-1"
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-[#9A8E7F]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span
                    className={`font-[family-name:var(--font-syne)] text-5xl font-bold ${
                      plan.highlighted ? "text-[#FF8C21]" : "text-[#F5F0E8]"
                    }`}
                  >
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[#9A8E7F] mb-2">/mo</span>
                </div>
                {annual && (
                  <p className="text-xs text-[#9A8E7F] mt-1">
                    Billed ${(annual ? plan.annualPrice : plan.monthlyPrice) * 12}/yr
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-[#FF8C21] shadow-[0_0_10px_rgba(255,140,33,0.4)]"
                          : "bg-[rgba(255,140,33,0.15)]"
                      }`}
                    >
                      <Check size={11} className={plan.highlighted ? "text-[#08080C]" : "text-[#FF8C21]"} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-[#9A8E7F]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                size="md"
                glow={plan.highlighted}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-[#9A8E7F] mt-10"
        >
          All plans include a 14-day free trial. No credit card required.{" "}
          <a href="#contact" className="text-[#FF8C21] hover:underline">
            Need something custom?
          </a>
        </motion.p>
      </div>
    </section>
  );
}
