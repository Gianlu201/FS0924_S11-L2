import { GET_SEARCHED_COMPANIES_SUCCESS } from '../actions';

const initialState = {
  searchedCompanies: [],
};

const searchedCompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED_COMPANIES_SUCCESS:
      return {
        searchedCompanies: action.payload,
      };

    default:
      return state;
  }
};

export default searchedCompaniesReducer;
