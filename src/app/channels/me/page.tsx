"use client"
import React from 'react'
import { FaDiscord, FaHashtag } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdInbox, MdPeopleAlt } from "react-icons/md";
import ChannelSelect from '@/components/ChannelSelect/ChannelSelect';
import { BiSolidConversation } from 'react-icons/bi';
import { IoAddOutline } from 'react-icons/io5';
import UserPanel from '@/components/UserPanel';
import TokenExtraction from '@/api/utils/TokenExtraction';
export default function Page() {

  TokenExtraction()

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
        <UserPanel/>
        </div>
        <div className="flex flex-col flex-auto h-full">
          <div className="flex flex-col h-full"></div>
          {/* <div className="h-[68px] px-4">
            <div className="w-full rounded p-3 bg-message"></div>
          </div> */}
        </div>
        <div className="absolute top-0 py-2 h-12 px-4 shadow-md flex justify-between w-full">
          <div></div>
          <div className="text-secondary text-2xl flex gap-4 items-center">
            <BiSolidConversation/>
            <div className="h-full w-[1px] bg-secondary-light"/>
            <MdInbox />
            <AiFillQuestionCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
