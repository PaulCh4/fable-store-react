import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
    name: 'collections',
    initialState: [],
    reducers: {
        setCollections: (state, action) =>{
            return action.payload;
        }
    }
});

export const {setCollections} = collectionsSlice.actions;

export default collectionsSlice.reducer;
