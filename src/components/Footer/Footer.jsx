import React from 'react';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { openOrderFormPopup } from 'actions';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from 'assets/logo_footer.svg';
import { ReactComponent as Vk } from 'assets/vk.svg';
import { ReactComponent as Fb } from 'assets/fb.svg';
import { ReactComponent as Inst } from 'assets/in.svg';
import { Link } from '../Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    // TODO Добавить цвет в тему
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
  'social__icons-container': {
    marginBottom: '24px',
  },
  social__icon: {
    width: '35px',
    height: '35px',
    '& path': {
      fill: 'white',
    },
    '&:hover path': {
      fill: theme.palette.primary.main,
      transition: 'fill .1s',
    },
  },
  'vertical-line': {
    fontSize: '20px',
    margin: '0 8px',
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container justify="center" className={classes['logo-container']}>
          <Grid item>
            <Logo />
            <Typography align="center" className={classes.subtitle}>
              Салон мебели премиум класса
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link
                to="/catalog"
              >
                Каталог
              </Link>
            </Typography>
            {/* TODO Add search requests for catalog page */}
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/catalog/"
                    className={classes.list__item}
                  >
                    Шкафы классические
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/"
                    className={classes.list__item}
                  >
                    Шкафы современные
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/"
                    className={classes.list__item}
                  >
                    Гардеробные классические
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/"
                    className={classes.list__item}
                  >
                    Гардеробные современные
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link
                to="/#advantages"
              >
                Преимущества
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#advantages"
                    className={classes.list__item}
                  >
                    Наши материалы
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#comfort"
                    className={classes.list__item}
                  >
                    Комфорт и удобство
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#quality"
                    className={classes.list__item}
                  >
                    Исключительное качество
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes['column-title']}>
              <Link
                to="/#about"
              >
                О нас
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.list__item}>
                  <Link
                    to="/#about"
                    className={classes.list__item}
                  >
                    Почему следует выбрать нас
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#production"
                    className={classes.list__item}
                  >
                    Наше производство
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#how-to-order"
                    className={classes.list__item}
                  >
                    Как заказать нашу мебель
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#faq"
                    className={classes.list__item}
                  >
                    Часто задаваемые вопросы
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            {/* TODO Add popup with feedback form */}
            <Typography className={classes['column-title']}>
              <Link
                asButton
                onClick={() => dispatch(openOrderFormPopup())}
              >
                Связаться с нами
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom>
                  <Link
                    asButton
                    className={classes.list__item}
                    onClick={() => dispatch(openOrderFormPopup())}
                  >
                    Заказать звонок
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    asButton
                    className={classes.list__item}
                    onClick={() => dispatch(openOrderFormPopup())}
                  >
                    Получить проект
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    asButton
                    className={classes.list__item}
                    onClick={() => dispatch(openOrderFormPopup())}
                  >
                    Вызвать дизайнера замерщика
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#questions"
                    className={classes.list__item}
                  >
                    Задать вопрос
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        {/* TODO consider adding contacts here */}
        <Grid container alignItems="center" direction="column" className={classes.social}>
          <Typography className={classes.social__title}>
            Мы в соц.сетях
          </Typography>
          {/* TODO Add links to socials */}
          <Grid item xs={4} container className={classes['social__icons-container']}>
            <Grid item xs={4} container justify="center">
              <a href="/">
                <Vk className={classes.social__icon} />
              </a>
            </Grid>
            <Grid item xs={4} container justify="center">
              <a href="/">
                <Inst className={classes.social__icon} />
              </a>
            </Grid>
            <Grid item xs={4} container justify="center">
              <a href="/">
                <Fb className={classes.social__icon} />
              </a>
            </Grid>
          </Grid>
          {/* TODO Add links to copyright */}
          <Typography variant="body2">
            <Link to="/" external>Политика конфиденциальности</Link>
            <span className={classes['vertical-line']}>|</span>
            <Link to="/" external>Пользовательское соглашение</Link>
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
