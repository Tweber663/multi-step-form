import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface Checking {
    addOn1: boolean, 
    addOn2: boolean, 
    addOn3: boolean,
}

type CheckPayload = {
    addOn1?: boolean, 
    addOn2?: boolean, 
    addOn3?: boolean, 
}

const initialState: Checking = {
    addOn1: false, 
    addOn2: false, 
    addOn3: false, 
}

type CheckAddOn = string


const AddOnSLicer = createSlice({
    name: 'AddOn', 
    initialState, 
    reducers: {
        currentAddOns: (state, action: PayloadAction<CheckPayload>) => {
            return {
                addOn1: action.payload.addOn1 ?? state.addOn1,
                addOn2: action.payload.addOn2 ?? state.addOn2,
                addOn3: action.payload.addOn3 ?? state.addOn3,
            }
        }
    }
})

export default AddOnSLicer.reducer; 
export const {currentAddOns} = AddOnSLicer.actions;