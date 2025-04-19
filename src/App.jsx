import { useState } from "react";
import SettingsPanel from "./components/SettingsPanel";
import MapGrid from "./components/MapGrid";
import KingdomInfo from "./components/KingdomInfo";
import generateWorld from "./utils/worldGen";

export default function App() {
  const [settings, setSettings] = useState(null);
  const [world, setWorld] = useState(null);
  const [selectedKingdom, setSelectedKingdom] = useState(null);

  const handleGenerate = (config) => {
    setSettings(config);
    const newWorld = generateWorld(config);
    setWorld(newWorld);
    setSelectedKingdom(null);
  };

  return (
    <div className="p-4">
      {!world ? (
        <SettingsPanel onGenerate={handleGenerate} />
      ) : (
        <>
          <button
            className="mb-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => setWorld(null)}
          >
            Neue Welt generieren
          </button>
          <div className="flex gap-4">
            <MapGrid
              map={world.map}
              kingdoms={world.kingdoms}
              onSelectKingdom={setSelectedKingdom}
            />
            {selectedKingdom && <KingdomInfo kingdom={selectedKingdom} />}
          </div>
        </>
      )}
    </div>
  );
}