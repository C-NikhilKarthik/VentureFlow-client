"use client"
import React from "react";
import "./login.css";
import { useRouter } from 'next/navigation'
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { useToasts } from "@/components/toasts";
import { sendReqToServer } from "@/api/useAxios";
import { USER, axios } from "@/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setLoginEmail, setLoginPassword } from "@/redux/features/auth-slice";

export default function Page() {

  const [notify] = useToasts();
  const router = useRouter()

  const Data = useSelector((state: RootState) => state.authReducer.login);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (key: string, value: string) => {
    switch (key) {
      case "email":
        dispatch(setLoginEmail(value));
        break;
      case "password":
        dispatch(setLoginPassword(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const { response, error } = await sendReqToServer({
        axiosInstance: axios,
        url: USER.login,
        method: "POST",
        requestConfig: {
          "email":Data.email,
          "password":Data.password
        },
      });
      if (response) {
        notify({
          type: "SUCCESS",
          message: "Login Successful",
        });

        localStorage.setItem('token', response.body.token);
        // router.push("/channels/me")
      }
    } catch (error) {
      notify({
        type: "ERROR",
        message: "Login failed!",
      })
    }
  };

  return (
    <div className="card">
      <div className="text-3xl font-semibold text-slate-200">
        Login to your Account
      </div>
      <div className="text-xs text-slate-500">Login using Social networks</div>
      <div className="gap-4 -mt-2 w-fit flex text-2xl text-slate-600">
        <BsFacebook style={{color:"#4267B2"}} className="cursor-pointer" />
        <FcGoogle className="cursor-pointer"/>
        <BsGithub style={{color:"#e7f2f4"}} className="cursor-pointer"/>
      </div>
      <div className="bg-slate-600 h-[2px] my-6 w-full flex items-center justify-center">
        <label className="bg-[#191c29] text-xs text-slate-600 px-2">OR</label>
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required type="email"
          onChange={(e)=>handleChange("email",e.target.value)}
          aria-required
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Email
        </label>
        <FaUser className="absolute pointer-events-none right-2 text-slate-400"/>
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required type="password"
          onChange={(e)=>handleChange("password",e.target.value)}
          aria-required
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Password
        </label>
        <MdPassword className="absolute pointer-events-none right-2 text-slate-400"/>
      </div>

      <button className="w-full rounded bg-[#6583aa] text-slate-200 py-3 font-semibold text-xl" onClick={handleSubmit} type="submit">Login</button>
    </div>
  );
}
