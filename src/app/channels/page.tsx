import ChannelSelect from "@/components/ChannelSelect/ChannelSelect";
import React from "react";
import { FaDiscord, FaHashtag } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdInbox, MdPeopleAlt } from "react-icons/md";
import { BsFillPinAngleFill, BsBellSlashFill } from "react-icons/bs";
import Searchbar from "@/components/Searchbar/Searchbar";

export default function page() {
  return (
    <div className="h-screen text-primary bg-primary relative md:flex w-full">
      <div className="absolute flex-col gap-2 flex md:hidden items-center bg-slate-950 p-3 h-full">
        <ChannelSelect Icon={FaDiscord} />
        <div className="w-8 h-[2px] rounded bg-secondary"></div>
      </div>

      <div className="md:flex md:flex-col md:gap-2 hidden md:items-center bg-tertiary p-3 w-min h-full ">
        <ChannelSelect Icon={FaDiscord} />
        <div className="w-8 h-[2px] rounded bg-secondary"></div>
      </div>

      <div className="flex relative w-full">
        <div className="md:flex hidden bg-secondary p-4 w-60"></div>
        <div className="flex flex-col flex-auto h-full">
          <div className="flex flex-col h-full"></div>
          <div className="h-[68px] px-4">
            <div className="w-full rounded p-3 bg-message"></div>
          </div>
        </div>
        <div className="absolute top-0 h-12 px-2 shadow-md flex justify-between w-full">
          <div></div>
          <div className="text-secondary text-xl flex gap-5 items-center">
            <FaHashtag />
            <BsBellSlashFill />
            <BsFillPinAngleFill />
            <MdPeopleAlt />
            <Searchbar />
            <MdInbox />
            <AiFillQuestionCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
