import * as types from './types';

export const fetchForecast = query => ({
  type: types.FETCH_FORECAST_REQUEST,
  payload: {
    query,
  },
});

export const fetchForecastByIP = () => ({
  type: types.FETCH_FORECAST_IP_REQUEST,
});

export const fetchForecastSuccess = payload => ({
  type: types.FETCH_FORECAST_SUCCESS,
  payload,
});

export const requestFailure = payload => ({
  type: types.REQUEST_FAILURE,
  payload,
});
