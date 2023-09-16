import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosPrivate } from "../../axios";



export const commentPost = createAsyncThunk(
  'post/comment',
  async ({ postId, text }) => {

    const res = await axiosPrivate.post('/post/comment', {
      postId, text
    })

    return [res.data.data, postId];

  })


const homeFeedSlice = createSlice({
  name: "homeFeed",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [commentPost.pending]: (state) => {
      state.loading = true
    },
    [commentPost.fulfilled]: (state, { payload }) => {

      const [newComment, postId] = payload
      const newPostData = state.data.map(item => {
        if (item.postId === postId) {
          return ({ ...item, comments: [...item.comments, newComment] })
        }
        else {
          return item;
        }
      })
      state.data = newPostData


      state.loading = false
    },
    [commentPost.rejected]: (state) => {



      state.loading = false
    },

  }
});

export const { setData, setLoading, setError } = homeFeedSlice.actions;

export const fetchFeed = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axiosPrivate.get('/user/feed');


    console.log(response)
    const data = response.data.data;

    dispatch(setData(data));
  } catch (error) {
    console.error("Error:", error);
    dispatch(setError(error.message));
  }
};

export default homeFeedSlice.reducer;
