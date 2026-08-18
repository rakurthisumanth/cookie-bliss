import { WHATSAPP_NUMBER, SITE } from "@/config/site";

const base = `Hi ${SITE.name},`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Opens WhatsApp with a pre-filled order message. */
export function openWhatsApp(productName?: string, price?: number) {
  const message = productName
    ? `${base} I would like to order ${productName}${price ? ` - ₹${price}` : ""}.`
    : `${base} I would like to know more about your cookies.`;
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

export const genericEnquiry = `${base} I would like to know more about your cookies.`;
