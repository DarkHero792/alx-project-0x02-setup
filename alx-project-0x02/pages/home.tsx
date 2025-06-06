import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600">Welcome to the Home Page</h1>
      </main>
    </>
  );
}
