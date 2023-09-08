import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addLike = createAsyncThunk("postLikes/addLike", async (postId) => {
  const response = await fetch(
    "https://instagram.brightly-shining.cloud/api/v1/post/like",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ec8bd96c25fb46319cdf49779182333c",
      },
      body: JSON.stringify({ postId }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add like");
  }

  return postId;
});

export const removeLike = createAsyncThunk(
  "postLikes/removeLike",
  async (postId) => {
    const response = await fetch(
      `https://instagram.brightly-shining.cloud/api/v1/post/like?postId=${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ec8bd96c25fb46319cdf49779182333c",
        },
      }
    );

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
