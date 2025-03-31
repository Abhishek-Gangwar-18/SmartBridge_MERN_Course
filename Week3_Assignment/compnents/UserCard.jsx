import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

interface UserCardProps {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  role?: string;
  imageUrl?: string;
}

export function UserCard({ 
  name, 
  email, 
  phone = "+1 (555) 123-4567", 
  location = "San Francisco, CA", 
  website = "example.com",
  role = "Software Engineer",
  imageUrl 
}: UserCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto transform transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-6">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="h-20 w-20 rounded-full object-cover border-4 border-blue-50"
          />
        ) : (
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center border-4 border-blue-50">
            <span className="text-white text-2xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-blue-600 font-medium">{role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3 text-gray-600">
          <Mail size={18} className="text-blue-500" />
          <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
            {email}
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Phone size={18} className="text-blue-500" />
          <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
            {phone}
          </a>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <MapPin size={18} className="text-blue-500" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <Globe size={18} className="text-blue-500" />
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            {website}
          </a>
        </div>
      </div>
    </div>
  );
}
