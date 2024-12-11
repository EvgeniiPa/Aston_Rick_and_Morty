import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: 'fabourites',
    initialState: {
        favouritesList: [],
    },
    reducers:{
        addFavourite(state, action){
            state.favouritesList.push({
                action
            })
        },
        removeFavourite(state, action){},
    }
})

export const {addFavourite, removeFavourite} = favouritesSlice.actions;
export default favouritesSlice.reducer;