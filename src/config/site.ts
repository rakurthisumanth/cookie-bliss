/** Single source of truth for brand + contact configuration. */
export const WHATSAPP_NUMBER = "919999999999"; // country code + number, digits only

export const SITE = {
  name: "Bachelor Baabulu Cookies",
  tagline: "Baked with Passion. Made for Everyone.",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
} as const;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Cookies", id: "cookies" },
  { label: "Combo", id: "combo" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
] as const;
