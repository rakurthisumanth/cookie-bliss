import { menuItems } from "@/data/products";
import { SectionHeading } from "./SectionHeading";
import { OrderButton } from "./OrderButton";
import { Reveal } from "./Reveal";

export function PricingSection() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Cookie menu"
        title="Choose Your Favourite"
        subtitle="Every box is baked to order — eggless, fresh and generously loaded."
      />

      <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        {menuItems.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 60}>
            <div className="flex min-h-16 items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3.5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5">
              <span className="min-w-0 text-sm font-semibold text-chocolate sm:text-base">
                {item.name}
                {"packSize" in item && item.packSize ? (
                  <span className="mt-0.5 block text-xs font-medium text-muted-foreground">
                    Pack of {item.packSize}
                  </span>
                ) : null}
              </span>
              <span className="shrink-0 rounded-full bg-chocolate px-3 py-1 text-sm font-bold text-gold">
                ₹{item.price}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="mt-9 text-center">
        <OrderButton label="Order Your Cookies" size="lg" />
      </div>
    </section>
  );
}
