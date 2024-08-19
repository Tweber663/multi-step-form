import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import counterSlice from "./features/counterSlice";
import formVerifySlice from "./features/formVerifySlice";
import monthlyYearlySlicer from "./features/monthlyYearlySlicer";
import totalPriceSlicer from "./features/totalPriceSlicer";
import addOnsSlicer from "./features/addOnsSlicer";

export const store = configureStore({
    reducer: { 
        formRedcuer: formSlice, 
        counterReducer: counterSlice, 
        verifyRedcuer: formVerifySlice,
        monthlyYearly: monthlyYearlySlicer,
        totalCost: totalPriceSlicer, 
        AddOns: addOnsSlicer, 
    
    }
})


//addDispatch changes to: 
export const useAppDispatch: () => typeof store.dispatch=useDispatch
//useSelector changes to: 
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector
