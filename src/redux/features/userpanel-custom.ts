import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userCustom {
    isOpen: boolean,
    status:string,
    dropDown:boolean,
    dropDownValue:string
}

export const initialState: userCustom = {
    isOpen: false,
    status: "Online",
    dropDown:false,
    dropDownValue:"Online"
}

export const userCustomPanel = createSlice({
    name:"UserCustomPanel",
    initialState,
    reducers:{
        displayToggle:(state) => {
            state.isOpen = !state.isOpen;
        },
        setStatus:(state,action) => {
            state.status = action.payload;
        },
        dropDownToggle:(state) => {
            state.dropDown = !state.dropDown;
        }
    }
})

export const {displayToggle,setStatus,dropDownToggle} = userCustomPanel.actions;
export default userCustomPanel.reducer; 