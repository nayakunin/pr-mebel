import React, {
  useCallback,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  Grid,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  submitForm,
  closeFileUploadPopup,
} from 'actions';
import {
  getFileLoadingPopupState,
} from './selectors';
import { BlockTitle } from '../BlockTitle/BlockTitle';
import MainButton from '../MainButton/MainButton';

const useStyles = makeStyles({
  root: {
    padding: '40px',
  },
  title: {
    marginLeft: '40px',
    marginTop: '20px',
    width: '100%',
  },
  button: {
    marginTop: '20px',
  },
});

export const FileUploadPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    files,
    isOpen,
  } = useSelector(getFileLoadingPopupState);

  const allUploaded = files.every((file) => file.progress === 100);

  // TODO Delete uploaded files on cancel
  const handelClose = useCallback(() => {
    dispatch(closeFileUploadPopup());
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(submitForm());
    dispatch(closeFileUploadPopup());
  }, [dispatch]);

  return (
    <Dialog
      open={isOpen}
      onClose={handelClose}
    // maxWidth="sm"
    >
      <div className={classes.title}>
        <BlockTitle>
          <Typography
            variant="h5"
            gutterBottom
          >
            {!allUploaded ? 'Загрузка файлов' : 'Готово к отправке'}
          </Typography>
        </BlockTitle>
      </div>
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.root}
      >
        {files.map((file) => (
          <Grid item xs={10} key={file.name}>
            <Typography>{file.name}</Typography>
            <LinearProgress variant="determinate" value={file.progress} />
          </Grid>
        ))}
        <Grid item xs={8} className={classes.button}>
          <MainButton
            disabled={!allUploaded}
            onClick={handleSubmit}
          >
            Отправить
          </MainButton>
        </Grid>
      </Grid>
    </Dialog>
  );
};
