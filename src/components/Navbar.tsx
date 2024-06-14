import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          OICT App
        </Link>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white">
            Login
          </Link>
          <Link href="/dashboard" className="text-white">
            Dashboard
          </Link>
          <Link href="/points-of-sale" className="text-white">
            Points of Sale
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
