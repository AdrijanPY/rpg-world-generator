import { useState } from "react";

export default function SettingsPanel({ onGenerate }) {
  const [numKingdoms, setNumKingdoms] = useState(10);

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">🌍 Neue Welt erstellen</h1>
      <label className="block mb-2">Anzahl der Königreiche: {numKingdoms}</label>
      <input
        type="range"
        min={1}
        max={50}
        value={numKingdoms}
        onChange={(e) => setNumKingdoms(parseInt(e.target.value))}
        className="w-full mb-4"
      />
      <button
        className="w-full py-2 bg-green-600 rounded hover:bg-green-700"
        onClick={() => onGenerate({ numKingdoms })}
      >
        Generieren
      </button>
    </div>
  );
}