import {ADD_INVOICE} from '../actions/ActionTypes';
const initialState = {files:[]};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      console.log("File ADDED");
      return Object.assign({}, state, {files: action.files});
    default:
      return state;
  }
}
