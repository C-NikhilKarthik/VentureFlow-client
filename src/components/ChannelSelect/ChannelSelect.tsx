import React from 'react'
import { FunctionComponent } from "react"

interface ChannelProps{
    Icon: React.ElementType;
}
const ChannelSelect:FunctionComponent<ChannelProps> = ({Icon}) => {
  return (
    <div className="bg-[#313239] cursor-pointer flex justify-center items-center w-min aspect-square h-12 hover:bg-[#5964f2] mask-1">
        {Icon && <Icon className="text-slate-200 text-3xl"/>}
    </div>
  )
}

export default ChannelSelect
