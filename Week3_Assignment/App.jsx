import React from 'react';
import { TextUpdater } from './components/TextUpdater';
import { SimpleForm } from './components/SimpleForm';
import { UserCard } from './components/UserCard';
import { Button } from './components/Button';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">1. Text Updater</h2>
          <TextUpdater />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">2. Simple Form</h2>
          <SimpleForm />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">3. User Card</h2>
          <UserCard 
            name="hello world" 
            email="hello@example.com"
            role="Software Engineer"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">4. Custom Button</h2>
          <Button>Click Me!</Button>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">5. Login Form</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

export default App;
