import type { Product } from "@/data/products";
import { OrderButton } from "./OrderButton";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={`${product.name} — freshly baked eggless cookies`}
          width={1024}
          height={768}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-espresso/85 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
          ₹{product.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-xl leading-snug text-chocolate sm:text-[1.35rem]">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-auto pt-4">
          <OrderButton
            productName={product.name}
            price={product.price}
            label="Order Now"
            size="sm"
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}
