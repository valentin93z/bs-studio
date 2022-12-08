import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modalReducer from './reducers/modalSlice';
import burgerReducer from './reducers/burgerSlice';
import orderReducer from './reducers/orderSlice';

export const store = configureStore({
  reducer: {
    modalReducer,
    burgerReducer,
    orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;