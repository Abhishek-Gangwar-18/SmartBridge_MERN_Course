import React from 'react';
import { UserCard } from './UserCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="space-y-4">
        <UserCard 
          name="John Doe"
          email="john.doe@example.com"
        />
        <UserCard 
          name="Jane Smith"
          email="jane.smith@example.com"
        />
      </div>
    </div>
  );
}

export default App;