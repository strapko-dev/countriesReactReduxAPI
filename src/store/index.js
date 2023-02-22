import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./countries.slice";
import { filtredCountriesReducer } from "./filtredCountries.slice";

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        filtredCountries: filtredCountriesReducer
    }
})