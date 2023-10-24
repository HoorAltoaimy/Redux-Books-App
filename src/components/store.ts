import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

export type RootState = {
    booksR: ReturnType<typeof booksReducer>;
}

export const store = configureStore({
    reducer: {
    booksR: booksReducer,
    },
});