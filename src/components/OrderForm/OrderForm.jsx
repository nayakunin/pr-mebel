import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  Dialog,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import cx from 'classnames';
import PublishIcon from '@material-ui/icons/Publish';
import formTop from './assets/form-top.jpg';
import { getFileDeclination } from '../../utils';
import { MainButton } from '../MainButton/MainButton';

const useStyles = makeStyles({
  root: {

  },
  input: {
    width: '100%',
    color: 'white',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid white',
    boxSizing: 'border-box',
    padding: '8px',
    '&:focus': {
      outline: 'none',
    },
  },
});

export const OrderForm = () => {
  const classes = useStyles();
  const fileInputRef = useRef();
  const [fileNames, setFileNames] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const handleFileInputClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleFileUploadChange = useCallback(() => {
    const { files } = fileInputRef.current;
    const names = [];

    for (let i = 0; i < files.length; i++) {
      if (i > 2) {
        names.push(`И еще ${files.length - i} ${getFileDeclination(files.length - i)}`);
        break;
      }
      names.push(files[i].name);
    }

    setFileNames(names);
  }, [fileInputRef]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  });

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="lg"
      className={classes.root}
    >
      <img src={formTop} alt="Картинка в модальном окне" />
      <Grid container justify="center">
        <Typography>
          Расчет стоимости проекта
        </Typography>
        <Typography>
          Отправьте эскизы, план помещения или просто напишите свои
          пожелания к&nbsp;будущему проекту и&nbsp;мы&nbsp;подготовим
          для Вас индивидуальное предложение
        </Typography>
        {/* TODO Вынести инпуты в отдельный компонент */}
        <form>
          <Grid item xs={6}>
            <input
              type="text"
              autoComplete="name"
              className={classes.input}
              placeholder="Имя"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <input
              type="tel"
              autoComplete="tel"
              pattern="[7,8]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              className={classes.input}
              placeholder="Телефон"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <input
              type="mail"
              autoComplete="mail"
              className={classes.input}
              placeholder="E-mail"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <textarea />
          </Grid>
          <Grid item xs={6}>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              className={classes['input-file']}
              onChange={handleFileUploadChange}
            />
            <div onClick={handleFileInputClick} className={classes.publish}>
              <PublishIcon className={classes.icon} />
              <Typography className={classes.text_publish}>
                Прикрепить
                <br />
                эскизы
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            {/* TODO Добавить callback */}
            <MainButton onClick={() => ({})}>
              Рассчитать стоимость
            </MainButton>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.text} align="center">
              Нажимая кнопку &laquo;Рассчитать стоимость&raquo;,
              я&nbsp;даю согласие на&nbsp;обработку персональных данных и&nbsp;подтверждаю,
              что ознакомлен с&nbsp;
              <a href="/" className={classes['copyright-link']}>пользовательским соглашением</a>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </Dialog>
  );
};
