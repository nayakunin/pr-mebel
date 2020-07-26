import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { MainButton } from '../../../../components/MainButton/MainButton';

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
    backgroundImage: 'url("http://placekitten.com/800/800")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px 0',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      background: 'rgba(0,0,0,.5)',
      width: '100%',
      height: '100%',
      content: '""',
      top: '0',
      left: '0',
    },
  },
  title: {
    color: 'white',
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

// TODO Добавить textArea
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
            </Grid>
            <Grid item xs={12} container justify="center" className={classes['button-container']}>
              <Grid item xs={4}>
                <MainButton>Задать вопрос</MainButton>
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
