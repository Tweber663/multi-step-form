import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type Check = boolean;

const initialState:Check = false;

export const formCompleteSlicer = createSlice({
    name: 'formConfirmation', 
    initialState,
    reducers: {
        formCompleted: (state, action: PayloadAction<Check>) => {
            return state
        }
    }
})