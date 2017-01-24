export const FETCH_POPULAR_START = 'FETCH_POPULAR_START';
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const FETCH_POPULAR_FAILED = 'FETCH_POPULAR_FAILED';

import { api } from '../config';

export function createFetchPopular() {
  const url =`${api}most-popular?page=1`;

  return function (dispatch) {
    dispatch({
      type: FETCH_POPULAR_START,
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: FETCH_POPULAR_SUCCESS,
          payload: {
            data: response.tv_shows
          }
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_POPULAR_FAILED,
          payload: {
            error
          }
        })
      })
  }
}