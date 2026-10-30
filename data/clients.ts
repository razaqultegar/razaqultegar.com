export type Client = {
  name: string;
  logo: string;
  // Round/tall emblems look tiny next to wordmarks at the same height,
  // and each emblem file has different built-in padding.
  size?: "md" | "lg";
};

export const clients: Client[] = [
  { name: "Pertamina EP", logo: "/clients/pertamina-ep.svg" },
  { name: "Badan Intelijen Negara", logo: "/clients/bin.svg", size: "lg" },
  {
    name: "Tentara Nasional Indonesia - Angkatan Darat",
    logo: "/clients/tni-ad.svg",
    size: "lg",
  },
  { name: "Perhimpunan Advokat Indonesia", logo: "/clients/peradi.png" },
  { name: "Ikatan Dokter Indonesia", logo: "/clients/idi.png", size: "md" },
];
