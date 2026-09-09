// Uma academia da lista. As cores servem para o quadrado que faz o papel da logo.
export type Gym = {
  name: string;
  rating: number;
  distance: number;
  logoColor: string;
  initials: string;
  initialsColor: string;
};

// Lista única de academias: as duas seções da tela leem daqui.
export const gyms: Gym[] = [
  { name: "Academia Stylo Fitness", rating: 4.9, distance: 1.6, logoColor: "#2b2b2b", initials: "SF", initialsColor: "#e8b64c" },
  { name: "Academia Extreme", rating: 4.51, distance: 3.0, logoColor: "#111c3a", initials: "X", initialsColor: "#2fe0a6" },
  { name: "BJ FIT", rating: 4.83, distance: 3.4, logoColor: "#000000", initials: "BJ", initialsColor: "#f5c518" },
  { name: "Academia Templo Fitness", rating: 4.52, distance: 6.6, logoColor: "#fdf6e8", initials: "TF", initialsColor: "#c08a2e" },
  { name: "Academia Hard", rating: 4.62, distance: 6.6, logoColor: "#5c5c66", initials: "AH", initialsColor: "#ffffff" },
];
