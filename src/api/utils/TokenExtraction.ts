"use client"
import { useDispatch} from "react-redux";
import { AppDispatch} from "@/redux/store";
import { setStatus } from "@/redux/features/userpanel-custom";
import { setDeafened, setMuted } from "@/redux/features/user-panel";
import { setEmail, setUserName } from '@/redux/features/user-details';
import { sendReqToServer } from '../useAxios';
import {USER, axios} from '../index';

export default function TokenExtraction() {
  const dispatch = useDispatch<AppDispatch>();

  const GetUserDetails = async (token: string) => {
    try {
      const { response, error } = await sendReqToServer({
        axiosInstance: axios,
        url: USER.getUser.replace(":token", token),
        method: "GET",
      });
      if (response) {
        console.log(response.body.user);
        const UserDetailsObj = response.body.user;
        dispatch(setUserName(UserDetailsObj.Username));
        dispatch(setEmail(UserDetailsObj.Email));
        const results = response.body.user.settings;
        dispatch(setStatus(results.Status));
        dispatch(setMuted(results.isMuted));
        dispatch(setDeafened(results.isDeafened));
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) GetUserDetails(token);
  }
}


