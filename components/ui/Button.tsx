import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-signal text-ink-950 hover:bg-signal-dim shadow-glow hover:shadow-none",
  secondary:
    "border border-surface-line bg-surface text-ash-bright hover:border-signal/50 hover:text-signal",
  ghost: "text-ash-bright hover:text-signal",
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  icon,
  className = "",
}: ButtonProps) {
  const sharedProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...sharedProps}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
