import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../models/IOrder";

const initialState: IOrder = {
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
    master: '',
    serviceType: '',
    service: '',
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setFirstName(state, action: PayloadAction<string>) {
            state.firstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string>) {
            state.lastName = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setDate(state, action: PayloadAction<string>) {
            state.date = action.payload;
        },
        setTime(state, action: PayloadAction<string>) {
            state.time = action.payload;
        },
        setMaster(state, action: PayloadAction<string>) {
            state.master = action.payload;
        },
        setServiceType(state, action: PayloadAction<string>) {
            state.serviceType = action.payload;
        },
        setService(state, action: PayloadAction<string>) {
            state.service = action.payload;
        },
    }
})

export default orderSlice.reducer;