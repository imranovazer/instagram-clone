import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import userDataSlice from "./reducers/userDataSlice";
import homeFeedSlice from "./reducers/homeFeedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userData: userDataSlice,
    homeFeed: homeFeedSlice,
  },
});
