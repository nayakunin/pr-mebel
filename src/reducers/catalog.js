import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  CHANGE_FILTER,
  CHANGE_PAGE,
  RESET_CATALOG,
  OPEN_CARD_POPUP,
  CLOSE_CARD_POPUP,
  OPEN_FEEDBACK_FORM_POPUP,
  CLOSE_FEEDBACK_FORM_POPUP,
  GO_TO_NEXT_CARD,
  GO_TO_PREV_CARD,
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
  currentItemId: 0,
  isCardPopupOpen: false,
  isFeedbackFormPopupOpen: false,
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
    case OPEN_FEEDBACK_FORM_POPUP: {
      return {
        ...state,
        isFeedbackFormPopupOpen: true,
      };
    }
    case CLOSE_FEEDBACK_FORM_POPUP: {
      return {
        ...state,
        isFeedbackFormPopupOpen: false,
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
