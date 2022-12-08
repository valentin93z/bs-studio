import { createSlice } from "@reduxjs/toolkit";
import { IBurger } from "../../models/IBurger";

const initialState: IBurger = {
    toggle: false,
};

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        setToggle(state) {
            state.toggle = !state.toggle;
        }
    }
})

export default burgerSlice.reducer;