import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE } from "@/config/site";
import { OrderButton } from "./OrderButton";

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer id="contact" className="bg-espresso px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-9 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt={`${SITE.name} logo`}
              width={512}
              height={512}
              loading="lazy"
              className="h-12 w-12 shrink-0 object-contain"
            />
            <p className="min-w-0 font-display text-lg leading-tight text-cream">
              Bachelor Baabulu <span className="text-gold">Cookies</span>
            </p>
          </div>
          <p className="mt-3 font-script text-xl text-gold">{SITE.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @bachelor_baabulu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Explore
          </h3>
          <ul className="mt-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => go(l.id)}
                  className="min-h-11 text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
            Order
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Message us on WhatsApp at 83417 46459 and we'll bake your box fresh.
          </p>
          <OrderButton className="mt-4 w-full sm:w-auto" />
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-cream/10 pt-5 text-xs text-cream/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
