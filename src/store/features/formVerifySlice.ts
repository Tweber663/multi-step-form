import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VerifyInterface {
    step1: boolean;
    step2: boolean;
    step3: boolean;
}

// Define a type for the payload
type StepPayload = {
    step1?: boolean;
    step2?: boolean;
    step3?: boolean;
};

const initialState: VerifyInterface = {
    step1: false,
    step2: false,
    step3: false,
};

export const FormVerifySlice = createSlice({
    name: 'verify',
    initialState,
    reducers: {
        checkingSteps: (state, action: PayloadAction<StepPayload>) => {
            // Cycle through state
            for (let key in state) {
                // targets first position
                if (key === Object.keys(action.payload)[0] as keyof VerifyInterface) {
                    state[key] = action.payload[key as keyof VerifyInterface]!;
                }
            }
        }
    }
});

export const { checkingSteps } = FormVerifySlice.actions;
export default FormVerifySlice.reducer;
