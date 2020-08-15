import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CHANGE_FILTER,
  CHANGE_PAGE,
  RESET_CATALOG,
  OPEN_CARD_POPUP,
  CLOSE_CARD_POPUP,
  GO_TO_NEXT_CARD,
  GO_TO_PREV_CARD,
} from 'actions';
import { filters } from '__constants__';

const initialState = {
  items: [],
  isLoading: false,
  filter: {
    section: filters.sections[0].id,
    style: filters.styles[0].id,
    doorType: filters.styles[0].id,
  },
  hasMore: 0,
  page: 0,
  currentItemId: 0,
  isCardPopupOpen: false,
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
        isLoading: false,
        hasMore: total,
      };
    }
    case FETCH_CATALOG_FAILURE: {
      return {
        ...state,
        items: [],
        isLoading: false,
        hasMore: 0,
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
        items: [],
        page: 0,
        hasMore: 0,
      };
    }
    case OPEN_CARD_POPUP: {
      return {
        ...state,
        currentItemId: action.payload,
        isCardPopupOpen: true,
      };
    }
    case CLOSE_CARD_POPUP: {
      return {
        ...state,
        currentItemId: 0,
        isCardPopupOpen: false,
      };
    }
    case GO_TO_NEXT_CARD: {
      return {
        ...state,
        currentItemId: state.currentItemId + 1,
      };
    }
    case GO_TO_PREV_CARD: {
      return {
        ...state,
        currentItemId: state.currentItemId - 1,
      };
    }
    default: {
      return state;
    }
  }
};
