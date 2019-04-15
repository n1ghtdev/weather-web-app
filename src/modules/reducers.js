import { combineReducers } from 'redux';
import weatherReducer from './weather/weatherReducer';

const reducers = combineReducers({
  weather: weatherReducer,
});

export default reducers;
