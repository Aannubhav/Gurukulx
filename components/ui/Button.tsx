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
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#FF6B00] text-white hover:bg-[#FF8C21] active:bg-[#CC5500] hover:scale-[1.03] active:scale-[0.98]",
      outline:
        "border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white active:bg-[#CC5500] hover:scale-[1.03] active:scale-[0.98]",
      ghost:
        "text-[#6B6058] hover:text-[#FF6B00] hover:bg-[rgba(255,107,0,0.06)] active:bg-[rgba(255,107,0,0.1)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const glowClass = glow
      ? variant === "primary"
        ? "shadow-[0_4px_24px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_36px_rgba(255,107,0,0.5)]"
        : "shadow-[0_2px_16px_rgba(255,107,0,0.15)] hover:shadow-[0_4px_24px_rgba(255,107,0,0.25)]"
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
