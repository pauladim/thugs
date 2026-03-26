import { programImages } from "./programImages";

export const programs = [
  {
    n: "01",
    icon: "🚭",
    bg: "drugfree.jpeg",
    images: programImages.drugFree20,
    t: "DrugFree'20",
    tags: ["Rehabilitation", "Recovery"],
    d: "Our flagship campaign to restore destinies by rehabilitating and supporting at least 20 individuals battling substance abuse. We provide pathways to healing, treatment access, and long-term sobriety because every life deserves a second chance.",
    points: [
      "Personalized recovery support plans",
      "Access to treatment and counseling",
      "Family reintegration assistance",
      "Ongoing mentorship for sustained sobriety",
    ],
  },
  {
    n: "02",
    icon: "🩺",
    bg: "treatment.jpeg", images: programImages.sudOutreach, t: "SUD Treatment Outreach",
    tags: ["Health", "Community"],
    d: "We conduct medical outreaches, screenings, and sensitization in high-risk areas like Akala, Mushin. We bring free health checks, addiction education, and immediate support to those on the streets.",
    points: [
      "Free medical screenings ",
      "Substance abuse awareness sessions",
      "Free therapy sessions",
      "Free doctor consultation",
    ],
  },
  {
    n: "03",
    icon: "👕",
    bg: "3merch.jpeg", images: programImages.merch, t: "Purchase DrugFree'20 Merch",
    tags: ["Support", "Awareness"],
    d: "Wear hope and stand with us. Our DrugFree'20 merchandise (shirts, caps, and more) isn't just apparel — it's a symbol of commitment to a drug-free life. Every purchase funds recovery programs and spreads the message that 'We Are Not Thugs'.",
    points: [
      "send us a Dm",
    ],
  },
  {
    n: "04",
    // icon: "📢",
    bg: "outreach.jpeg", images: programImages.community, t: "Community Sensitization & Awareness",
    tags: ["Education", "Prevention"],
    d: "We fight stigma through powerful storytelling, youth engagement, and public campaigns. By sharing real journeys of transformation and partnering with government agencies, we educate communities on the dangers of drug abuse and promote prevention, hope, and reintegration.",
    points: [
      "School & youth awareness programs",
      "Testimonies and success story sharing",
      "Anti-drug rallies and events",
    ],
  },
];
