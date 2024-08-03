import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface formInterface {
    name: string, 
    email: string, 
    phone: string, 
    planType: string, 
    planBillingType: string, 
    addOns: {
        onlineServcie: boolean, 
        largerStorgae: boolean, 
        customProfile: boolean, 
    }
}

const initialState: formInterface = {
    name: '', 
    email: '', 
    phone: '', 
    planType: '', 
    planBillingType: '', 
    addOns: {
        onlineServcie: false, 
        largerStorgae: false, 
        customProfile: false, 
    }
}

export const FormSlice = createSlice({
    name: 'form', 
    initialState, 
    reducers: {

    }
})


export default FormSlice.reducer; 


