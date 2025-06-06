import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">
          Welcome
        </Link>
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
