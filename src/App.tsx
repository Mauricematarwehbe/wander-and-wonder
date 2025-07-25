import React, { useState } from 'react';
import Map from './components/Map';

export default function App() {
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { label: '🍜 Foodie', value: 'foodie' },
    { label: '🎨 Cultural', value: 'cultural' },
    { label: '☁️ Chill', value: 'chill' },
    { label: '🍸 Nightlife', value: 'nightlife' },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">🧭 Wander and Wonder</h1>

      <div className="flex gap-2 flex-wrap">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setMood(m.value)}
            className={`px-4 py-2 rounded-full text-white font-medium ${
              mood === m.value ? 'bg-blue-600' : 'bg-gray-500'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mood && (
        <p className="text-lg">
          🧠 You selected: <strong>{mood}</strong> — we’ll show areas that match!
        </p>
      )}

      <Map />
    </div>
  );
}
