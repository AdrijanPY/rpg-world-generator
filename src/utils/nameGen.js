const syllables = [
  "An", "Bel", "Dor", "El", "Fal", "Gal", "Hel", "Ir", "Kor", "Lor",
  "Mor", "Nor", "Or", "Per", "Quel", "Ran", "Sar", "Tor", "Ur", "Vor"
];

export default function generateName() {
  const parts = [
    syllables[Math.floor(Math.random() * syllables.length)],
    syllables[Math.floor(Math.random() * syllables.length)] + (Math.random() > 0.5 ? "a" : "on")
  ];
  return parts.join("");
}