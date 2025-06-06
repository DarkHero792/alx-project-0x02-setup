import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-6 min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-green-600">Welcome to the Home Page</h1>
        
        <Card 
          title="Introduction" 
          content="This project demonstrates a reusable Card component in Next.js." 
        />
        <Card 
          title="ALX Project" 
          content="You're building a multi-page application with clean UI and reusable components." 
        />
      </main>
    </>
  );
}
