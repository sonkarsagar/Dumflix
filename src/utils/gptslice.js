import { createSlice } from '@reduxjs/toolkit'

const gptslice = createSlice({
    name: 'gpt',
    initialState: {
        gptToggle: false,
    },
    reducers: {
        toggleGPTSearch: (state, action) => {
            state.gptToggle = !state.gptToggle;
        }
    }
});

export const { toggleGPTSearch } = gptslice.actions;
export default gptslice.reducer;