interface BadgeProps {
  children: string;
  variant?: "signal" | "spark" | "neutral";
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  signal: "border-signal/30 bg-signal/10 text-signal",
  spark: "border-spark/30 bg-spark/10 text-spark",
  neutral: "border-surface-line bg-surface-raised text-ash",
};

export default function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
