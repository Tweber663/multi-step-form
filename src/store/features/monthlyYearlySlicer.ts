import { createSlice } from "@reduxjs/toolkit";

type check = string


const initialState: check = 'Monthly'

export const MonthlyYearlySlicer = createSlice({
    name: " monthly/yearly",
    initialState, 
    reducers: {
        billingType: (state, payload) => {
            
        }
    }
})

export const { billingType } = MonthlyYearlySlicer.actions
export default MonthlyYearlySlicer.reducer



