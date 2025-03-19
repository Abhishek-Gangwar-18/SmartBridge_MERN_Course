import React from 'react';
import { Mail, User } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <User className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <div className="flex items-center text-gray-600 mt-1">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-600">
              {email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4 mt-4">
        <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
} 