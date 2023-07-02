import { combineReducers } from 'redux';

import {productReducer, sidebar} from './reducer';
const rootReducer = combineReducers({
  product: productReducer,
  sidebar:sidebar
});

export default rootReducer;
