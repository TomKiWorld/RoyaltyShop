import shopActionTypes from './shop.types';

const INITAL_STATE = {
  collections: null,
  isPending: false,
  errorMessage: ''
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.REQUEST_COLLECTIONS_START:
      return { 
        ...state, 
        isPending: true
      };
    case shopActionTypes.REQUEST_COLLECTIONS_SUCCESS:
      return { 
        ...state, 
        collections: action.payload, 
        isPending: false
      };
    case shopActionTypes.REQUEST_COLLECTIONS_FAILED:
      return { 
        ...state, 
        errorMessage: action.payload, 
        isPending: false
      };
    default:
      return state;
  }
}

export default shopReducer;
