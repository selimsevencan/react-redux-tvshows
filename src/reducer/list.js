const initialState = {
  data: [],
  loading: false,
  error: null,
};

import {
  FETCH_POPULAR_START,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_FAILED
} from '../actions';


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULAR_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_POPULAR_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    }

    case FETCH_POPULAR_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    }

    default: {
      return state;
    }
  }
}