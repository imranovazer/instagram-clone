import { createSlice } from "@reduxjs/toolkit";

import { axiosPrivate } from "../../axios";

const userDataSlice = createSlice({
  name: "user",
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

export const { setData, setLoading, setError } = userDataSlice.actions;

export const fetchUsers = (username) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await axiosPrivate.get(`/user?username=${username}`)

    const data = response.data.data;

    dispatch(setData(data));
  } catch (error) {
    console.error("Error:", error);
    dispatch(setError(error.message));
  }
};

export default userDataSlice.reducer;
