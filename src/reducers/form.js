import {
  SAVE_FORM,
  EMAIL_SENT,
  OPEN_FORM_SUBMIT_POPUP,
  CLOSE_FORM_SUBMIT_POPUP,
  INIT_FILE_UPLOAD,
  UPDATE_FILE_UPLOAD_PROGRESS,
  SET_ERROR_IN_FILE_UPLOAD,
} from 'actions';

const initialState = {
  isOpen: false,
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
      };
    }
    case INIT_FILE_UPLOAD: {
      return {
        ...state,
        files: [...state.files, {
          name: action.payload,
          progress: 0,
        }],
      };
    }
    case UPDATE_FILE_UPLOAD_PROGRESS: {
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index),
          {
            name: action.payload.name,
            progress: action.payload.progress,
          },
          ...state.files.slice(action.payload.index + 1),
        ],
      };
    }
    case SET_ERROR_IN_FILE_UPLOAD: {
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index),
          {
            name: action.payload.name,
            progress: action.payload.error,
          },
          ...state.files.slice(action.payload.index + 1),
        ],
      };
    }
    case EMAIL_SENT: {
      return {
        ...initialState,
        isOpen: true,
      };
    }
    case OPEN_FORM_SUBMIT_POPUP: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case CLOSE_FORM_SUBMIT_POPUP: {
      return {
        ...state,
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
