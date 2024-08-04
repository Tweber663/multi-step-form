import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import counterSlice from "./features/counterSlice";
import formVerifySlice from "./features/formVerifySlice";

export const store = configureStore({
    reducer: {
        formRedcuer: formSlice, 
        counterReducer: counterSlice, 
        verifyRedcuer: formVerifySlice,
    }
})


//addDispatch changes to: 
export const useAppDispatch: () => typeof store.dispatch=useDispatch
//useSelector changes to: 
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
