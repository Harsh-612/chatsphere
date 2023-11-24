import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <main className="container relative w-screen h-screen flex flex-col justify-center items-center gap-8">
      <section className="ubuntu text-5xl">Let's Talk</section>
      <div className="flex gap-7 Kanit font-medium">
        <Link href="/login">
          <button className="bg-blue-400 text-white px-2 py-1 rounded text-xl w-28">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-blue-400 text-white px-2 py-1 rounded text-xl w-28">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
