import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        list: []
    },
    reducers: {
        uploadCountries(state, action) {
            state.list.push(action.payload)
        }
    }
})

export const countriesActions = countriesSlice.actions
export const countriesReducer = countriesSlice.reducer