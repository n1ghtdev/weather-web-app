import * as types from './types';

const initialState = {
  loading: false,
  loaded: false,
  error: {},
  data: {},
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_FORECAST_BY_QUERY:
      return { ...state, loading: true };
    case types.GET_FORECAST_BY_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    case types.GET_FORECAST_BY_IP:
      return { ...state, loading: true };
    case types.GET_FORECAST_BY_IP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };
    case types.REQUEST_FAILURE:
      return { ...state, error: { message: action.payload } };
    default:
      return state;
  }
}

export default weatherReducer;
