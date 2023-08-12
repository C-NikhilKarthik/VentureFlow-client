import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  user: User;
  login: Login;
};

type User = {
  email: string;
  username: string;
  password: string;
  dateOfBirth: string;
};

type Login = {
  email: string;
  password: string;
};

const initialState = {
  user: {
    email: "",
    username: "",
    password: "",
    dateOfBirth: "",
  } as User,
  login: {
    email: "",
    password: "",
  } as Login,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    setDOB: (state, action: PayloadAction<string>) => {
      state.user.dateOfBirth = action.payload;
    },
    setLoginEmail: (state, action: PayloadAction<string>) => {
      state.login.email = action.payload;
    },
    setLoginPassword: (state, action: PayloadAction<string>) => {
      state.login.password = action.payload;
    },
  },
});

export const {
  setUserName,
  setPassword,
  setEmail,
  setDOB,
  setLoginEmail,
  setLoginPassword,
} = auth.actions;

export default auth.reducer;
