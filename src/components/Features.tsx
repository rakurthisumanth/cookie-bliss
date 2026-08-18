import { EggOff, Wheat, Croissant, Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: EggOff,
    title: "100% Eggless",
    text: "Delicious cookies made without eggs.",
  },
  {
    icon: Wheat,
    title: "Premium Ingredients",
    text: "Carefully selected ingredients for rich flavour.",
  },
  {
    icon: Croissant,
    title: "Freshly Baked",
    text: "Freshness and taste in every batch.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    text: "Because the best cookies should make people happy.",
  },
];

export function Features() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Why Bachelor Baabulu"
        title="Why You'll Love Every Bite"
      />
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 90} as="article">
            <div className="h-full rounded-3xl border border-border/70 bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chocolate text-gold">
                <f.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-chocolate">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-chocolate px-4 py-8 sm:px-6">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex items-center gap-2.5 rounded-2xl border border-cream/10 px-3 py-3"
          >
            <f.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
            <span className="min-w-0 text-xs font-semibold leading-tight text-cream sm:text-sm">
              {f.title}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
