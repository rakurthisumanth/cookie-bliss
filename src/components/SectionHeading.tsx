import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-script text-xl sm:text-2xl",
            dark ? "text-gold" : "text-caramel",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-1 text-balance text-3xl leading-tight sm:text-4xl md:text-5xl",
          dark ? "text-cream" : "text-chocolate",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base",
            dark ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
