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
      "bg-[#FFE5D6] text-[#CC3A10] border border-[rgba(255,106,42,0.2)]",
    outline:
      "border border-[#FF6A2A]/60 text-[#FF6A2A] bg-transparent",
    solid:
      "bg-[#FF6A2A] text-white",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
