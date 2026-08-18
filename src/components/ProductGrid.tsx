import { bestSellers, products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function BestSellers() {
  return (
    <section className="bg-warm-white px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Best sellers"
        title="Made to Be Loved"
        subtitle="Our most-loved cookies, freshly baked for every craving."
      />
      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bestSellers.map((p, i) => (
          <Reveal key={p.id} delay={i * 90} className="h-full">
            <ProductCard product={p} priority={i === 0} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProductGrid() {
  return (
    <section id="cookies" className="bg-cream py-16 sm:py-20">
      <div className="px-4 sm:px-6">
        <SectionHeading
          eyebrow="The full collection"
          title="Explore Our Cookies"
          subtitle="Six flavours, each baked fresh in small batches. Swipe to explore."
        />
      </div>

      {/* Mobile: horizontal snap carousel */}
      <div className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:hidden">
        {products.map((p) => (
          <div key={p.id} className="w-[78vw] max-w-[19rem] shrink-0 snap-center">
            <ProductCard product={p} className="h-full" />
          </div>
        ))}
      </div>

      {/* Tablet / desktop grid */}
      <div className="mx-auto mt-9 hidden max-w-6xl gap-5 px-6 lg:grid lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} className="h-full">
            <ProductCard product={p} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
