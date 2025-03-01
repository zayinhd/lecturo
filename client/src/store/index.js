import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import newsReducer from "./reducers/newsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
    },
});
