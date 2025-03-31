import React, { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-gray-700">Text: {text}</p>
    </div>
  );
}
