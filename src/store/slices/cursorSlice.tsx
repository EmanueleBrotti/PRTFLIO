import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
    name: "cursor",
    initialState: {
        variant: "start", //changes when hovering different elements
        position: { x: 0, y: 0 },
    },
    reducers: {
        setCursorVariant: (state, action) => {
            state.variant = action.payload;
        },
        setCursorPosition: (state, action) => {
            state.position = action.payload;
        },
    },
});

export const { setCursorVariant, setCursorPosition } = cursorSlice.actions;

export default cursorSlice.reducer;
