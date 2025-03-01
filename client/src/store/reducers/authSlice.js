import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../api/authApi";
const user = JSON.parse(localStorage.getItem("user"));

export const logIn = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await login(username, password);
            return { user: data };
        } catch (error) {
            console.error(error);
            // const message =
            //     (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //     error.toString();

            // thunkAPI.dispatch(message);
            // return thunkAPI.rejectWithValue();
        }
    }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
    await logout();
});

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                (state.isLoggedIn = true), (state.user = action.payload.user);
            })
            .addCase(logIn.rejected, (state, action) => {
                (state.isLoggedIn = false), (state.user = null);
            })

            .addCase(logOut.fulfilled, (state, action) => {
                (state.isLoggedIn = false), (state.user = null);
            });
    },
});

export default authSlice.reducer;
