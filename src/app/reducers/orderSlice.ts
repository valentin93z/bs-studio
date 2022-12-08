import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../models/IOrder";

const initialState: IOrder = {
    date: '',
    time: '',
    master: '',
    service: '',
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setDate(state, action: PayloadAction<string>) {
            state.date = action.payload;
        },
        setTime(state, action: PayloadAction<string>) {
            state.time = action.payload;
        },
        setMaster(state, action: PayloadAction<string>) {
            state.master = action.payload;
        },
        setService(state, action: PayloadAction<string>) {
            state.service = action.payload;
        },
    }
})

export default orderSlice.reducer;