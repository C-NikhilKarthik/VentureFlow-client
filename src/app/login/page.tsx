import React from "react";
import "./login.css";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";

export default function page() {
  return (
    <div className="card">
      <div className="text-3xl font-semibold text-slate-200">
        Login to your Account
      </div>
      <div className="text-xs text-slate-500">Login using Social networks</div>
      <div className="gap-4 -mt-2 w-fit flex text-2xl text-slate-600">
        <BsFacebook className="cursor-pointer" />
        <FcGoogle className="cursor-pointer"/>
        <BsGithub className="cursor-pointer"/>
      </div>
      <div className="bg-slate-600 h-[2px] my-6 w-full flex items-center justify-center">
        <label className="bg-[#191c29] text-xs text-slate-600 px-2">OR</label>
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required type="text"
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Username
        </label>
        <FaUser className="absolute pointer-events-none right-2 text-slate-400"/>
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required type="password"
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Password
        </label>
        <MdPassword className="absolute pointer-events-none right-2 text-slate-400"/>
      </div>

      <button className="w-full rounded bg-violet-900 text-slate-200 py-3 font-semibold text-xl" type="submit">Login</button>
    </div>
  );
}
