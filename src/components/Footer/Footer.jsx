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
    marginTop: '80px',
    background: theme.palette.grey[900],
    padding: '80px 0',
    color: 'white',
  },
  logo: {
    width: '100%',
  },
  logoContainer: {
    marginBottom: '48px',
  },
  subtitle: {
    marginTop: '3px',
    textTransform: 'uppercase',
  },
  columnTitle: {
    fontSize: '18px',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    fontSize: '14px',
  },
  social: {
    marginTop: '40px',
  },
  socialTitle: {
    fontSize: '24px',
    marginBottom: '24px',
  },
  socialIconsContainer: {
    marginBottom: '24px',
  },
  socialIcon: {
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
  verticalLine: {
    fontSize: '20px',
    margin: '0 8px',
  },

  [theme.breakpoints.down('md')]: {
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  [theme.breakpoints.down('xs')]: {
    list: {
      display: 'none',
    },
    logoContainer: {
      width: '290px',
      margin: '0 auto 48px',
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container justify="center" className={classes.logoContainer}>
          <Grid item xs={12}>
            <Link to="/">
              <Logo className={classes.logo} />
            </Link>
            <Typography align="center" className={classes.subtitle}>
              Салон мебели премиум класса
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} container direction="column" alignItems="center">
            <Typography className={classes.columnTitle}>
              <Link
                to="/catalog"
              >
                Каталог
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography variant="body1" gutterBottom>
                  <Link
                    to="/catalog?section=cupboard&style=classic"
                    className={classes.listItem}
                  >
                    Шкафы классические
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/catalog?section=cupboard&style=modern"
                    className={classes.listItem}
                  >
                    Шкафы современные
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/catalog?section=wardrobe&style=classic"
                    className={classes.listItem}
                  >
                    Гардеробные классические
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/catalog?section=wardrobe&style=modern"
                    className={classes.listItem}
                  >
                    Гардеробные современные
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} container direction="column" alignItems="center">
            <Typography className={classes.columnTitle}>
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
                    className={classes.listItem}
                  >
                    Наши материалы
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#comfort"
                    className={classes.listItem}
                  >
                    Комфорт и удобство
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#quality"
                    className={classes.listItem}
                  >
                    Исключительное качество
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} container direction="column" alignItems="center">
            <Typography className={classes.columnTitle}>
              <Link
                to="/#about"
              >
                О нас
              </Link>
            </Typography>
            <ul className={classes.list}>
              <li>
                <Typography gutterBottom className={classes.listItem}>
                  <Link
                    to="/#about"
                    className={classes.listItem}
                  >
                    Почему следует выбрать нас
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#production"
                    className={classes.listItem}
                  >
                    Наше производство
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#how-to-order"
                    className={classes.listItem}
                  >
                    Как заказать нашу мебель
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  <Link
                    to="/#faq"
                    className={classes.listItem}
                  >
                    Часто задаваемые вопросы
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} container direction="column" alignItems="center">
            <Typography className={classes.columnTitle}>
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
                    className={classes.listItem}
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
                    className={classes.listItem}
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
                    className={classes.listItem}
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
                    className={classes.listItem}
                  >
                    Задать вопрос
                  </Link>
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container alignItems="center" direction="column" className={classes.social}>
          <Typography variant="body1">
            <Link to="tel:+7(495)2780285" external>
              +7 (495) 278-02-85
            </Link>
          </Typography>
          <Typography variant="body1" className={classes.address}>
            м. Сокол, ул. Балтийская, д.9. С 10:00 до 20:00
          </Typography>
          <Typography className={classes.socialTitle}>
            Мы в соц.сетях
          </Typography>
          <Grid item xs={4} container className={classes.socialIconsContainer}>
            <Grid item xs={4} container justify="center">
              <a href="https://vk.com/public185518769">
                <Vk className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item xs={4} container justify="center">
              <a href="https://www.instagram.com/pr_mebel.ru/">
                <Inst className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item xs={4} container justify="center">
              <a href="https://www.facebook.com/%D0%A7%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%D1%80-108136607213942">
                <Fb className={classes.socialIcon} />
              </a>
            </Grid>
          </Grid>
          <Typography variant="body2" gutterBottom>
            <Link to="https://docs.google.com/document/d/1KSM18JIPpeT6weSQaG3dgpTEC9MO3wvxYWsrF2A6CZE/edit" external>Политика конфиденциальности</Link>
            <span className={classes.verticalLine}>|</span>
            <Link to="https://docs.google.com/document/d/1KSM18JIPpeT6weSQaG3dgpTEC9MO3wvxYWsrF2A6CZE/edit" external>Пользовательское соглашение</Link>
          </Typography>
          <Typography variant="body2" align="center">
            &copy; Частный Мебельер
            <span className={classes.verticalLine}>|</span>
            2020 Все права защищены законом.
            {' '}
            Копирование и цитирование только с письменного разрешения автора.
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};
