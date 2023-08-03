import React from 'react';
import { FunctionComponent } from "react";

interface ChannelProps {
  Icon: React.ElementType;
  active: boolean;
}

const ChannelSelect: FunctionComponent<ChannelProps> = ({ Icon, active }) => {
  return (
    <div className={`bg-tertiary cursor-pointer flex justify-center items-center w-min aspect-square h-12 mask-1 ${active ? 'active hover:bg-[#5964f2] text-slate-200' : 'text-primary-green hover:bg-primary-green hover:text-primary'}`}>
      {Icon && <Icon className={` text-3xl ${active ? 'active-icon'  : ''}`} />}
    </div>
  );
}

export default ChannelSelect;
