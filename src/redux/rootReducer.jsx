import { combineReducers } from 'redux';

import {productReducer, sidebar,setProgress } from './reducer';
const rootReducer = combineReducers({
  product: productReducer,
  sidebar:sidebar,setProgress
});

export default rootReducer;
