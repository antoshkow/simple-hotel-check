import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { hotelsReducer } from './hotelsReducer';
import { appReducer } from './appReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  hotels: hotelsReducer,
  app: appReducer,
  filter: filterReducer
});

export type RootState = ReturnType<typeof rootReducer>;
