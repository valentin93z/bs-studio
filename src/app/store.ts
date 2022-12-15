import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import burgerReducer from './reducers/burgerSlice';
import orderReducer from './reducers/orderSlice';
import calendarReducer from './reducers/calendarSlice';

export const store = configureStore({
  reducer: {
    burgerReducer,
    orderReducer,
    calendarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;