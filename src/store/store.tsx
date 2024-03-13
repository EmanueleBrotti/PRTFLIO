import { configureStore } from "@reduxjs/toolkit";
import cursorSlice from "./slices/cursorSlice";
import aboutSlice from "./slices/aboutSlice";

export const store = configureStore({
    reducer: {
        cursor: cursorSlice,
        about: aboutSlice,
    },
});

// for typescript, types for state and dispatch, used in hooks.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
