import { createSlice } from "@reduxjs/toolkit";

export const filtredCountriesSlice = createSlice({
    name: 'filtredCountries',
    initialState: {
        list: []
    },
    reducers: {}
})

export const filtredCountriesReducer = filtredCountriesSlice.reducer
export const filtredCountriesActions = filtredCountriesSlice.actions
