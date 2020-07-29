import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import { MainButton } from '../../../../components/MainButton/MainButton';

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    background: '#303030',
    padding: '80px 0',
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
  text: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '100',
    lineHeight: '100%',
  },
  'button-container': {
    marginTop: '36px',
    marginBottom: '24px',
  },
  'copyright-link': {
    color: 'white',
  },
});

export const CallDesignerForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <form>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6} container>
              <Grid item xs={5}>
                <input
                  type="text"
                  autoComplete="name"
                  className={classes.input}
                  placeholder="Имя"
                  required
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
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
                {/* TODO Add callback */}
                <MainButton onClick={() => ({})}>Рассчитать стоимость</MainButton>
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
