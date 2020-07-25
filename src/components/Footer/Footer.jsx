import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './resources/footer-logo.svg';

const useStyles = makeStyles({
  root: {
    background: '#303030',
    padding: '80px 0',
    color: 'white',
  },
  'logo-container': {
    marginBottom: '48px',
  },
  subtitle: {
    marginTop: '3px',
    textTransform: 'uppercase',
  },
  'column-title': {
    fontSize: '18px',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    transition: 'color .2s',
    '&:hover': {
      color: 'red',
    },
  },
  list__item: {
    fontSize: '14px',
  },
  social: {
    marginTop: '40px',
  },
  social__title: {
    fontSize: '24px',
    marginBottom: '24px',
  },
  social__icons: {
    marginBottom: '24px',
  },
  'vertical-line': {
    fontSize: '20px',
    margin: '0 8px',
  },
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container justify="center" className={classes['logo-container']}>
          <Grid item>
            <img src={logo} alt="logo" />
            <Typography align="center" className={classes.subtitle}>
              Салон мебели премиум класса
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <a href="/" className={classes.link}>
                Каталог
              </a>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Шкафы классические</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Шкафы современные</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Гардеробные классические</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Гардеробные современные</a>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <a href="/" className={classes.link}>
                Преимущества
              </a>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Наши материалы</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Комфорт и удобство</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Исключительное качество</a>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <a href="/" className={classes.link}>
                О нас
              </a>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Почему следует выбрать нас</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Наше производство</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Как заказать нашу мебель</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Часто задаваемые вопросы</a>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <a href="/" className={classes.link}>
                Связаться с нами
              </a>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Заказать звонок</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Получить проект</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Вызвать дизайнера-замерщика</a>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <a href="/" className={classes.link}>Задать вопрос</a>
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container alignItems="center" direction="column" className={classes.social}>
          <Typography className={classes.social__title}>
            Мы в соц.сетях
          </Typography>
          <Grid item xs={4} container className={classes.social__icons}>
            <Grid item xs={4} container justify="center">
              vk
            </Grid>
            <Grid item xs={4} container justify="center">
              inst
            </Grid>
            <Grid item xs={4} container justify="center">
              fb
            </Grid>
          </Grid>
          <Typography variant="body2">
            <a href="/" className={classes.link}>Политика конфиденциальности</a>
            <span className={classes['vertical-line']}>|</span>
            <a href="/" className={classes.link}>Пользовательское соглашение</a>
          </Typography>
          <Typography>
            &copy; Частный Мебельер
            <span className={classes['vertical-line']}>|</span>
            2020 Все права защищены законом.
            {' '}
            Копирование и цитирование только с письменного разрешения автора.
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};
