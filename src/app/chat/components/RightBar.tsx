import axios from "axios";
import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
const RightBar = ({ recieverId }: { recieverId: string }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  const [chatArray, setChatArray] = useState<
    { Text: string; chatId: string; SenderId: string; RecieverId: string }[]
  >([]);
  const getSenderId = async () => {
    const body = (await axios.get("/api/finduserbyid")).data;
    setId(body.userId);
  };
  const fetchMessages = async () => {
    const response = await axios.post("/api/fetchMessages", { id, recieverId });
    await setChatArray(response.data.Texts);
    console.log(chatArray);
  };
  const sendMessage = async () => {
    console.log(id);
    if (message.trim() != "") {
      const response = await axios.post("/api/sendmessage", {
        message,
        id,
        recieverId,
      });
    }
    fetchMessages();
  };

  const user = async () => {
    if (recieverId !== "") {
      const { name } = (await axios.post("/api/finduserbyid", { recieverId }))
        .data;
      setName(name);
    }
    return name;
  };
  useEffect(() => {
    user();
    fetchMessages();
  }, [recieverId]);
  useEffect(() => {
    getSenderId();
  }, []);

  return (
    <section className="w-[70%] h-full flex flex-col ">
      <nav className="h-20 mx-8 border-b border-gray-500 flex items-center">
        <h1 className="text-3xl ubuntu font-semibold text-blue-950">{name}</h1>
      </nav>
      <article className="flex-grow">
        {chatArray.map((chat) => (
          <React.Fragment key={chat.chatId}>
            {id === chat.SenderId ? (
              <div className="w-full h-fit flex justify-start">
                <div className="w-fit max-w-lg bg-gray-200 px-2 py-1 rounded mx-8 my-1.5">
                  {chat.Text}
                </div>
              </div>
            ) : (
              <div className="w-full h-fit flex justify-end">
                <div className="w-fit max-w-lg bg-red-500 text-white px-2 py-1 rounded mx-8 my-1.5">
                  {chat.Text}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </article>
      <div className="h-20 border-t border-gray-500 mx-8 flex items-center justify-around">
        <div className="px-3 aspect-square rounded-3xl bg-gray-200 flex justify-center items-center text-lg">
          <i className="ri-emoji-sticker-fill text-blue-950 text-lg"></i>
        </div>
        <input
          className="w-4/5 bg-gray-200 px-2 py-2 rounded-2xl"
          placeholder="Send Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="px-3 aspect-square rounded-3xl bg-gray-200 flex justify-center items-center text-lg">
          <i className="ri-attachment-2 text-blue-950 text-lg"></i>
        </div>
        <div
          className="px-2.5 aspect-square rounded-full bg-red-500 flex justify-center items-center text-lg"
          onClick={sendMessage}
        >
          <i className="ri-send-plane-fill text-white text-xl"></i>
        </div>
      </div>
    </section>
  );
};

export default RightBar;
