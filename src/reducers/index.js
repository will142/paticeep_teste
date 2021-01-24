import currentPage from "./CurrentPageCounter";
import itemDisplayed from "./itemDisplayedCounterReducer";
import moviesList from "./moviesListReducer";
import categoryList from "./CategoryListReducer";
import filteredMoviesList from "./filteredMoviesListReducer";
import filter from "./filterReducer";


import { combineReducers } from "redux";

const allReducers = combineReducers({
    currentPage,
    itemDisplayed,
    categoryList,
    filteredMoviesList,
    filter,
    movies: moviesList,
})

export default allReducers;