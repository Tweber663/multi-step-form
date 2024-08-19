import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface Checking {
    addOn1?: {
        active: boolean, 
        cost: number, 
    }, 
    addOn2?: {
        active: boolean, 
        cost: number, 
    }, 
    addOn3?: {
        active: boolean, 
        cost: number
    },
}

const initialState: Checking = {
    addOn1: {
        active: false, 
        cost: 0, 
    },
    addOn2: {
        active: false, 
        cost: 0, 
    }, 
    addOn3: {
        active: false, 
        cost: 0, 
    } 
}



const AddOnSLicer = createSlice({
    name: 'AddOn', 
    initialState, 
    reducers: {
        currentAddOns: (state, action: PayloadAction<Checking>) => {
            return {
                addOn1: {
                  active: action.payload.addOn1?.active ?? state.addOn1!.active,
                  cost: action.payload.addOn1?.cost ?? state.addOn1!.cost
                },
                addOn2: {
                    active: action.payload.addOn2?.active ?? state.addOn2!.active, 
                    cost: action.payload.addOn2?.cost ?? state.addOn2!.cost, 
                },
                addOn3: {
                    active: action.payload.addOn3?.active ?? state.addOn3!.active, 
                    cost: action.payload.addOn3?.cost ?? state.addOn3!.cost, 
                }
            }
        }
    }
})

export default AddOnSLicer.reducer; 
export const {currentAddOns} = AddOnSLicer.actions;