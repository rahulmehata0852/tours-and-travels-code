import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

export const UserRegister = createAsyncThunk("User/Register", async (arg, { rejectWithValue }) => {

    try {

        const { data } = await API.post("/users", arg)
        return "Register Successfully"

    } catch (error) {
        return rejectWithValue(error.message)
    }


})




export const UserLogIn = createAsyncThunk("User/LogIn", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/users", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("Invalid Credintials")
        } else {
            localStorage.setItem("auth", JSON.stringify(data[0]))
            return data[0]
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})






export const TourList1stgetact = createAsyncThunk("TourList1stgetact", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: {
                time: "5 hours"
            }
        })
        {
            return data
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})







export const TourList2ndgetact = createAsyncThunk("TourList2ndgetact", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: {
                time: "12 hours"
            }
        })
        {
            return data
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})






export const TourList3rdgetact = createAsyncThunk("TourList3rdgetact", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: {
                time: "24 hours"
            }
        })
        {
            return data
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})







export const TourList4thgetact = createAsyncThunk("TourList4thgetact", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: {
                time: "3 days",
                time: "More Than 3 days"
            }
        })
        {
            return data
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})







export const GetSearchTours = createAsyncThunk("GetSearchTours", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: {
                Place: arg.Place
            }
        })
        {
            localStorage.setItem("searchTours", JSON.stringify(data))
            return data
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})











export const BookTour = createAsyncThunk("BookTour", async (arg, { rejectWithValue }) => {

    try {

        delete arg.id

        const { data } = await API.post("/bookings", arg)
        {
            return "booking Successfully"
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }

})













export const GetTicketDetails = createAsyncThunk("GetTicketDetails", async (arg, { rejectWithValue }) => {

    try {

        const { data } = await API.get("/bookings", {
            params: {
                userid: arg
            }
        })
        if (data.length === 0) {
            return rejectWithValue("You should book tour 😄")
        } else {
            return data
        }


    } catch (error) {
        return rejectWithValue(error.message)
    }

})









export const SearchFilter = createAsyncThunk("SearchFilter", async (arg, { rejectWithValue }) => {

    try {
        const { data } = await API.get("/tours", {
            params: arg
        })
        if (data.length === 0) {
            return rejectWithValue("No record Match")
        } else {
            return data
        }


    } catch (error) {
        return rejectWithValue(error.message)
    }

})







export const AddToWishList = createAsyncThunk("AddToWishList", async (arg, { rejectWithValue }) => {

    try {

        delete arg.id

        const { data } = await API.post("/whishlist", arg)
        {
            return "whishListAdded"
        }


    } catch (error) {
        return rejectWithValue(error.message)
    }

})







export const GetWishList = createAsyncThunk("GetWishList", async (arg, { rejectWithValue }) => {

    try {



        const { data } = await API.get("/whishlist", {
            params: {
                userid: arg || 10000
            }
        })
        if (data.length === 0) {
            return rejectWithValue("No wishlist")
        } else {
            return data
        }


    } catch (error) {
        return rejectWithValue(error.message)
    }

})



