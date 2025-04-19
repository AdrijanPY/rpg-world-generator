import generateName from "./nameGen";
import biomes from "../data/biomes";

export default function generateWorld({ numKingdoms }) {
  const size = 20;
  const map = [];

  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < size; x++) {
      const biome = biomes[Math.floor(Math.random() * biomes.length)];
      row.push({ ...biome, x, y });
    }
    map.push(row);
  }

  const kingdoms = [];
  for (let i = 0; i < numKingdoms; i++) {
    let x, y;
    do {
      x = Math.floor(Math.random() * size);
      y = Math.floor(Math.random() * size);
    } while (kingdoms.find(k => k.x === x && k.y === y));

    kingdoms.push({
      name: generateName(),
      x,
      y,
      population: Math.floor(Math.random() * 900000) + 100000,
      troops: Math.floor(Math.random() * 50000) + 1000,
      gold: Math.floor(Math.random() * 100000),
      stability: Math.floor(Math.random() * 51) + 50,
      resources: ["Holz", "Eisen", "Stein", "Magie"].filter(() => Math.random() > 0.5),
    });
  }

  return { map, kingdoms };
}