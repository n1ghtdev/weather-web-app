import * as types from './types';

const initialState = {
  loading: false,
  loaded: false,
  error: {},
  data: {},
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FORECAST_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_FORECAST_IP_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_FORECAST_SUCCESS:
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
