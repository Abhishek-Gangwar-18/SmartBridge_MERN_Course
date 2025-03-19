import React, { useState, FormEvent } from 'react';
import { Button } from './Button';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Submit Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="textInput" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter Text
            </label>
            <input
              id="textInput"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Type something..."
            />
          </div>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </form>

        <div className="mt-8 space-y-4">
          <Button onClick={() => console.log('Regular button clicked')}>
            Click Me
          </Button>
          <Button variant="secondary" className="ml-4">
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;