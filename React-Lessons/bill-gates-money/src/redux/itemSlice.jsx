import { createSlice } from "@reduxjs/toolkit";
import itemsJSON from '../item.json';

const data = itemsJSON.products;

export const itemsSlice = createSlice({
    name: "products",
    initialState: {
        items: data,
        budget: 100000000000,
        initialMoney: 10000000000000,
    },
    reducers: {
        addToChart: (state, action) => {
            const { count, id } = action.payload;

            const product = state.items.find((product) => product.id === id);

            product.count = count;

            const price = 0;

            state.items.map((product) => {
                price += Number(product.count) * Number(product.productPrice);
            });
            state.budget = Number(state.initialMoney) - Number(price);
        }
    }
})

export const { addToChart } = itemsSlice.actions;
export default itemsSlice.reducer;