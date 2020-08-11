import * as api from '../utils/api';
import { getCollectionName } from '../utils';

export const FETCH_CATALOG_REQUEST = 'FETCH_CATALOG_REQUEST';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const RESET_CATALOG = 'RESET_CATALOG';

export const fetchCatalog = () => async (dispatch, getState) => {
  const { filter, page } = getState().catalog;

  dispatch({
    type: FETCH_CATALOG_REQUEST,
  });

  try {
    const response = await api.fetchCatalogByFilter(filter, page);

    // TODO Add error handling

    dispatch({
      type: FETCH_CATALOG_SUCCESS,
      payload: response.data[getCollectionName(filter.section)],
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const changePage = (newPage) => ({
  type: CHANGE_PAGE,
  payload: newPage,
});

export const resetCatalog = () => ({
  type: RESET_CATALOG,
});
