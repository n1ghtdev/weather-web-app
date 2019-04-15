import { call, takeEvery, put } from 'redux-saga/effects';
import { getRequest, postRequest } from '../../utils/fetchData';
import { GET_FORECAST_BY_QUERY, GET_FORECAST_BY_IP } from './types';
import {
  getForecastByQuerySuccess,
  getForecastByIPSuccess,
  requestFailure,
} from './actions';

export function* watchGetForecastByQuery() {
  yield takeEvery(GET_FORECAST_BY_QUERY, getForecastByQueryAsync);
}

export function* watchGetForecastByIP() {
  yield takeEvery(GET_FORECAST_BY_IP, getForecastByIPAsync);
}

function* getForecastByQueryAsync({ payload: { query } }) {
  try {
    const response = yield call(postRequest, '/api/forecast/by-query', { searchQuery: query });
    const data = yield response.json();
    yield put(getForecastByQuerySuccess(data));
  } catch (err) {
    console.log(`${err.name} - ${err.message} - ${err.stack}`);
    yield put(requestFailure());
  }
}

function* getForecastByIPAsync() {
  try {
    const response = yield call(getRequest, '/api/forecast/by-ip');
    const data = yield response.json();
    yield put(getForecastByIPSuccess(data));
  } catch (err) {
    console.log(`${err.name} - ${err.message} - ${err.stack}`);
    yield put(requestFailure());
  }
}

// function* getForecastHourlyAsync() {
//   try {
//     const response = yield call(getRequest, '/api/forecast/hourly');
//     const data = yield response.json();
//     yield put(getForecastHourlySuccess(data));
//   } catch (err) {
//     console.log(`${err.name} - ${err.message} - ${err.stack}`);
//     yield put(requestFailure());
//   }
// }

// function* getForecastDailyAsync() {
//   try {
//     const response = yield call(getRequest, '/api/forecast/daily');
//     const data = yield response.json();
//     yield put(getForecastDailySuccess(data));
//   } catch (err) {
//     console.log(`${err.name} - ${err.message} - ${err.stack}`);
//     yield put(requestFailure());
//   }
// }
