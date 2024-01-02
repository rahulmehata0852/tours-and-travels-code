import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";




export const AdminLogIn = createAsyncThunk("admin/Login", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/admin", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Credintials")
        } else {
            localStorage.setItem("admin", JSON.stringify(data[0]))
            return data
        }

    } catch (error) {
        return rejectWithValue(error.message)
    }


})



export const AddTours = createAsyncThunk("AddTour", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.post("/tours", arg)
        return "Tour Add Successfully"

    } catch (error) {
        return rejectWithValue(error.message)
    }


})



export const AdminGetAllTours = createAsyncThunk("AdGetall/Tours", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours")
        return data

    } catch (error) {
        return rejectWithValue(error.message)
    }


})



export const AdminDeleteTours = createAsyncThunk("AdminDeleteTours", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.delete(`/tours/${arg}`)
        return "Tour Delete Successfully"

    } catch (error) {
        return rejectWithValue(error.message)
    }


})