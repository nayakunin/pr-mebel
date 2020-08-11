import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CHANGE_FILTER,
  CHANGE_PAGE,
  RESET_CATALOG,
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
  total: 0,
  page: 0,
};

export const catalog = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_CATALOG_SUCCESS: {
      const { items, total } = action.payload;
      return {
        ...state,
        items: [...state.items, ...items],
        total,
        isLoading: false,
        hasMore: state.items.length + items.length !== total,
      };
    }
    case FETCH_CATALOG_FAILURE: {
      return {
        ...state,
        items: [],
        isLoading: false,
        hasMore: false,
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
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case RESET_CATALOG: {
      return {
        ...state,
        total: 0,
        items: [],
        page: 0,
        hasMore: false,
      };
    }
    default: {
      return state;
    }
  }
};
