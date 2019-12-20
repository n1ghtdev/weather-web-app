import { call, takeEvery, put } from 'redux-saga/effects';
import { getRequest, postRequest } from '../../utils/fetchData';
import { FETCH_FORECAST_REQUEST, FETCH_FORECAST_IP_REQUEST } from './types';
import { fetchForecastSuccess, requestFailure } from './actions';

export function* watchGetForecastByQuery() {
  yield takeEvery(FETCH_FORECAST_REQUEST, getForecastByQueryAsync);
}

export function* watchGetForecastByIP() {
  yield takeEvery(FETCH_FORECAST_IP_REQUEST, getForecastByIPAsync);
}

function* getForecastByQueryAsync({ payload: { query } }) {
  try {
    const response = yield call(postRequest, '/api/forecast/by-query', {
      searchQuery: query,
    });
    const data = yield response.json();

    yield put(fetchForecastSuccess(data));
  } catch (err) {
    console.error(`${err.name} - ${err.message} - ${err.stack}`);
    yield put(requestFailure());
  }
}

function* getForecastByIPAsync() {
  try {
    const response = yield call(getRequest, '/api/forecast/by-ip');
    const data = yield response.json();

    yield put(fetchForecastSuccess(data));
  } catch (err) {
    console.error(`${err.name} - ${err.message} - ${err.stack}`);
    yield put(requestFailure());
  }
}
