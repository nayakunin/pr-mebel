import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

export const SAVE_FORM = 'SUBMIT_FORM';
export const FLUSH_FORM = 'FLUSH_FORM';
export const EMAIL_SENT = 'EMAIL_SENT';

export const saveForm = (content) => (dispatch) => {
  dispatch({
    type: SAVE_FORM,
    payload: content,
  });
};

export const flushForm = () => ({
  type: FLUSH_FORM,
});

export const submitForm = () => async (dispatch, getState) => {
  const firestore = firebase.firestore();
  const storageRef = firebase.storage().ref();

  const {
    email,
    tel,
    name,
    description,
    files,
  } = getState().form;

  const refs = [];

  [...files].forEach((file) => {
    const fileRef = storageRef.child(file.name);
    refs.push(fileRef.getDownloadURL());
  });

  Promise.all(refs).then((fileLinks) => {
    const attachments = fileLinks.map((fileLink, i) => ({
      filename: [...files][i].name,
      path: fileLink,
    }));

    firestore.collection('mail').add({
      to: 'zakaz@pr-mebel.com',
      replyTo: email || '',
      message: {
        subject: `Расчет | ${name} | ${tel}`,
        html: `
          <p><strong>Имя:</strong><br>${name}</p>
          <p><strong>Телефон:</strong><br>${tel}</p>
          ${email && `<p><strong>Почта:</strong><br>${email}</p>`}
          ${description && `<p><strong>Описание:</strong><br>${description}</p>`}
        `,
        attachments,
      },
    }).then(() => {
      dispatch({
        type: EMAIL_SENT,
      });
    });
  });
};
