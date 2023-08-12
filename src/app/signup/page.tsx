"use client";
import React, { useState } from "react";
import "./register.css";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import Link from "next/link";
import { USER, axios } from "../../api";
import { sendReqToServer } from "../../api/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useToasts } from "@/components/toasts";
import Datepicker from "tailwind-datepicker-react";
import {
  setUserName,
  setPassword,
  setEmail,
  setDOB,
} from "@/redux/features/auth-slice";
export default function Page() {
  
  const options = {
    title: "Select DOB",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background:
        "bg-gray-900/50 w-full absolute bottom-10 aspect-[6/7] left-0 text-slate-200 border-slate-600 border-2 backdrop-blur dark:bg-gray-900/80",
      todayBtn: "bg-slate-500",
      clearBtn: "",
      icons:
        "bg-transparent text-secondary hover:bg-slate-400/30 hover:text-slate-300",
      text: "text-slate-300 hover:bg-slate-400/30 hover:text-slate-300",
      disabledText:
        "bg-slate-800/20 text-slate-400 hover:bg-slate-800/30 hover:text-slate-200",
      input:
        "text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-3 pl-10",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12 relative",
    defaultDate: new Date(),
    language: "en",
  };

  const Data = useSelector((state: RootState) => state.authReducer.user);
  const dispatch = useDispatch<AppDispatch>();

  const [notify] = useToasts();

  const handleChange = (key: string, value: string) => {
    switch (key) {
      case "username":
        dispatch(setUserName(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "dateOfBirth":
        dispatch(setDOB(value));
        break;
      default:
        break;
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const handleSubmit = async () => {
    try {
      const { response, error } = await sendReqToServer({
        axiosInstance: axios,
        url: USER.create,
        method: "POST",
        requestConfig: {
          data: {
            userName: Data.username,
            password: Data.password,
            DOB: Data.dateOfBirth,
            email: Data.email,
          },
        },
      });
      if (response) {
        notify({
          type: "SUCCESS",
          message: "Account Created",
        });
      }
    } catch (error) {
      notify({
        type: "ERROR",
        message: "Sign Up failed !",
      });
    }
  };

  return (
    <div className="card">
      <div className="text-3xl font-semibold text-slate-200">
        Create an Account
      </div>
      <div className="text-xs text-slate-500">
        Register using Social networks
      </div>
      <div className="gap-4 -mt-2 w-fit flex text-2xl text-slate-600">
        <BsFacebook style={{ color: "#4267B2" }} className="cursor-pointer" />
        <FcGoogle className="cursor-pointer" />
        <BsGithub style={{ color: "#e7f2f4" }} className="cursor-pointer" />
      </div>
      <div className="bg-slate-600 h-[2px] my-6 w-full flex items-center justify-center">
        <label className="bg-[#191c29] text-xs text-slate-600 px-2">OR</label>
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required
          type="text"
          onChange={(e) => handleChange("username", e.target.value)}
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Username
        </label>
        <FaUser className="absolute pointer-events-none right-2 text-slate-400" />
      </div>
      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required
          type="email"
          aria-required
          onChange={(e) => handleChange("email", e.target.value)}
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Email
        </label>
        <FaUser className="absolute pointer-events-none right-2 text-slate-400" />
      </div>

      <div className="w-full relative flex items-center">
        <input
          className="text-slate-300 focus:outline-transparent peer bg-slate-500/50 rounded border-none w-full p-2 pt-4"
          required
          type="password"
          onChange={(e) => handleChange("password", e.target.value)}
        ></input>
        <label className="peer-focus:-translate-y-full peer-valid:text-xs peer-valid:-translate-y-full peer-focus:text-xs peer-focus:duration-300 peer-focus:transition-all transition-all duration-300 text-sm text-slate-400 absolute left-2">
          Password
        </label>
        <MdPassword className="absolute pointer-events-none right-2 text-slate-400" />
      </div>

      <Datepicker
        options={options}
        show={show}
        onChange={(e) => handleChange("dateOfBirth", e.toString())}
        setShow={handleClose}
      />

      <div className="w-full flex justify-start text-slate-400">
        <Link href="/login" className="text-xs pl-2 -mt-2 w-fit">
          Already have an Account?
        </Link>
      </div>

      <button
        className="w-full rounded bg-[#6583aa] text-slate-200 py-3 font-semibold text-xl"
        onClick={handleSubmit}
        type="submit"
      >
        Register
      </button>
    </div>
  );
}
