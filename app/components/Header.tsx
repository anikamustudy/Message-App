// components/Header.js
export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <div className="text-2xl font-bold">julie</div>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Search</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Blog</a>
          <a href="#" className="hover:underline">Subscriptions</a>
        </nav>
      </header>
    );
  }
  