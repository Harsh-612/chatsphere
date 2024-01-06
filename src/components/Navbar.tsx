// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-8 h-20 flex items-center ubuntu border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-slate-800 text-2xl font-bold">ChatSphere</div>
          <div className="flex gap-12 text-xl">
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/login" passHref>
              Login
            </Link>
            <Link href="/register" passHref>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
