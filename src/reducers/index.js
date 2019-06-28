import { combineReducers } from 'redux';

import {
  FETCH_APARTMENTS_REQUEST,
  FETCH_APARTMENTS_SUCCESS,
  APPLY_APARTMENTS_FILTER,
  DefaultApartmentsFilter,
  FETCH_FAILURE
} from '../actions';

const apartmentsFilter = (state = DefaultApartmentsFilter, action) => {
  switch (action.type) {
    case APPLY_APARTMENTS_FILTER:
      return { ...action.filter };
    default:
      return state;
  }
};

const apartments = (
  state = {
    byId: {},
    allIds: [],
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_APARTMENTS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_APARTMENTS_SUCCESS:
      return { ...action.apartments, isFetching: false };
    default:
      return state;
  }
};

const error = (state = { msg: '', error: null }, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return { ...state, msg: action.msg, error: action.error };
    default:
      return state;
  }
};

export default combineReducers({
  apartmentsFilter,
  apartments,
  error
});
