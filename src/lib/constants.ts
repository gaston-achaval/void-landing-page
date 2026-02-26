// Número de WhatsApp con código de país (sin + ni espacios). Ej: 5491112345678
const WHATSAPP_NUMBER = "5491124051464";
const WHATSAPP_MESSAGE = "Hola !\nMe interesa el producto, se podrían contactar conmigo para más info?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
