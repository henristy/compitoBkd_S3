import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { urlApi } from "../data";
import axios from 'axios'

const initialState = {
    results: null,
    loading: false,
    error: null,
    currentPage: 1,
}

export const getPosts = createAsyncThunk("posts/fetch", async (currentPage) => {
    try {
        const response = await axios.get(`${urlApi}posts?_embed&per_page=15&page=${currentPage}`);
        const posts = await response.data;
        return [posts, currentPage]
        
    } catch (error) {
        throw error;
    }
    
});

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.results = [];
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload[0];
                state.currentPage = action.payload[1];
                state.error = null;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default postSlice.reducer;
