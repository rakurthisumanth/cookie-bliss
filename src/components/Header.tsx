import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE } from "@/config/site";
import { OrderButton } from "./OrderButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open
          ? "border-b border-cream/10 bg-espresso/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 sm:px-6 lg:py-3">
        <button
          type="button"
          onClick={() => go("home")}
          className="flex min-w-0 items-center gap-2.5 text-left"
          aria-label={`${SITE.name} — home`}
        >
          <img
            src={logo}
            alt={`${SITE.name} logo`}
            width={512}
            height={512}
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="min-w-0 truncate font-display text-base font-semibold leading-tight text-cream sm:text-lg">
            Bachelor Baabulu
            <span className="ml-1 hidden text-gold sm:inline">Cookies</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <OrderButton size="sm" className="hidden lg:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-espresso/95 px-4 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="min-h-12 border-b border-cream/10 text-left font-display text-lg text-cream/90 transition-colors hover:text-gold"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <OrderButton className="mt-4 w-full" />
        </div>
      )}
    </header>
  );
}
