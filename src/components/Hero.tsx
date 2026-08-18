import logo from "@/assets/logo.png";
import { OrderButton } from "./OrderButton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full border border-gold/30 bg-cream/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs">
            Freshly Baked · Eggless · Made with Love
          </p>
          <h1 className="mt-4 text-balance font-display text-[2.1rem] leading-[1.08] text-cream sm:text-5xl lg:text-[3.6rem]">
            Baked with Passion.
            <span className="block text-gradient-gold">Made for Everyone.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base lg:mx-0 lg:max-w-lg">
            From classic chocolate chip to indulgent double chocolate and irresistible
            cookie combos — discover your new favorite bite.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <OrderButton size="lg" />
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("cookies")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-cream/25 px-7 text-base font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Explore Cookies
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md">
            <div
              className="absolute inset-6 rounded-full opacity-70 blur-2xl"
              style={{ boxShadow: "var(--glow-gold)", background: "var(--gradient-gold)" }}
              aria-hidden
            />
            <img
              src={logo}
              alt="Bachelor Baabulu Cookies brand logo"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="relative w-full animate-float-soft object-contain drop-shadow-[0_20px_40px_oklch(0.17_0.04_42/0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
