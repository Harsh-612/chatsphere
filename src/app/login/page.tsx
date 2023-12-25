"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Register = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/login", {
        userName,
        password,
      });

      if (response.data.success) {
        router.push("/chat");
      } else {
        setError("Login failed. Please check your credentials.");
      }

      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-blue-200">
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center h-2/3 w-1/3 justify-around gap-8 px-10 py-12 bg-white rounded-xl shadow-2xl"
      >
        <div className="flex flex-col gap-4 w-full items-center">
          <h1 className="text-center font-semibold text-4xl mb-4 text-blue-950 ubuntu">
            Log in
          </h1>
          <div className="flex flex-col w-full items-start">
            <label htmlFor="username" className="text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-400 px-3 py-2 w-full"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="flex flex-col w-full items-start">
            <label htmlFor="password" className="text-gray-600 mb-1">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="border border-gray-400 px-3 py-2 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-500 w-full text-white px-4 py-2 rounded ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
        <p className="text-gray-400 text-sm">
          Not registered?{" "}
          <Link href="/register" className="text-blue-600">
            Register here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
