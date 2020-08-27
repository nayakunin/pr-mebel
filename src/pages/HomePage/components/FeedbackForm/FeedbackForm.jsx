import React, {
  useRef,
  useCallback,
  useState,
} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography,
  TextField,
  Hidden,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  saveForm,
  submitForm,
  openFormSubmitPopup,
  uploadFiles,
} from 'actions';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  SubmitButton,
} from 'components';
import { getFileDeclination } from 'utils';
import { NB_SP } from '__constants__';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[900],
    padding: '63px 0',
  },
  input__inner: {
    color: 'white',
    '&:placeholder': {
      color: 'white',
    },
  },
  input__root: {
    '&:hover&:before,&:before': {
      borderColor: 'white',
    },
  },
  input_outline: {
    borderColor: 'white',
  },
  input__label: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '100',
    lineHeight: '14px',
  },
  publish: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  icon: {
    color: theme.palette.primary.main,
    width: '30px',
    height: '30px',
  },
  text_publish: {
    color: 'white',
    fontWeight: '300',
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '14px',
    marginLeft: '4px',
  },
  copy__text: {
    color: 'white',
    fontSize: '12px',
    fontWeight: '100',
    lineHeight: '12px',
  },
  'copyright-link': {
    color: 'white',
  },
  'input-file': {
    display: 'none',
  },
  'button-container': {
    marginTop: '36px',
    marginBottom: '24px',
  },
  filenames: {
    color: 'white',
    fontWeight: '300',
  },
  'delete-icon': {
    width: '30px',
    height: '30px',
    right: '30px',
    top: '13px',
    position: 'absolute',
    color: 'white',
    cursor: 'pointer',
  },
  'file-upload__container': {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px',
    },
  },
}));

export const FeedbackForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [fileNames, setFileNames] = useState([]);

  const handleFileInputClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleFileUploadChange = useCallback(() => {
    const { files } = fileInputRef.current;
    const names = [];

    for (let i = 0; i < files.length; i++) {
      if (i > 2) {
        names.push(`и еще ${files.length - i}${NB_SP}${getFileDeclination(files.length - i)}`);
        break;
      }
      names.push(files[i].name);
    }

    setFileNames(names);
  }, [fileInputRef]);

  const handleClearFiles = useCallback(() => {
    fileInputRef.current.value = null;
    setFileNames([]);
  }, [fileInputRef]);

  const onSubmit = useCallback((data) => {
    dispatch(saveForm(data));
    if (fileNames.length) {
      dispatch(uploadFiles(fileInputRef.current.files));
      dispatch(openFormSubmitPopup());
      fileInputRef.current.value = null;
      setFileNames([]);
    } else {
      dispatch(submitForm());
    }
    reset();
  }, [reset, fileNames, fileInputRef, dispatch]);

  return (
    <div className={classes.root}>
      <Container>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container justify="center">
            <Grid
              item
              xs={8}
              sm={6}
              container
              direction={smDown ? 'column' : 'row'}
              spacing={smDown ? 2 : 4}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <TextField
                  inputRef={register}
                  name="name"
                  type="text"
                  autoComplete="name"
                  InputProps={{
                    classes: {
                      root: classes.input__root,
                      input: classes.input__inner,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.input__label,
                    },
                  }}
                  fullWidth
                  placeholder="Имя"
                  label="Имя"
                  required
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <TextField
                  inputRef={register}
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  InputProps={{
                    classes: {
                      root: classes.input__root,
                      input: classes.input__inner,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.input__label,
                    },
                  }}
                  pattern="[7,8]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  fullWidth
                  placeholder="Телефон"
                  label="Телефон"
                  required
                />
              </Grid>
              <Hidden smDown>
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="body2" className={classes.text}>
                    Прикрепите, пожалуйста, эскизы вашей мебели или просто план помещения
                    с&nbsp;описанием ваших пожеланий и&nbsp;наш дизайнер
                    в&nbsp;кратчайшие сроки подготовит для вас свои предложения.
                  </Typography>
                </Grid>
              </Hidden>
            </Grid>
            <Grid item xs={0} sm={1} />
            <Grid
              item
              xs={8}
              sm={5}
              container
              spacing={4}
              className={classes['file-upload__container']}
            >
              <Grid
                item
                xs={12}
              >
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
              <Grid item xs={12} className={classes['file-name__container']}>
                {fileNames.map((file, i) => (
                  <>
                    <Typography
                      key={file}
                      variant="body2"
                      display="inline"
                      className={classes.filenames}
                    >
                      {file}
                    </Typography>
                    {i !== fileNames.length - 1 && (
                      <Typography
                        variant="body2"
                        display="inline"
                        className={classes.filenames}
                      >
                        {', '}
                      </Typography>
                    )}
                  </>
                ))}
              </Grid>
              {!!fileNames.length && (
                <DeleteIcon className={classes['delete-icon']} onClick={handleClearFiles} />
              )}
            </Grid>
            <Grid item xs={12} container justify="center" className={classes['button-container']}>
              <Grid item xs={8} sm={6} md={4}>
                <SubmitButton>Рассчитать стоимость</SubmitButton>
              </Grid>
            </Grid>
            <Grid item xs container justify="center">
              <Grid item xs={12} sm={8} md={6}>
                <Typography className={classes.copy__text} align="center">
                  Нажимая кнопку &laquo;Рассчитать стоимость&raquo;,
                  я&nbsp;даю согласие на&nbsp;обработку персональных данных и&nbsp;подтверждаю,
                  что ознакомлен с&nbsp;
                  <a href="/" className={classes['copyright-link']}>пользовательским соглашением</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};
