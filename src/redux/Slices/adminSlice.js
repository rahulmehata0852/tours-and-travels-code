import { createSlice } from "@reduxjs/toolkit";
import { AddTours, AdminDeleteTours, AdminGetAllTours, AdminLogIn } from "../actions/adminActions";

const AdminSlcie = createSlice({
    name: "AdminSlcie",
    initialState: { auth: JSON.parse(localStorage.getItem("admin")) },
    reducers: {
        invalidate: (state, { payload }) => {
            state.deleteTours = false
            state.TourAdded = false
        }
    },


    extraReducers: (builder) => {
        builder


            .addCase(AdminLogIn.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AdminLogIn.fulfilled, (state, { payload }) => {
                state.loading = false
                state.auth = payload
            })
            .addCase(AdminLogIn.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })




            .addCase(AddTours.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddTours.fulfilled, (state, { payload }) => {
                state.loading = false
                state.TourAdded = true
            })
            .addCase(AddTours.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })






            .addCase(AdminGetAllTours.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AdminGetAllTours.fulfilled, (state, { payload }) => {
                state.loading = false
                state.tours = payload
            })
            .addCase(AdminGetAllTours.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })





            .addCase(AdminDeleteTours.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AdminDeleteTours.fulfilled, (state, { payload }) => {
                state.loading = false
                state.deleteTours = true
            })
            .addCase(AdminDeleteTours.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })



    }

})

export const { invalidate } = AdminSlcie.actions
export default AdminSlcie.reducer