import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import userDataSlice from "./reducers/userDataSlice";
import homeFeedSlice from "./reducers/homeFeedSlice";
import postLikesSlice from "./reducers/postLikesSlice";
import postModalSlice from "./reducers/postModalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    userData: userDataSlice,
    homeFeed: homeFeedSlice,
    postLikes: postLikesSlice,
    postModal: postModalSlice
  },
});
