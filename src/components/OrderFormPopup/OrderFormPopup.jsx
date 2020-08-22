import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  useForm,
} from 'react-hook-form';
import {
  Dialog,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import { getFileDeclination } from 'utils';
import {
  closeOrderFormPopup,
  openFormSubmitPopup,
  saveForm,
  submitForm,
  uploadFiles,
} from 'actions';
import {
  SubmitButton,
} from '../SubmitButton/SubmitButton';
import formTop from './assets/form-top.jpg';
import {
  orderFormPopupSelector,
} from './selectors';

const useStyles = makeStyles({
  content: {
    padding: '20px',
  },
  form: {
    marginTop: '20px',
  },
  input: {
    marginBottom: '15px',
  },
  'input-file': {
    display: 'none',
  },
  img__container: {
    width: '100%',
    position: 'relative',
    paddingTop: '27.17%',
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
  },
  'copyright-link': {
    color: 'black',
  },
  files: {
    marginBottom: '30px',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '5px',
  },
  copy: {
    marginTop: '20px',
  },
});

export const OrderFormPopup = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const fileInputRef = useRef();
  const [fileNames, setFileNames] = useState([]);
  const dispatch = useDispatch();
  const { isOpen } = useSelector(orderFormPopupSelector);

  const handleClosePopup = useCallback(() => {
    dispatch(closeOrderFormPopup());
    fileInputRef.current.value = null;
  }, [dispatch]);

  const handleFileInputClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleFileUploadChange = useCallback(() => {
    setFileNames(fileInputRef.current.files);
  }, [fileInputRef]);

  const onSubmit = useCallback((data) => {
    dispatch(closeOrderFormPopup());
    dispatch(saveForm(data));
    if (fileNames.length) {
      dispatch(uploadFiles(fileNames));
      dispatch(openFormSubmitPopup());
      fileInputRef.current.value = null;
    } else {
      dispatch(submitForm());
    }
  }, [fileNames, fileInputRef, dispatch]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClosePopup}
      fullWidth
      maxWidth="sm"
    >
      <div className={classes.img__container}>
        <img
          className={classes.img}
          src={formTop}
          alt="Картинка в модальном окне"
        />
      </div>
      <Grid container justify="center" className={classes.content}>
        <Typography variant="h5" gutterBottom>
          Расчет стоимости проекта
        </Typography>
        <Grid item xs={10}>
          <Typography variant="body1" align="center">
            Отправьте эскизы, план помещения или просто напишите свои
            пожелания к&nbsp;будущему проекту и&nbsp;мы&nbsp;подготовим
            для Вас индивидуальное предложение
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register}
              name="name"
              type="text"
              autoComplete="name"
              className={classes.input}
              fullWidth
              placeholder="Имя"
              label="Имя"
              required
            />
            <TextField
              inputRef={register}
              name="tel"
              type="tel"
              autoComplete="tel"
              className={classes.input}
              pattern="[7,8]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              fullWidth
              placeholder="Телефон"
              label="Телефон"
              required
            />
            <TextField
              inputRef={register}
              name="email"
              type="email"
              autoComplete="email"
              className={classes.input}
              fullWidth
              placeholder="Почта"
              label="Почта"
              required
            />
            <TextField
              inputRef={register}
              name="description"
              fullWidth
              multiline
              label="Описание"
              required
              variant="outlined"
              placeholder="Описание"
              className={classes.input}
              rows={5}
            />
            <input
              type="file"
              multiple
              ref={fileInputRef}
              className={classes['input-file']}
              onChange={handleFileUploadChange}
            />
            <Grid
              container
              justify="center"
              className={classes.files}
              onClick={handleFileInputClick}
            >
              <Grid item xs={7} container direction="row">
                <PublishIcon className={classes.icon} />
                <Typography>
                  Прикрепить эскизы
                </Typography>
              </Grid>
              {!!fileNames.length && (
                <Grid item xs={5} container justify="center">
                  <Typography>
                    {`${fileNames.length}\xA0${getFileDeclination(fileNames.legnth)}`}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <SubmitButton>
              Рассчитать стоимость
            </SubmitButton>
            <Typography variant="body2" align="center" className={classes.copy}>
              Нажимая кнопку &laquo;Рассчитать стоимость&raquo;,
              я&nbsp;даю согласие на&nbsp;обработку персональных данных и&nbsp;подтверждаю,
              что ознакомлен с&nbsp;
              <a href="/" className={classes['copyright-link']}>пользовательским соглашением</a>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Dialog>
  );
};
