import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
});

export const { setData, setLoading, setError } = homeFeedSlice.actions;

export const fetchFeed = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axios.get(
      `https://instagram.brightly-shining.cloud/api/v1/user/feed`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ec8bd96c25fb46319cdf49779182333c",
        },
      }
    );

    const data = response.data.data;

    dispatch(setData(data));
  } catch (error) {
    console.error("Error:", error);
    dispatch(setError(error.message));
  }
};

export default homeFeedSlice.reducer;
