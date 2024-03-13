import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
    name: "about",
    initialState: {
        label: "SWISS ARMY KNIFE:",
    },
    reducers: {
        setLabel: (state, action) => {
            state.label = action.payload;
        },
    },
});

export const { setLabel } = aboutSlice.actions;

export default aboutSlice.reducer;
