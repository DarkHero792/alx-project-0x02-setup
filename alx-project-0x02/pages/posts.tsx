import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center gap-6 min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-red-600">Posts List</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}

// ✅ Static generation using getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
