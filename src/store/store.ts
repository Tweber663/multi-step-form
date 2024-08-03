import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        formRedcuer: formSlice
    }
})


//addDispatch changes to: 
export const useAppDispatch: () => typeof store.dispatch=useDispatch
//useSelector changes to: 
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
