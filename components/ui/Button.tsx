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
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A2A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7] disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-[#FF6A2A] text-white hover:bg-[#FF8547] active:bg-[#CC3A10] hover:scale-[1.03] active:scale-[0.98]",
      outline:
        "border-2 border-[#FF6A2A] text-[#FF6A2A] hover:bg-[#FF6A2A] hover:text-white active:bg-[#CC3A10] hover:scale-[1.03] active:scale-[0.98]",
      ghost:
        "text-[#555555] hover:text-[#FF6A2A] hover:bg-[#FFE5D6/70] active:bg-[#FFE5D6]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const glowClass = glow
      ? variant === "primary"
        ? "shadow-[0_4px_24px_rgba(255,106,42,0.35)] hover:shadow-[0_6px_36px_rgba(255,106,42,0.5)]"
        : "shadow-[0_2px_16px_rgba(255,106,42,0.15)] hover:shadow-[0_4px_24px_rgba(255,106,42,0.25)]"
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
