import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type Props = {
  productName?: string;
  price?: number;
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  withIcon?: boolean;
};

export function OrderButton({
  productName,
  price,
  label = "Order on WhatsApp",
  variant = "solid",
  size = "md",
  className,
  withIcon = true,
}: Props) {
  const sizes = {
    sm: "min-h-11 px-4 text-sm",
    md: "min-h-12 px-5 text-sm sm:text-base",
    lg: "min-h-14 px-7 text-base sm:text-lg",
  };
  const variants = {
    solid:
      "bg-caramel text-warm-white hover:bg-gold hover:text-espresso shadow-[var(--shadow-card)]",
    outline:
      "border border-caramel/60 text-caramel hover:bg-caramel hover:text-warm-white",
    ghost: "border border-cream/30 text-cream hover:bg-cream/10",
  };

  return (
    <button
      type="button"
      onClick={() => openWhatsApp(productName, price)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {withIcon && <MessageCircle className="h-[1.1em] w-[1.1em] shrink-0" aria-hidden />}
      {label}
    </button>
  );
}
