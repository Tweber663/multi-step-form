import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type Check = number; 

const initialState = 0;

export const TotalPrice = createSlice({
    name: 'totalPrice', 
    initialState, 
    reducers: {
        addCost: (state, action: PayloadAction<number>) => {
            return action.payload
        }
    }
})

export default TotalPrice.reducer 
export const { addCost } = TotalPrice.actions