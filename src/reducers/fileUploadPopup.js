import {
  UPDATE_FILE_UPLOAD_PROGRESS,
  INIT_FILE_UPLOAD_STATE,
  SET_ERROR_IN_FILE_UPLOAD,
  CLOSE_FILE_UPLOAD_POPUP,
  OPEN_FILE_UPLOAD_POPUP,
} from 'actions';

const initialState = {
  isOpen: false,
  files: [],
};

export const fileUploadPopup = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FILE_UPLOAD_POPUP: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case INIT_FILE_UPLOAD_STATE: {
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
    case CLOSE_FILE_UPLOAD_POPUP: {
      return {
        ...state,
        files: [],
        isOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};
