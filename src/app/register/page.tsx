"use client";
import "remixicon/fonts/remixicon.css";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/register", {
        name,
        userName,
        password,
        email,
      });

      if (response.data.success) {
        router.push("/login");
      } else {
        setError("Registration failed. Please check your information.");
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
        className="flex flex-col items-center h-4/5 w-1/3 justify-around gap-8 px-10 py-12 bg-white rounded-xl shadow-2xl"
      >
        <div className="flex flex-col gap-4 w-full items-center">
          <h1 className="text-center font-semibold text-4xl mb-4 text-blue-950 ubuntu">
            Register
          </h1>
          <input
            type="text"
            className="border border-gray-400 px-3 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            required
          />
          <input
            type="text"
            className="border border-gray-400 px-3 py-2 w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Create a unique username"
            required
          />
          <input
            type="text"
            className="border border-gray-400 px-3 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              className="border border-gray-400 px-3 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a Strong Password"
              required
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <i className="ri-eye-off-fill"></i>
              ) : (
                <i className="ri-eye-fill"></i>
              )}
            </span>
          </div>
          <input
            type="password"
            className="border border-gray-400 px-3 py-2 w-full"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-500 w-full text-white px-4 py-2 rounded ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="text-gray-400 text-sm">
          Already registered?{" "}
          <Link href="/login" className="text-blue-600">
            Log in here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
