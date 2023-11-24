import React from "react";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
const page = () => {
  return (
    <main className="relative w-screen h-screen flex">
      <LeftBar />
      <RightBar />
    </main>
  );
};

export default page;
