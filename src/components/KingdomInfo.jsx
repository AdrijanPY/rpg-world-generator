export default function KingdomInfo({ kingdom }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-64 shadow-xl">
      <h2 className="text-xl font-bold mb-2">{kingdom.name}</h2>
      <ul className="text-sm">
        <li><strong>Einwohner:</strong> {kingdom.population}</li>
        <li><strong>Truppen:</strong> {kingdom.troops}</li>
        <li><strong>Gold:</strong> {kingdom.gold}</li>
        <li><strong>Ressourcen:</strong> {kingdom.resources.join(", ")}</li>
        <li><strong>Stabilität:</strong> {kingdom.stability} %</li>
      </ul>
    </div>
  );
}