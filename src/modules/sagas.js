import { all, fork } from 'redux-saga/effects';
import {
  watchGetForecastByQuery,
  watchGetForecastByIP,
} from './weather/sagas';

export default function* sagas() {
  yield all([
    fork(watchGetForecastByQuery),
    fork(watchGetForecastByIP),
  ]);
}
