import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Introduction', content: 'This project demonstrates a reusable Card component in Next.js.' },
    { title: 'ALX Project', content: 'You\'re building a multi-page application with clean UI and reusable components.' }
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-6 min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-green-600">Welcome to the Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
