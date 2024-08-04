import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// The state is a number, so no need for an interface here.
type CounterState = number;

const initialState: CounterState = 1; 

export const CounterSlice = createSlice({
    name: "Counter",
    initialState,
    reducers: {
        counting: (state, action: PayloadAction<number>) => {
            return action.payload;
        }
    }
});

// Export the action creator and the reducer
export const { counting } = CounterSlice.actions;
export default CounterSlice.reducer;
