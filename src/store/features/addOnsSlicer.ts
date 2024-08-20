import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface Checking {
    addOn1?: {
        active: boolean, 
        cost: number, 
        plan?: string, 
    }, 
    addOn2?: {
        active: boolean, 
        cost: number, 
        plan?: string, 
    }, 
    addOn3?: {
        active: boolean, 
        cost: number
        plan?: string, 
    },
}

const initialState: Checking = {
    addOn1: {
        active: false, 
        cost: 0, 
        plan: 'Online service',
    },
    addOn2: {
        active: false, 
        cost: 0, 
        plan: 'Larger storage', 
    }, 
    addOn3: {
        active: false, 
        cost: 0, 
        plan: 'Customizable profile', 
    } 
}

export const selectedAddOns = (state: Checking) => {
    const selectedArr = []; 
    for (let addOn in state) {
        if (state[addOn as keyof Checking]?.active === true) {
            selectedArr.push(state[addOn as keyof Checking]); 
        }
    }
    return selectedArr; 
}

const AddOnSLicer = createSlice({
    name: 'AddOn', 
    initialState, 
    reducers: {
        currentAddOns: (state, action: PayloadAction<Checking>) => {
            return {
                addOn1: {
                  active: action.payload.addOn1?.active ?? state.addOn1!.active,
                  cost: action.payload.addOn1?.cost ?? state.addOn1!.cost, 
                  plan: state.addOn1?.plan
                },
                addOn2: {
                    active: action.payload.addOn2?.active ?? state.addOn2!.active, 
                    cost: action.payload.addOn2?.cost ?? state.addOn2!.cost, 
                    plan: state.addOn2?.plan
                },
                addOn3: {
                    active: action.payload.addOn3?.active ?? state.addOn3!.active, 
                    cost: action.payload.addOn3?.cost ?? state.addOn3!.cost, 
                    plan: state.addOn3?.plan
                }
            }
        }
    }
})

export default AddOnSLicer.reducer; 
export const {currentAddOns} = AddOnSLicer.actions;