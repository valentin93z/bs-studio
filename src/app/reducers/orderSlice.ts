import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDay } from "../../models/IDay";
import { IOrder } from "../../models/IOrder";

const initialState: IOrder = {
    firstName: '',
    lastName: '',
    phone: '',
    selectedDate: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        dayOfMonth: new Date().getDate(),
        dayOfWeek: new Date().getDay(),
    },
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
            const data: IDay = JSON.parse(action.payload);
            state.selectedDate.year = data.year;
            state.selectedDate.month = data.month;
            state.selectedDate.dayOfMonth = data.dayOfMonth;
            state.selectedDate.dayOfWeek = data.dayOfWeek;
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