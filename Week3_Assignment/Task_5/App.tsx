import React from 'react';
import { LoginForm } from './LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <LoginForm onSuccess={(email) => console.log('Login successful for:', email)} />
    </div>
  );
}

export default App;