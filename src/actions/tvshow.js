export const FETCH_TVSHOW_START = 'FETCH_TVSHOW_START';
export const FETCH_TVSHOW_SUCCESS = 'FETCH_TVSHOW_SUCCESS';
export const FETCH_TVSHOW_FAILED = 'FETCH_TVSHOW_FAILED';

import { api } from '../config';

export function createFetchTVShow(tvshow) {
  const url =`${api}show-details?q=${tvshow}`;

  return function (dispatch) {
    dispatch({
      type: FETCH_TVSHOW_START,
      payload: {},
    });

    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: FETCH_TVSHOW_SUCCESS,
          payload: {
            tvshow: tvshow,
            detail: response.tvShow
          }
        })
      })
      .catch(error => {
        dispatch({
          type: FETCH_TVSHOW_FAILED,
          payload: {
            error
          }
        })
      })
  }
}