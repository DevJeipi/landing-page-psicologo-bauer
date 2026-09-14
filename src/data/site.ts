export const site = {
  name: "Bauer Psicólogo",
  personName: "Bauer",
  jobTitle: "Psicólogo clínico",
  url: "https://psicologobauer.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  whatsappPhone: "5551999999999",
  city: "Novo Hamburgo",
  region: "RS",
  country: "BR",
  clinic: "Zape Reequilíbrio",
  since: 1988,
  patientsServed: 8000,
  podcastName: "Inspire com Psicólogo Bauer",
  podcastYoutube: "https://www.youtube.com/@podcastinspire",
  ogImage: "/bauer-foto-1.avif",
  title:
    "Psicólogo Bauer em Novo Hamburgo | Terapia presencial na Zape Reequilíbrio e online",
  description:
    "Psicólogo clínico em Novo Hamburgo com prática desde 1988 e mais de 8.000 atendimentos. Consultas presenciais na Zape Reequilíbrio e terapia online para todo o Brasil. Apresentador do podcast Inspire com Psicólogo Bauer.",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${site.url}/`).href;
}
