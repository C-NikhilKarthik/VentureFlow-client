import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserPanel {
  isMuted: boolean;
  isDeafened: boolean;
}

export const initialState: UserPanel = {
  isMuted: false,
  isDeafened: false,
};

export const userPanel = createSlice({
  name: "UserPanel",
  initialState,
  reducers: {
    muteToggle: (state) => {
      state.isMuted = !state.isMuted;
    },
    deafenToggle: (state) => {
      state.isDeafened = !state.isDeafened;
    },
    setMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    setDeafened: (state, action) => {
      state.isDeafened = action.payload;
    },
  },
});

export const { muteToggle, deafenToggle, setDeafened, setMuted } =
  userPanel.actions;
export default userPanel.reducer;
