"use client";
import React, { useState } from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
const page = () => {
  const [recieverId, setRecieverId] = useState("");
  return (
    <main className="relative w-screen h-screen flex">
      <LeftBar setRecieverId={setRecieverId} />
      <RightBar recieverId={recieverId} />
    </main>
  );
};

export default page;
