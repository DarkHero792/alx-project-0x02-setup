import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <p className="text-sm text-gray-500">Posted by User #{userId}</p>
    </div>
  );
};

export default PostCard;
