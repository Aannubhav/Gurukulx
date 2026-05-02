import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "solid";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const base =
    "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1";

  const variants = {
    default:
      "bg-[rgba(255,107,0,0.1)] text-[#CC5500] border border-[rgba(255,107,0,0.2)]",
    outline:
      "border border-[#FF6B00]/60 text-[#FF6B00] bg-transparent",
    solid:
      "bg-[#FF6B00] text-white",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
