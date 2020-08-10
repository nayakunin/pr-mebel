import * as api from '../utils/api';

export const FETCH_CATALOG_REQUEST = 'FETCH_CATALOG_REQUEST';
export const FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS';
export const FETCH_CATALOG_FAILURE = 'FETCH_CATALOG_FAILURE';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const fetchCatalog = () => async (dispatch, getState) => {
  const { filter } = getState().catalog;

  dispatch({
    type: FETCH_CATALOG_REQUEST,
  });

  try {
    const response = await api.fetchCatalogByFilter(filter);

    // TODO Add error handling

    dispatch({
      type: FETCH_CATALOG_SUCCESS,
      payload: response.data.catalogCollection.items,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
