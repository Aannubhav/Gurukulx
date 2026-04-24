"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card rounded-2xl p-6 transition-all duration-400",
          hover &&
            "hover:border-[rgba(255,140,33,0.25)] hover:bg-[rgba(255,160,50,0.07)] hover:shadow-[0_0_30px_rgba(255,140,33,0.12)] hover:-translate-y-1",
          glow && "shadow-[0_0_40px_rgba(255,140,33,0.15)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
