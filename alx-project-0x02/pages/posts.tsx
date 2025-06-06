import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-6 min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-red-600">Posts Page</h1>
        <p className="text-lg text-gray-700">Here is where posts will be displayed.</p>
      </main>
    </>
  );
}
