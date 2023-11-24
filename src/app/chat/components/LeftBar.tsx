"use client";
import React from "react";

const LeftBar = () => {
  return (
    <section className="w-[30%] h-full flex flex-col bg-blue-50">
      <div className="w-full h-[80px] flex justify-center items-center opacity-75">
        <input
          type="text"
          className="border border-gray-500 rounded-full w-10/12 px-3 py-1.5"
        />
      </div>
    </section>
  );
};

export default LeftBar;
