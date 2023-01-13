import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBurger } from "../../models/IBurger";

const initialState: IBurger = {
    toggle: false,
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setToggle(state, action: PayloadAction<boolean>) {
            state.toggle = action.payload;
        },
    },
})

export default burgerSlice.reducer;