import DIRECTORY_DATA from './directory.data';

const INITAL_STATE = DIRECTORY_DATA;

const directoryReducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default directoryReducer;
