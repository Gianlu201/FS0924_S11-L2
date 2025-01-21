import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favouritesReducer from '../reducers/favourites';
import searchedCompaniesReducer from '../reducers/searchedCompanies';

const greatReducer = combineReducers({
  favourites: favouritesReducer,
  searched: searchedCompaniesReducer,
});

const store = configureStore({
  reducer: greatReducer,
});

export default store;
