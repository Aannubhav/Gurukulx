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
      "bg-[rgba(255,140,33,0.12)] text-[#FFB366] border border-[rgba(255,140,33,0.2)]",
    outline:
      "border border-[#FF8C21]/50 text-[#FF8C21] bg-transparent",
    solid:
      "bg-[#FF8C21] text-[#08080C]",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
