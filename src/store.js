import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/search';

const reducers = combineReducers({
  searchState: searchReducer
});

const store = createStore(reducers);

export default store;
