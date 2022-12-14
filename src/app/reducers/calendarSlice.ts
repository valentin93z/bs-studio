import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICalendar } from "../../models/ICalendar";
import { IDay } from "../../models/IDay";
import { IEvent } from "../../models/IEvent";

const initialState: ICalendar = {
    fullDate: new Date().getTime(),
    days: [],
    events: [],
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        incrementMonth(state) {
            const date = state.fullDate && new Date(state.fullDate);
            state.fullDate = date && date.setMonth(date.getMonth() + 1);
        },
        decrementMonth(state) {
            const date = state.fullDate && new Date(state.fullDate);
            state.fullDate = date && date.setMonth(date.getMonth() - 1);
        },
        getDays(state, action: PayloadAction<IDay[]>) {
            state.days = action.payload;
        },
        getEvents(state, action: PayloadAction<IEvent[]>) {
            state.events = action.payload;
        },
    }
})

export default calendarSlice.reducer;