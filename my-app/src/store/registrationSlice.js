import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: 'registrationSlice',
    initialState:{
        active: false
    },
    reducers:{
        toggleActive(state,){
            state.active =  !state.active
        }
    }
})

export const {toggleActive} = registrationSlice.actions
export default registrationSlice.reducer