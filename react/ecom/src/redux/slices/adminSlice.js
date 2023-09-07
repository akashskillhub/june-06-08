import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../actions/adminActions";

const adminSlice = createSlice({
    name: "admin",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.productAdd = false
            state.productDeleted = false
            state.productUpdated = false
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productAdd = true
            })
            .addCase(addProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(getProducts.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.products = payload
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(deleteProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productDeleted = true
            })
            .addCase(deleteProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })


            .addCase(updateProduct.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(updateProduct.fulfilled, (state, { payload }) => {
                state.loading = false
                state.productUpdated = true
            })
            .addCase(updateProduct.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})
export const { invalidate } = adminSlice.actions
export default adminSlice.reducer