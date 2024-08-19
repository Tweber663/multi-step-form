import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Check {
    cost: number, 
    plan: string, 
}; 

const initialState: Check = {cost: 0, plan: ''};

export const TotalPrice = createSlice({
    name: 'totalPrice', 
    initialState, 
    reducers: {
        addCost: (state, action: PayloadAction<Check>) => {
            return {cost: action.payload.cost, plan: action.payload.plan}
        }
        
    }
})

export default TotalPrice.reducer
export const { addCost } = TotalPrice.actions