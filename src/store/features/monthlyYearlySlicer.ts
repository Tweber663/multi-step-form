import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type check = string


const initialState: check = ''

export const MonthlyYearlySlicer = createSlice({
    name: " monthly/yearly",
    initialState, 
    reducers: {
        billingType: (state, action: PayloadAction<string>) => {
        return action.payload
        }
    }
})

export const { billingType } = MonthlyYearlySlicer.actions
export default MonthlyYearlySlicer.reducer



