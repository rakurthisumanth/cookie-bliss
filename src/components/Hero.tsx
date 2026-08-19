import { useEffect, useRef } from "react";
import { OrderButton } from "./OrderButton";
import { Logo3D } from "./Logo3D";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        section.style.setProperty("--hero-shift", `${Math.min(y * 0.22, 120)}px`);
        section.style.setProperty("--hero-fade", `${Math.max(1 - y / 700, 0.35)}`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-stage relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44"
    >
      <div className="hero-aurora" aria-hidden />
      <div className="hero-sparkles" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-gold)", transform: "translateY(var(--hero-shift, 0px))" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-10 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-gold)", transform: "translateY(calc(var(--hero-shift, 0px) * -0.6))" }}
        aria-hidden
      />

      <div
        className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16"
        style={{ opacity: "var(--hero-fade, 1)" }}
      >
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full border border-gold/40 bg-cream/8 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold shadow-[0_0_24px_color-mix(in_oklab,var(--gold)_18%,transparent)] sm:text-xs">
            Freshly Baked · Eggless · Made with Love
          </p>
          <h1 className="mt-5 text-balance font-display text-[2.35rem] leading-[1.06] text-cream sm:text-5xl lg:text-[3.85rem]">
            Baked with Passion.
            <span className="mt-1 block text-gradient-gold">Made for Everyone.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base lg:mx-0 lg:max-w-lg">
            From classic chocolate chip to indulgent double chocolate and irresistible
            cookie combos — discover your new favorite bite.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <OrderButton size="lg" />
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("cookies")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-cream/30 bg-cream/5 px-7 text-base font-semibold text-cream backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              Explore Cookies
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Logo3D />
        </div>
      </div>
    </section>
  );
}
