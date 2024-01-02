import { createSlice } from "@reduxjs/toolkit";
import { AddToWishList, BookTour, GetSearchTours, GetTicketDetails, GetWishList, SearchFilter, TourList1stgetact, TourList2ndgetact, TourList3rdgetact, TourList4thgetact, UserLogIn, UserRegister } from "../actions/Action";

const ClientSlice = createSlice({
    name: "ClientSlice",
    initialState: { ticket: [], auth: JSON.parse(localStorage.getItem("auth")), SearchTours: JSON.parse(localStorage.getItem("searchTours")) },
    reducers: {
        LogOut: (state, { payload }) => {
            localStorage.removeItem("auth")
            state.LoggedOut = true
            state.auth = null
            state.wish = null
        },
        invalidate: (state, { payload }) => {
            state.bookTour = false
            state.whishListed = false
        }
    },



    extraReducers: (builder) => {
        builder
            .addCase(UserRegister.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserRegister.fulfilled, (state, { payload }) => {
                state.loading = false
                state.UserRegister = payload
            })
            .addCase(UserRegister.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })



            .addCase(UserLogIn.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(UserLogIn.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(UserLogIn.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })


            .addCase(TourList1stgetact.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(TourList1stgetact.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tour1 = payload
            })
            .addCase(TourList1stgetact.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })





            .addCase(TourList2ndgetact.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(TourList2ndgetact.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tour2 = payload
            })
            .addCase(TourList2ndgetact.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })






            .addCase(TourList3rdgetact.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(TourList3rdgetact.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tour3 = payload
            })
            .addCase(TourList3rdgetact.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })





            .addCase(TourList4thgetact.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(TourList4thgetact.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tour4 = payload
            })
            .addCase(TourList4thgetact.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })







            .addCase(GetSearchTours.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetSearchTours.fulfilled, (state, { payload }) => {
                state.loading = false
                state.SearchTours = payload
            })
            .addCase(GetSearchTours.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })







            .addCase(BookTour.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(BookTour.fulfilled, (state, { payload }) => {
                state.loading = false
                state.bookTour = true
            })
            .addCase(BookTour.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })






            .addCase(GetTicketDetails.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetTicketDetails.fulfilled, (state, { payload }) => {
                state.loading = false
                state.ticket = payload
            })
            .addCase(GetTicketDetails.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })








            .addCase(SearchFilter.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(SearchFilter.fulfilled, (state, { payload }) => {
                state.loading = false
                state.filterSearch = payload
            })
            .addCase(SearchFilter.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })







            .addCase(AddToWishList.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddToWishList.fulfilled, (state, { payload }) => {
                state.loading = false
                state.whishListed = true
            })
            .addCase(AddToWishList.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })








            .addCase(GetWishList.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetWishList.fulfilled, (state, { payload }) => {
                state.loading = false
                state.wish = payload
            })
            .addCase(GetWishList.rejected, (state, { payload }) => {
                state.error = payload
                state.loading = false
            })






    }





})


export const { LogOut, invalidate } = ClientSlice.actions
export default ClientSlice.reducer






