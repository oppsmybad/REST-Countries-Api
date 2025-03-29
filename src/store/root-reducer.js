import { combineReducers } from "redux";

import { themeReducer } from "./theme/theme-reducer.js";
import { countriesReducer } from "./countries/countries-reducer.js";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
});
