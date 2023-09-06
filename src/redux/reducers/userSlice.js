import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosPrivate } from "../../axios";


const initialState = {
    isAuth: false,
    loading: true,
    user: null
};

export const getUserInfo = createAsyncThunk(
    'user/getUser',
    async (thunkAPI) => {

        const res = await axiosPrivate.get(`/user?username=${localStorage.getItem('username')}`);
        return res.data.data;
    })
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        logoutUser: (state) => {
            (state.isAuth = false),
                (state.user = initialState.user),
                (state.loading = false);
        },
    },
    extraReducers: {
        [getUserInfo.pending]: (state) => {
            state.loading = true
        },
        [getUserInfo.fulfilled]: (state, { payload }) => {

            state.user = payload
            state.isAuth = true
            state.loading = false
        },
        [getUserInfo.rejected]: (state) => {
            localStorage.clear();
            state.isAuth = false
            state.user = null
            state.loading = false
        },

    }
});



export const { setIsAuth, setILoading, setUser, logoutUser } =
    userSlice.actions;



export default userSlice.reducer;
