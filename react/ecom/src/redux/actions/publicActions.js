import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const getPublicProducts = createAsyncThunk(
    "getProducts",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get("/products")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getPublicSelectedProduct = createAsyncThunk(
    "getPublicSelectedProduct",
    async (id, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/products/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const addToCart = createAsyncThunk(
    "addToCart",
    async (cartData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.post(`/cart`, cartData)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })
export const getCartItems = createAsyncThunk(
    "getCartItems",
    async (cartData, { rejectWithValue, getState }) => {
        try {
            const { data } = await API.get(`/cart`)
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })