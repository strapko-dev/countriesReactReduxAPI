import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { countriesActions } from "../store/countries.slice"
import { filtredCountriesActions } from "../store/filtredCountries.slice"

const actions = {
    ...countriesActions,
    ...filtredCountriesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}