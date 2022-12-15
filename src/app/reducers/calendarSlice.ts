import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICalendar } from "../../models/ICalendar";

const initialState: ICalendar = {
    currentDate: null,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setCurrentDate(state, action: PayloadAction<any>) {
            state.currentDate = action.payload;
        }
    }
})

export default calendarSlice.reducer;