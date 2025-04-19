export default function MapGrid({ map, kingdoms, onSelectKingdom }) {
  return (
    <div className="grid grid-cols-[repeat(20,1.5rem)] grid-rows-[repeat(20,1.5rem)]">
      {map.flat().map((tile, i) => {
        const kingdom = kingdoms.find((k) => k.x === tile.x && k.y === tile.y);
        return (
          <div
            key={i}
            onClick={() => kingdom && onSelectKingdom(kingdom)}
            className={\`w-6 h-6 border border-gray-700 flex items-center justify-center text-xs cursor-pointer \${tile.color}\`}
          >
            {kingdom ? "🏰" : ""}
          </div>
        );
      })}
    </div>
  );
}