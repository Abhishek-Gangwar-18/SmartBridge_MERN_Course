import React, { useState } from 'react';

export function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <label 
          htmlFor="textInput" 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your text:
        </label>
        <input
          id="textInput"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Start typing..."
        />
      </div>
      <div className="bg-white p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-500">Preview:</p>
        <p className="mt-1 text-lg">
          {text || <span className="text-gray-400 italic">Type something to see it appear here</span>}
        </p>
      </div>
    </div>
  );
}