import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { MainButton } from '../../../../components/MainButton/MainButton';

const useStyles = makeStyles({
  root: {
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
  publish: {
    cursor: 'pointer',
  },
  icon: {
    color: 'red',
    width: '30px',
    height: '30px',
  },
  text_publish: {
    color: 'white',
    fontSize: '16px',
    lineHeight: '16px',
    marginLeft: '4px',
  },
  'copyright-link': {
    color: 'white',
  },
});

// TODO Добавить обработку загрузки файлов
export const FeedbackForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <form className={classes.form}>
          <Grid container spacing={4}>
            <Grid item xs={6} container spacing={4}>
              <Grid item xs={6}>
                <input className={classes.input} placeholder="Имя" />
              </Grid>
              <Grid item xs={6}>
                <input className={classes.input} placeholder="Телефон" />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.text}>
                  Прикрепите, пожалуйста, эскизы вашей мебели или просто план помещения
                  с&nbsp;описанием ваших пожеланий и&nbsp;наш дизайнер
                  в&nbsp;кратчайшие сроки подготовит для вас свои предложения.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container>
              <Grid item xs={3} container direction="row" className={classes.publish}>
                <PublishIcon className={classes.icon} />
                <Typography className={classes.text_publish}>
                  Прикрепить
                  <br />
                  эскизы
                </Typography>
              </Grid>
              {/* <Grid item xs={9}>

              </Grid> */}
            </Grid>
            <Grid item xs={12} container justify="center">
              <Grid item xs={4}>
                <MainButton>Рассчитать стоимость</MainButton>
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
