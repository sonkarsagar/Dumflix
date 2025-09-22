import { createSlice } from '@reduxjs/toolkit'

const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        gptToggle: false,
        gptMovies: null,
        gptMoviesResults: null,
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.gptToggle = !state.gptToggle;
        },
        addGPTMovies: (state, action) => {
            const { gptMovies, tmdbResults } = action.payload
            state.gptMovies = gptMovies
            state.gptMoviesResults = tmdbResults
        }
    }
});

export const { toggleGPTSearch, addGPTMovies } = gptslice.actions;
export default gptslice.reducer;