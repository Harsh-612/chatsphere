"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const LeftBar = ({
  setRecieverId,
}: {
  setRecieverId: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [search, setSearch] = useState("");
  const [userArray, setUserArray] = useState([]);
  const [id, setId] = useState("");
  const getId = async () => {
    try {
      const senderId = (await axios.get("/api/finduserbyid")).data.id;
      setId(senderId);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const findUser = async () => {
    try {
      if (search.trim() !== "") {
        const users = await axios.post("/api/finduser", {
          search,
        });
        setUserArray(users.data);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    findUser();
  }, [search]);
  useEffect(() => {
    getId();
  }, []);

  return (
    <section className="w-[25%] h-full flex flex-col bg-blue-50">
      <div className="w-full h-[80px] flex justify-center items-center bg-sky-100">
        <input
          type="text"
          className="border border-gray-500 rounded-full w-10/12 px-3 py-1.5"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="w-full bg-sky-100">
        {search
          ? userArray.map((user) => (
              <div
                key={user[2]}
                className="border-t px-2 py-1 h-10 flex items-center"
                onClick={() => {
                  setRecieverId(user[2]);
                }}
              >
                {user[0]}(@{user[1]})
              </div>
            ))
          : ""}
      </div>
      <div></div>
    </section>
  );
};

export default LeftBar;
