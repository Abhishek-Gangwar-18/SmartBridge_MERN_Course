import React from 'react';
import { TextUpdater } from './TextUpdater';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Text Updater</h1>
        <TextUpdater />
      </div>
    </div>
  );
}

export default App;