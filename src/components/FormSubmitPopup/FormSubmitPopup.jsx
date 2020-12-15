import React, {
  useCallback,
  useEffect,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  submitForm,
  closeFormSubmitPopup,
} from 'actions';
import {
  getFormState,
} from './selectors';
import img from './assets/envelop-icon.svg';

const useStyles = makeStyles({
  root: {
    padding: '40px',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flexGrow: '1',
  },
  text__container: {
    margin: '0',
  },
  text_main: {
    fontWeight: 'bold',
    fontSize: '32px',
    marginBottom: '20px',
  },
  loader: {
    width: '50px',
  },
  icon: {
    display: 'inline-block',
    marginRight: '20px',
    position: 'relative',
    top: '10px',
  },
});

export const FormSubmitPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    files,
    isOpen,
  } = useSelector(getFormState);

  const allUploaded = files.every((file) => file.progress === 100)
    || !files.length;

  const percentageOfUploaded = (files.reduce((acc, curr) => {
    if (curr.progress === 100) {
      return acc + 1;
    }

    return acc;
  }, 0) / files.length) * 100;

  useEffect(() => {
    if (allUploaded && files.length) {
      dispatch(submitForm());
    }
  }, [allUploaded, files, dispatch]);

  const handleClose = useCallback(() => {
    dispatch(closeFormSubmitPopup());
  }, [dispatch]);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <div className={classes.root}>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
        >
          {!allUploaded ? 'Загрузка файлов' : (
            <>
              <img src={img} alt="Почта отправлена" className={classes.icon} />
              <span>
                Письмо отправлено
              </span>
            </>
          )}
        </Typography>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          {!allUploaded ? (
            <CircularProgress
              size={80}
              variant="static"
              value={percentageOfUploaded}
            />
          ) : (
            <Grid item xs={12} className={classes.text__container}>
              <Typography
                align="center"
                className={classes.text_main}
              >
                Спасибо за обращение!
              </Typography>
              <Typography
                align="center"
                className={classes.text_bottom}
              >
                Наши менеджеры обязательно
                <br />
                свяжутся с Вами в блажйшее время.
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </Dialog>
  );
};
