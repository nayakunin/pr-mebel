import {
  SAVE_FORM,
  FLUSH_FORM,
} from 'actions';

const initialState = {
  name: '',
  tel: '',
  email: '',
  description: '',
  files: [],
};

export const form = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM: {
      return {
        ...state,
        name: action.payload.name || '',
        tel: action.payload.tel || '',
        email: action.payload.email || '',
        description: action.payload.description || '',
        files: action.payload.files.length ? action.payload.files : [],
      };
    }
    case FLUSH_FORM: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
