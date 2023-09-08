import { createSlice } from "@reduxjs/toolkit";
import { addToCart, getCartItems, getPublicProducts, getPublicSelectedProduct } from "../actions/publicActions";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.cartAdded = false
        }
    },
    extraReducers: builder => builder
        .addCase(getPublicProducts.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getPublicProducts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.products = payload
        })
        .addCase(getPublicProducts.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(getPublicSelectedProduct.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getPublicSelectedProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.selectedProduct = payload
        })
        .addCase(getPublicSelectedProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(addToCart.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addToCart.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cartAdded = true
        })
        .addCase(addToCart.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })
        .addCase(getCartItems.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getCartItems.fulfilled, (state, { payload }) => {
            state.loading = false
            state.cart = payload
        })
        .addCase(getCartItems.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = publicSlice.actions
export default publicSlice.reducer