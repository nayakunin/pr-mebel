import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublishIcon from '@material-ui/icons/Publish';
import { getFileDeclination } from 'utils';
import { closeOrderFormPopup } from 'actions';
import MainButton from '../MainButton/MainButton';
import formTop from './assets/form-top.jpg';
import {
  orderFormPopupSelector,
} from './selectors';

const useStyles = makeStyles({
  root: {

  },
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
  img: {
    height: '160px',
  },
  'copyright-link': {
    color: 'black',
  },
  files: {
    marginBottom: '30px',
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
  const fileInputRef = useRef();
  const [fileNames, setFileNames] = useState([]);
  const dispatch = useDispatch();
  const { isOpen } = useSelector(orderFormPopupSelector);

  const handleClosePopup = useCallback(() => {
    dispatch(closeOrderFormPopup());
  }, [dispatch]);

  const handleFileInputClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleFileUploadChange = useCallback(() => {
    setFileNames(fileInputRef.current.files);
  }, [fileInputRef]);

  return ReactDOM.createPortal(
    <Dialog
      open={isOpen}
      onClose={handleClosePopup}
      maxWidth="sm"
      className={classes.root}
    >
      <img
        className={classes.img}
        src={formTop}
        alt="Картинка в модальном окне"
      />
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
        {/* TODO Вынести инпуты в отдельный компонент */}
        <Grid item xs={8}>
          <form className={classes.form}>
            <TextField
              type="text"
              autoComplete="name"
              className={classes.input}
              fullWidth
              placeholder="Имя"
              required
            />
            <TextField
              type="tel"
              autoComplete="tel"
              pattern="[7,8]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              className={classes.input}
              fullWidth
              placeholder="Телефон"
              required
            />
            <TextField
              type="mail"
              autoComplete="email"
              className={classes.input}
              fullWidth
              placeholder="E-mail"
              required
            />
            <TextField
              fullWidth
              multiline
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
              <Grid item xs={6} container>
                <PublishIcon className={classes.icon} />
                <Typography>
                  Прикрепить эскизы
                </Typography>
              </Grid>
              {!!fileNames.length && (
                <Grid item xs={6} container justify="center">
                  <Typography>
                    {`${fileNames.length}\xA0${getFileDeclination(fileNames.legnth)}`}
                  </Typography>
                </Grid>
              )}
            </Grid>
            {/* TODO Добавить callback */}
            <MainButton onClick={() => ({})}>
              Рассчитать стоимость
            </MainButton>
            <Typography variant="body2" align="center" className={classes.copy}>
              Нажимая кнопку &laquo;Рассчитать стоимость&raquo;,
              я&nbsp;даю согласие на&nbsp;обработку персональных данных и&nbsp;подтверждаю,
              что ознакомлен с&nbsp;
              <a href="/" className={classes['copyright-link']}>пользовательским соглашением</a>
            </Typography>
          </form>
        </Grid>
      </Grid>
    </Dialog>,
    document.getElementById('modal'),
  );
};