import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';
import {
  BlockTitle,
  MainButton,
} from 'components';
import img from './assets/connect-bg.jpg';

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
    backgroundImage: `url('${img}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px 0',
  },
  title: {
    color: 'white',
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

export const QuestionsForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <BlockTitle>
          <Typography variant="h4" className={classes.title}>
            Остались вопросы?
          </Typography>
        </BlockTitle>
        <form>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6} container>
              <Grid item xs={5}>
                <TextField
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
              <Grid item xs={2} />
              <Grid item xs={5}>
                <TextField
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
              <TextField
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
                {/* TODO Add callback */}
                <MainButton onClick={() => ({})}>Задать вопрос</MainButton>
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
