import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import image from "../../public/undraw_Chatting_re_j55r.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container flex items-center flex-grow">
        <div className="flex flex-col items-center justify-center w-2/3 gap-8 p-8">
          <section className="text-4xl font-semibold mb-4 text-center text-gray-800">
            Unlock Conversations,{" "}
            <span className="text-blue-500">Empower Connections</span>
          </section>
          <p className="text-base text-gray-600 text-center max-w-lg">
            Elevate your communication experience with seamless conversations
            and meaningful connections. Let's talk and create lasting
            connections together.
          </p>
          <div className="flex mt-8 space-x-4">
            <Link href="/login">
              <button className="px-4 py-2 text-xl font-medium bg-blue-500 text-white rounded w-32">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 text-xl font-medium bg-blue-500 text-white rounded w-32">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Image src={image} alt="Chatting" />
        </div>
      </main>
    </div>
  );
};

export default Home;
