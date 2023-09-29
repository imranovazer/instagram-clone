import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

import postModalSlice from "./reducers/postModalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,


    postModal: postModalSlice
  },
});
