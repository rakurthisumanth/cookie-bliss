import { whatsappUrl, genericEnquiry } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(genericEnquiry)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_oklch(0.24_0.055_44/0.5)] transition-transform duration-300 hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.58-1.5-1.88-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.42 0 1.43 1.04 2.8 1.19 3 .15.2 2.05 3.2 5.02 4.37 2.47.97 2.97.78 3.5.73.53-.05 1.72-.7 1.96-1.38.25-.68.25-1.25.18-1.37-.08-.13-.28-.2-.58-.35zM12 22a9.9 9.9 0 0 1-5.03-1.36L2 22l1.4-4.87A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
      </svg>
      <span className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap rounded-full bg-espresso px-3 py-1.5 text-xs font-medium text-cream opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        Order on WhatsApp
      </span>
    </a>
  );
}
