import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';
import userPanel from './features/user-panel';
import userPanelCustom from './features/userpanel-custom';
export const store = configureStore({
    reducer:{
        authReducer,
        userPanel,
        userPanelCustom,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;