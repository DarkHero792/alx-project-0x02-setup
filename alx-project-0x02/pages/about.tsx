import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-4 min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-purple-600">About This Project</h1>

        <div className="flex gap-4 flex-wrap">
          <Button label="Small Rounded" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Full" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
