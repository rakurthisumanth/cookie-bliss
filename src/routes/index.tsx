import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BestSellers, ProductGrid } from "@/components/ProductGrid";
import { ComboSection } from "@/components/ComboSection";
import { PricingSection } from "@/components/PricingSection";
import { Features, TrustStrip } from "@/components/Features";
import { BrandStory } from "@/components/BrandStory";
import { OrderCta } from "@/components/OrderCta";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { menuItems } from "@/data/products";

const title = "Bachelor Baabulu Cookies | Premium Eggless Cookies";
const description =
  "Discover freshly baked, premium eggless cookies from Bachelor Baabulu Cookies. Choose from Chocolate Chip, Double Chocolate, Red Velvet, Oreo, Butter, Dry Fruit and our 6-in-1 Cookie Combo.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Bachelor Baabulu Cookies",
          description,
          servesCuisine: "Bakery",
          priceRange: "₹70 - ₹200",
          hasMenu: {
            "@type": "Menu",
            hasMenuSection: {
              "@type": "MenuSection",
              name: "Cookies",
              hasMenuItem: menuItems.map((m) => ({
                "@type": "MenuItem",
                name: m.name,
                offers: { "@type": "Offer", price: m.price, priceCurrency: "INR" },
              })),
            },
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-warm-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <BestSellers />
        <ProductGrid />
        <ComboSection />
        <PricingSection />
        <Features />
        <BrandStory />
        <OrderCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
