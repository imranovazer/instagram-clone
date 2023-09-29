import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    isOpen: false
};

export const postModalSlice = createSlice({
    name: "postModal",
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isOpen = !state.isOpen
        }
    },

});



export const { toggleModal } =
    postModalSlice.actions;

export default postModalSlice.reducer;
