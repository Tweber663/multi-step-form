import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

interface verifyInterface {
    step1: boolean, 
    step2: boolean, 
    step3: boolean, 
}


const initialState: verifyInterface = {
    step1: false, 
    step2: false, 
    step3: false, 
}

export const FormVerifySlice = createSlice({
    name: 'verify', 
    initialState, 
    reducers: {
        checkingSteps: (state, action: PayloadAction<object>) => {
            for(let key in state) {
                if (key === Object.keys(action.payload)[0] as keyof verifyInterface) {
                  state[key] = true
                }
            }
        }
    }
})

export const {checkingSteps} = FormVerifySlice.actions
export default FormVerifySlice.reducer


