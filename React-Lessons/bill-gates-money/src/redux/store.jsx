import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './itemSlice';

export const store = configureStore({
    reducer: {
        items: itemsSlice.reducer,
    }
})