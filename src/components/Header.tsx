import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV_LINKS, SITE } from "@/config/site";
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
          ? "border-b border-cream/10 bg-espresso/90 shadow-[0_12px_40px_-20px_oklch(0.1_0.04_42/0.7)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:py-6">
        <button
          type="button"
          onClick={() => go("home")}
          className="flex min-w-0 items-center gap-3.5 text-left sm:gap-4"
          aria-label={`${SITE.name} — home`}
        >
          <img
            src={logo}
            alt={`${SITE.name} logo`}
            width={512}
            height={512}
            className="h-16 w-16 shrink-0 object-contain drop-shadow-[0_8px_18px_oklch(0.17_0.04_42/0.45)] sm:h-[4.75rem] sm:w-[4.75rem] lg:h-20 lg:w-20"
          />
          <span className="min-w-0 truncate font-display text-xl font-semibold leading-tight text-cream sm:text-2xl lg:text-[1.85rem]">
            Bachelor Baabulu
            <span className="ml-1.5 hidden text-gold sm:inline">Cookies</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-[0.95rem] font-medium tracking-wide text-cream/85 transition-colors hover:text-gold"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-espresso/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => go(l.id)}
                className="min-h-14 border-b border-cream/10 text-left font-display text-xl text-cream/90 transition-colors hover:text-gold"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
