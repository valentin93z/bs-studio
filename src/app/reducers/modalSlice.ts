import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModal } from "../../models/IModal";


const initialState: IModal = {
    name: '',
    phone: '',
    isOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setIsOpen(state) {
            state.isOpen = !state.isOpen;
        },
    }
})

export default modalSlice.reducer;