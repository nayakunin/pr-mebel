import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CHANGE_FILTER,
} from '../actions/catalog';
import { filters } from '../constants/filters';

const initialState = {
  items: [],
  hasMore: false,
  isLoading: false,
  filter: {
    section: filters.sections[0].id,
    style: filters.styles[0].id,
    doorType: filters.styles[0].id,
  },
};

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST: {
      return {
        ...state,
        items: [],
        hasMore: false,
        isLoading: true,
      };
    }
    case FETCH_CATALOG_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        // TODO Add hasMore
        hasMore: true,
        isLoading: false,
      };
    }
    case FETCH_CATALOG_FAILURE: {
      return {
        ...state,
        items: [],
        hasMore: false,
        isLoading: false,
        // TODO Add error handling
        isError: true,
      };
    }
    case CHANGE_FILTER: {
      const { name, value } = action.payload;

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };
    }
    default: {
      return state;
    }
  }
};
