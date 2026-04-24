"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C21] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080C] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#FF8C21] text-[#08080C] hover:bg-[#FFB366] active:bg-[#CC6A10] hover:scale-[1.03] active:scale-[0.98]",
      outline:
        "border border-[#FF8C21]/40 text-[#FF8C21] hover:bg-[#FF8C21]/10 hover:border-[#FF8C21] active:bg-[#FF8C21]/20 hover:scale-[1.03] active:scale-[0.98]",
      ghost:
        "text-[#9A8E7F] hover:text-[#FF8C21] hover:bg-[#FF8C21]/05 active:bg-[#FF8C21]/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const glowClass = glow
      ? variant === "primary"
        ? "shadow-[0_0_30px_rgba(255,140,33,0.4)] hover:shadow-[0_0_50px_rgba(255,140,33,0.6)]"
        : "shadow-[0_0_20px_rgba(255,140,33,0.2)] hover:shadow-[0_0_35px_rgba(255,140,33,0.35)]"
      : "";

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], glowClass, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
