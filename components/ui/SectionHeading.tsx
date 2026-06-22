interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-signal" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ash-bright sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ash">{description}</p>
      ) : null}
    </div>
  );
}
