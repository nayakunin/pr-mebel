import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '../Link/Link';
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
              <Link href="/">Каталог</Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Шкафы классические</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Шкафы современные</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Гардеробные классические</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Гардеробные современные</Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link href="/">
                Преимущества
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Наши материалы</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Комфорт и удобство</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Исключительное качество</Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link href="/">
                О нас
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Почему следует выбрать нас</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Наше производство</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Как заказать нашу мебель</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Часто задаваемые вопросы</Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link href="/">
                Связаться с нами
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Заказать звонок</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Получить проект</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Вызвать дизайнера-замерщика</Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link href="/">Задать вопрос</Link>
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
            <Link href="/">Политика конфиденциальности</Link>
            <span className={classes['vertical-line']}>|</span>
            <Link href="/">Пользовательское соглашение</Link>
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
