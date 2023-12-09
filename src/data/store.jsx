import {configureStore} from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});
export default store;
