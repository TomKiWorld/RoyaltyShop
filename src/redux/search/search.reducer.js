import searchActionTypes from './search.types';

const INITAL_STATE = {
  searchField: '',
  collectionsFilter: [],
  filteredItems: []
};

const searchReducer = (state =INITAL_STATE, action) => {
  switch(action.type) {
    case searchActionTypes.CHANGE_SEARCH_FIELD:
      return { 
        ...state, 
        searchField: action.payload 
      };
    case searchActionTypes.SET_COLLECTIONS_FILTER:
      return { 
        ...state, 
        collectionsFilter: action.payload
      };
    case searchActionTypes.SET_FILTERED_ITEMS:
      return { 
        ...state, 
        filteredItems: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
