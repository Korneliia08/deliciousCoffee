import {createSlice} from "@reduxjs/toolkit";

const productsReducer = createSlice({
    name: 'counter',
    initialState: {
        products: []
    },
    reducers: {
        setProducts(state, action) {
            return {...state, products: [...action.payload.data]}
        }
    },
})

export const {setProducts} = productsReducer.actions;
export default productsReducer.reducer;
