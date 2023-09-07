import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const addProduct = createAsyncThunk("admin/add-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.post("/products", productData)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const getProducts = createAsyncThunk("admin/get-products", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.get("/products")
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const deleteProduct = createAsyncThunk("admin/delete-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.delete(`/products/${productData.id}`)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
export const updateProduct = createAsyncThunk("admin/update-product", async (productData, { rejectWithValue, getState }) => {
    try {
        const { data } = await API.patch(`/products/${productData.id}`, productData)
        return true
    } catch (error) {
        return rejectWithValue(error.message)
    }
})