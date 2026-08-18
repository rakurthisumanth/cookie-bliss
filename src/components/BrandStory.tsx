import logo from "@/assets/logo.png";
import { Reveal } from "./Reveal";

export function BrandStory() {
  return (
    <section id="about" className="relative overflow-hidden bg-warm-white px-4 py-16 sm:px-6 sm:py-20">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-xs sm:max-w-sm">
            <div className="absolute inset-0 rounded-full bg-cream" aria-hidden />
            <img
              src={logo}
              alt="Bachelor Baabulu Cookies brand mark"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="relative w-full object-contain"
            />
          </div>
        </Reveal>
        <Reveal className="order-2 lg:order-1" delay={100}>
          <p className="font-script text-2xl text-caramel">Our story</p>
          <h2 className="mt-1 text-3xl leading-tight text-chocolate sm:text-4xl">
            More Than Just a Cookie
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            At Bachelor Baabulu Cookies, every batch is made with passion, care and a
            little extra love. From classic favourites to indulgent creations, our goal is
            simple — to make every bite worth remembering.
          </p>
          <p className="mt-4 border-l-2 border-caramel/50 pl-4 font-display text-xl text-chocolate">
            Premium Eggless Cookies, Baked Fresh with Love.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
