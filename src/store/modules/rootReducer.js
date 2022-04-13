import { combineReducers } from 'redux';
import CommonReducer from './common/common.reducer';
import { userReducer } from './user';

const reducers = {
  common: CommonReducer,
  user: userReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
