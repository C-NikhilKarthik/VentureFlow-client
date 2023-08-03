'use client'

import ChannelSelect from "@/components/ChannelSelect/ChannelSelect";
import React, { useState } from "react";
import { FaDiscord, FaHashtag } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { MdInbox, MdPeopleAlt } from "react-icons/md";
import { BsFillPinAngleFill, BsBellSlashFill, BsMicMuteFill, BsFillMicFill } from "react-icons/bs";
import Searchbar from "@/components/Searchbar/Searchbar";

export default function Page() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="h-screen text-primary bg-secondary relative md:flex w-full">
      {/* for mobile devices */}
      <div className="absolute flex-col gap-2 flex md:hidden items-center bg-primary p-3 h-full">
        <ChannelSelect Icon={FaDiscord} active={true} />
        <div className="w-8 h-[2px] rounded flex flex-col bg-secondary"></div>
      </div>
      {/* for laptops and PCs */}
      <div className="md:flex md:flex-col md:gap-2 hidden md:items-center bg-primary p-3 w-min h-full ">
        <ChannelSelect Icon={FaDiscord} active={true} />
        <div className="w-8 h-[2px] rounded flex flex-col bg-secondary"></div>
        <ChannelSelect Icon={IoAddOutline} active={false} />
      </div>

      <div className="flex relative w-full">
        <div className="md:flex hidden md:flex-col bg-tertiary w-60">
          <div className="flex-auto"></div>
          <div className="bg-profile h-[52px] w-full p-2 flex items-center justify-between">
            <div></div>
            <div>
              <div onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <BsMicMuteFill /> : <BsFillMicFill />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-auto h-full">
          <div className="flex flex-col h-full"></div>
          {/* <div className="h-[68px] px-4">
            <div className="w-full rounded p-3 bg-message"></div>
          </div> */}
        </div>
        <div className="absolute text-primary top-0 h-12 px-2 shadow-md flex justify-between w-full">
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
