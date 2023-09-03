import { useState } from "react";
import chat from "../../../public/img/chat.svg";
import live from "../../../public/img/live.svg";
import message from "../../../public/img/message.svg";
import { AiOutlineMinus } from "react-icons/ai";

const LiveChat = () => {
  const [chatOn, setChatOn] = useState(false);
  return (
    <div
      className={`fixed bottom-[90px]  z-30  ${
        chatOn ? "right-4" : "right-10"
      }`}
    >
      {chatOn ? (
        <div className="relative h-[33rem] w-[22rem] rounded-md px-8 py-4 border shadow-sm shadow-slate-400 border-slate-300 bg-white">
          <div className="text-center text-slate-700 font-semibold mb-7">
            Help
          </div>
          <button
            className="absolute top-4 right-6  p-1 transition duration-150 delay-300 rounded hover:bg-yellow-100"
            onClick={() => setChatOn(false)}
          >
            <AiOutlineMinus />
          </button>
          <button className="flex gap-6 w-full py-5 px-6 rounded-sm border border-sky-100 shadow-md shadow-slate-300 mb-2">
            <img
              src={live}
              alt=""
              className="h-6 "
              style={{ fill: "#119cb8" }}
            />
            <p className="text-sm">Live Assistance</p>
          </button>
          <button className="flex gap-6 w-full py-5 px-6 rounded-sm border border-sky-100 shadow-md shadow-slate-300">
            <img src={message} alt="" className="h-6" />
            <p className="text-sm">Send us a message</p>
          </button>
        </div>
      ) : (
        <img
          src={chat}
          alt=""
          className="rounded-full border border-slate-200 cursor-pointer"
          onClick={() => setChatOn(true)}
        />
      )}
    </div>
  );
};

export default LiveChat;
