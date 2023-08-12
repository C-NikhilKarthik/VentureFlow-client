import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserDetails{
    UserName: string;
    Email: string;
}

export const initialState: UserDetails = {
    UserName: "",
    Email: "",
}

export const userDetails = createSlice({
    name:"userDetails",
    initialState,
    reducers: {
        setUserName: (state,action) =>{
            state.UserName = action.payload;
        },
        setEmail: (state,action) =>{
            state.Email = action.payload;
        },
    }

});

export const {setEmail,setUserName} = userDetails.actions;
export default userDetails.reducer;