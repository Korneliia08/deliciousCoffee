import {createSlice, current} from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        open: false
    },
    reducers: {
        openCart(state) {
            return {...state, open: true}
        },
        closeCart(state) {
            return {...state, open: false}
        },
        toggleCart(state) {
            return {...state, open: !state.open}
        },
        addProductToCart(state, action) {
            let some = current(state).products.some(product => product.id === action.payload.id);
            if (!some) {
                return {
                    ...state,
                    products: [...state.products, {id: action.payload.id, count: 1, price: action.payload.price}]
                };
            }
        },
        incrementCount(state, action) {
            return {
                ...state,
                products: [...state.products.map(product => {
                    if (product.id === action.payload) {
                        const updatedProduct = {...product, count: product.count + 1}
                        return updatedProduct
                    }
                    return product
                })]
            }
        },
        decrementCount(state, action) {
            return {
                ...state,
                products: [...state.products.map(product => {
                    if (product.id === action.payload) {
                        const updatedProduct = {...product, count: product.count - 1}
                        return updatedProduct
                    }
                    return product
                })]
            }
        },
        deleteProduct(state, action) {
            return {
                ...state,
                products: [...state.products.filter(k => k.id !== action.payload)]
            }
        }
    },
})

export const {openCart} = cartReducer.actions;
export const {closeCart} = cartReducer.actions;
export const {toggleCart} = cartReducer.actions;
export const {addProductToCart} = cartReducer.actions;
export const {incrementCount} = cartReducer.actions;
export const {deleteProduct} = cartReducer.actions;
export const {decrementCount} = cartReducer.actions;
export default cartReducer.reducer;
