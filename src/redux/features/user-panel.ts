import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserPanel{
    isMuted: boolean;
    isDeafened: boolean;
}

export const initialState: UserPanel = {
    isMuted: false,
    isDeafened: false
}

export const userPanel = createSlice({
    name:"UserPanel",
    initialState,
    reducers: {
        muteToggle: (state) => {
            state.isMuted = !state.isMuted;
        },
        deafenToggle: (state) => {
            state.isDeafened = !state.isDeafened;
        }
    }
})

export const { muteToggle, deafenToggle } = userPanel.actions;
export default userPanel.reducer;