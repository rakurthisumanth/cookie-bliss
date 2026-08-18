import { Check, Sparkles } from "lucide-react";
import { combo } from "@/data/products";
import { OrderButton } from "./OrderButton";
import { Reveal } from "./Reveal";

export function ComboSection() {
  return (
    <section
      id="combo"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, var(--espresso), var(--chocolate))" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-1">
          <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-[var(--shadow-lift)]">
            <img
              src={combo.image}
              alt="6-in-1 Bachelor Baabulu cookie combo box with six cookie flavours"
              width={1280}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-2" delay={120}>
          <p className="font-script text-2xl text-gold">Our signature box</p>
          <h2 className="mt-1 text-balance text-3xl leading-tight text-cream sm:text-4xl">
            Six Flavours. One Box. Endless Happiness.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
            The perfect way to taste the Bachelor Baabulu collection.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {combo.flavours.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-cream/85">
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2">
            {combo.badges.map((b) => (
              <li
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-cream/5 px-3 py-1.5 text-xs font-medium text-gold"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <span className="font-display text-3xl text-cream">₹{combo.price}</span>
            <OrderButton
              productName={`the ${combo.name}`}
              price={combo.price}
              label="Order the 6-in-1 Combo"
              size="lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
