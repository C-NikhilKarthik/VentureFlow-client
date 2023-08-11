import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState =  {
    value:AuthState
}


type User = {
    email:string,
    username:string,
    password:string,
    dateofbirth:string
}

type AuthState = {
    isAuth: boolean,
    username: string,
    uid:string,
    isModerator:boolean
}

const initialState = {
    value:{
        isAuth: false,
        username: "",
        uid:"",
        isModerator:false
    } as AuthState,
    user:{
        email:"",
        username:"",
        password:"",
        dateofbirth:""
    } as User,
} as InitialState;

export const auth = createSlice({
    name: "auth",
    initialState, 
    reducers: {
        logOut:() => {
            return initialState
        },
        logIn:(state,action:PayloadAction<string>)=>{
            return {
                value:{
                    isAuth:true,
                    username:action.payload,
                    uid:"qewrt345rtfds",
                    isModerator:false
                }
            }
        },
        // signup:(state,action:PayloadAction<User>) => {
        //     return {
        //         user:{
        //             email:action.payload.email,
        //             username:"",
        //             password:"",
        //             dateofbirth:""
        //         }
        //     }
        // }
    }
})


export const {logIn,logOut} = auth.actions;

export default auth.reducer;