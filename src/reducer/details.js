const initialState = {
  data: {},
  loading: false,
  error: null,
};

import {
  FETCH_TVSHOW_START,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILED
} from '../actions/tvshow';


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TVSHOW_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_TVSHOW_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.tvshow]: action.payload.detail,
        },
        loading: false,
      };
    }

    case FETCH_TVSHOW_FAILED: {
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