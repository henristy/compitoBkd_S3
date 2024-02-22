import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { urlApi } from "../data";
import axios from 'axios'

const initialState = {
    results: null,
    loading: false,
    error: null,
}

export const getUsers = createAsyncThunk("users/fetch", async () => {
    try {
        const response = await axios.get(`${urlApi}users`);
        const users = await response.data;
        console.log(users);
        return users
    } catch (error) {

    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.results = [];
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
                state.error = null;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default userSlice.reducer;
