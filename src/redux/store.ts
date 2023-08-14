import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import userPanel from "./features/user-panel";
import userPanelCustom from "./features/userpanel-custom";
import userDetails from "./features/user-details";
import muteDeafenMiddleware from "./middleware/muteDeafenMiddleware";

export const store = configureStore({
  reducer: {
    authReducer,
    userPanel,
    userPanelCustom,
    userDetails,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(muteDeafenMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
