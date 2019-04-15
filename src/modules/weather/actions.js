import * as types from './types';

export const getForecastByQuery = (query) => ({
  type: types.GET_FORECAST_BY_QUERY,
  payload: {
    query,
  },
});

export const getForecastByQuerySuccess = (payload) => ({
  type: types.GET_FORECAST_BY_QUERY_SUCCESS,
  payload,
});

export const getForecastByIP = () => ({
  type: types.GET_FORECAST_BY_IP,
});

export const getForecastByIPSuccess = (payload) => ({
  type: types.GET_FORECAST_BY_IP_SUCCESS,
  payload,
});

// export const getForecastHourlyRequest = () => ({
//   type: types.GET_FORECAST_HOURLY,
// });

// export const getForecastHourlySuccess = (payload) => ({
//   type: types.GET_FORECAST_HOURLY_SUCCESS,
//   payload,
// });

// export const getForecastDailyRequest = () => ({
//   type: types.GET_FORECAST_DAILY,
// });

// export const getForecastDailySuccess = (payload) => ({
//   type: types.GET_FORECAST_DAILY_SUCCESS,
//   payload,
// });

export const requestFailure = (payload) => ({
  type: types.REQUEST_FAILURE,
  payload,
});
