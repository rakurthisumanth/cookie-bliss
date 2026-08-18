import { OrderButton } from "./OrderButton";
import { Reveal } from "./Reveal";

export function OrderCta() {
  return (
    <section
      className="relative overflow-hidden px-4 py-18 sm:px-6"
      style={{ background: "linear-gradient(180deg, var(--chocolate), var(--espresso))" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[26rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <Reveal className="relative mx-auto max-w-xl py-14 text-center">
        <p className="font-script text-2xl text-gold">Hungry yet?</p>
        <h2 className="mt-1 text-3xl leading-tight text-cream sm:text-5xl">
          Craving Cookies?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
          Your next favourite cookie is just one WhatsApp away.
        </p>
        <div className="mt-7">
          <OrderButton size="lg" />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-cream/50 sm:text-sm">
          Freshly baked · Packed with love · Delivered with happiness
        </p>
      </Reveal>
    </section>
  );
}
