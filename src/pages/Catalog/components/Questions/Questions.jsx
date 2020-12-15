import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  saveForm,
  submitForm,
} from 'actions';
import {
  BlockTitle,
  SubmitButton,
} from 'components';
import img from './assets/questions-bg.jpg';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url('${img}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 0',
  },
  title: {
    color: 'white',
  },
  subtitle: {
    margin: '40px 0',
    color: 'white',
  },
  input__container: {
    marginBottom: '15px',
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
  textarea: {
    marginTop: '20px',
  },
  container: {
    position: 'relative',
    zIndex: '10',
  },
  text: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '100',
    lineHeight: '100%',
  },
  'copyright-link': {
    color: 'white',
  },
  'button-container': {
    marginTop: '36px',
    marginBottom: '24px',
  },
});

export const Questions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = useCallback((data) => {
    dispatch(saveForm(data));
    dispatch(submitForm());
    reset();
  }, [reset, dispatch]);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <BlockTitle>
          <Typography variant="h4" className={classes.title} gutterBottom>
            Остались вопросы? Задайте их тут!
          </Typography>
        </BlockTitle>
        <Typography className={classes.subtitle} gutterBottom>
          А&nbsp;если вы&nbsp;хотите получить расчет конкретной модели,
          прикрепите свои эскизы или план помещения с&nbsp;описанием
          пожеланий и&nbsp;наш дизайнер в&nbsp;кротчайшие
          сроки подготовит для вас предложение!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6} container>
              <Grid item xs={12} className={classes.input__container}>
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
              <Grid item xs={12} className={classes.input__container}>
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
              <Grid item xs={12} className={classes.input__container}>
                <TextField
                  inputRef={register}
                  name="email"
                  type="email"
                  autoComplete="email"
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
                  placeholder="E-mail"
                  label="E-mail"
                  required
                />
              </Grid>
              <TextField
                inputRef={register}
                name="description"
                fullWidth
                multiline
                className={classes.textarea}
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
                variant="filled"
                placeholder="Описание"
                label="Описание"
                rows={5}
              />
            </Grid>
            <Grid item xs={12} container justify="center" className={classes['button-container']}>
              <Grid item xs={4}>
                <SubmitButton>
                  Задать вопрос
                </SubmitButton>
              </Grid>
            </Grid>
            <Grid item xs container justify="center">
              <Grid item xs={6}>
                <Typography className={classes.text} align="center">
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
