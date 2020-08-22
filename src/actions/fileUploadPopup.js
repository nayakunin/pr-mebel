import firebase from 'firebase';
import 'firebase/storage';

export const OPEN_FILE_UPLOAD_POPUP = 'OPEN_FILE_UPLOAD_POPUP';
export const INIT_FILE_UPLOAD_STATE = 'INIT_FILE_UPLOAD_STATE';
export const UPDATE_FILE_UPLOAD_PROGRESS = 'UPDATE_FILE_UPLOAD_PROGRESS';
export const SET_ERROR_IN_FILE_UPLOAD = 'SET_ERROR_IN_FILE_UPLOAD';
export const CLOSE_FILE_UPLOAD_POPUP = 'CLOSE_FILE_UPLOAD_POPUP';

export const openFileUploadPopup = () => (dispatch, getState) => {
  dispatch({
    type: OPEN_FILE_UPLOAD_POPUP,
  });

  const { files } = getState().form;
  const storageRef = firebase.storage().ref();

  const filesArray = [...files];

  filesArray.forEach((file) => {
    dispatch({
      type: INIT_FILE_UPLOAD_STATE,
      payload: file.name,
    });
  });

  filesArray.forEach(async (file, index) => {
    const imageRef = storageRef.child(file.name);

    const uploadTask = imageRef.put(file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      dispatch({
        type: UPDATE_FILE_UPLOAD_PROGRESS,
        payload: {
          index,
          name: file.name,
          progress,
        },
      });
    }, (error) => {
      dispatch({
        type: SET_ERROR_IN_FILE_UPLOAD,
        payload: {
          index,
          name: file.name,
          error,
        },
      });
    });
  });
};

export const closeFileUploadPopup = () => ({
  type: CLOSE_FILE_UPLOAD_POPUP,
});
