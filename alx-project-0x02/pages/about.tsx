import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-purple-600">About This Project</h1>
      </main>
    </>
  );
}
