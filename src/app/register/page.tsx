"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/register", {
        name,
        userName,
        password,
        email,
      });
      if (response.data.sucess) {
        router.push("/login");
      }
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center h-2/3 w-1/3 justify-around gap-8 px-4 py-8 bg-white rounded-xl shadow-2xl"
      >
        <div className="flex flex-col gap-4 w-full items-center">
          <h1 className="text-center font-semibold text-lg mb-4">Register</h1>
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 w-4/5"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Full Name"
          />
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 w-4/5"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Create a unique username"
          />
          <input
            type="text"
            className="border border-gray-400 px-2 py-1 w-4/5"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
          />
          <input
            type="password"
            className="border  border-gray-400 px-2 py-1 w-4/5"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter a Strong Password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 w-24 text-white px-2 py-1 rounded -mt-4"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Register;
