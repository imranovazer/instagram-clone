import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../axios";

export const addLike = createAsyncThunk("postLikes/addLike", async (postId) => {

  const response = await axiosPrivate.post('/post/like', { postId })

  if (!response.ok) {
    throw new Error("Failed to add like");
  }

  return postId;
});

export const removeLike = createAsyncThunk(
  "postLikes/removeLike",
  async (postId) => {
    const response = await axiosPrivate.delete(`/post/like?postId=${postId}`);



    if (!response.ok) {
      throw new Error("Failed to remove like");
    }

    return postId;
  }
);

const postLikesSlice = createSlice({
  name: "postLikes",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {},
});

export default postLikesSlice.reducer;
