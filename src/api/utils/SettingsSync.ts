"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { sendReqToServer } from "../useAxios";
import { USER, axios } from "../index";
import { setStatus } from "@/redux/features/userpanel-custom";
import { setDeafened, setMuted } from "@/redux/features/user-panel";

export default function SettingsSync() {
  const { Email } = useSelector((state: RootState) => ({
    Email: state.userDetails.Email,
  }));

  const dispatch = useDispatch<AppDispatch>();

  const GetSettings = async () => {
    try {
      const { response, error } = await sendReqToServer({
        axiosInstance: axios,
        url: USER.getUser.replace(":email", Email),
        method: "GET",
      });
      if (response) {
        const results = response.body.result;
        dispatch(setStatus(results.settings.Status));
        dispatch(setMuted(results.settings.isMuted));
        dispatch(setDeafened(results.settings.isDeafened));
      }
    } catch (err) {
      console.log(err);
    }
  };

  GetSettings();
}
