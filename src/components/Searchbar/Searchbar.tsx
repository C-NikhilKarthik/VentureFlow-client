import React from "react";
import "./search.css";
import {BiSearchAlt2} from 'react-icons/bi'

export default function Searchbar() {
  return (
    <input
      className="relative bg-tertiary h-6 w-36 focus:w-60 text-sm text-slate-400 top-0 rounded left-0 py-1 transition-[width] duration-300 px-2 focus:border-none focus:outline-none flex items-center"
      placeholder="Search"
    >
        {/* <BiSearchAlt2 className="absolute right-0"/> */}
    </input>
  );
}
