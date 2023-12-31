import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosPrivate } from "../../axios";


const initialState = {
    isAuth: false,
    loading: true,
    user: null
};

export const followUser = createAsyncThunk('user/Follow', async (username) => {
    const res = await axiosPrivate.post('/user/subscription', {
        username
    })
    return [res.data.data, username];
})
export const unfollowUser = createAsyncThunk('user/UnFollow', async (username) => {
    const res = await axiosPrivate.delete(`/user/subscription?username=${username}`)
    return username;
})


export const postPost = createAsyncThunk(
    'post/postPost',
    async (data) => {
        const res = await axiosPrivate.post(`/post`, data);
        return res.data.data;
    })
export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (id) => {


        const res = await axiosPrivate.delete(`/post?postId=${id}`);
        return [res.data.data, id];



    })
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
            localStorage.clear();
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
        [postPost.fulfilled]: (state, { payload }) => {
            state.user.posts = [...state.user.posts, payload]

        },
        [deletePost.fulfilled]: (state, { payload }) => {
            const [response, deletedPostId] = payload
            state.user.posts = state.user.posts.filter(item => item.postId !== deletedPostId);

        },
        [deletePost.rejected]: (state) => {
            throw Error("Unable delete post")
        },
        [followUser.fulfilled]: (state, { payload }) => {
            const [res, user] = payload;
            state.user.subscriptions = [...state.user.subscriptions, {
                username: user
            }]



        },
        [unfollowUser.fulfilled]: (state, { payload }) => {

            state.user.subscriptions = state.user.subscriptions.filter(item => item.username !== payload);

        },

    }
});



export const { setIsAuth, setILoading, setUser, logoutUser } =
    userSlice.actions;



export default userSlice.reducer;
