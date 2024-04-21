import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/events" className="hover:text-gray-400">
                Events
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-gray-400">
                Search
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
