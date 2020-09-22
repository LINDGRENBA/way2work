//... other reducers
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  //other reducers go here
  firestore: firestoreReducer
});

export default rootReducer;