import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
