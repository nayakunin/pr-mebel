import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { BlockTitle } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '80px 0',
  },
  content: {
    marginTop: '40px',
  },
  subtitle: {
    margin: '20px 0',
  },
  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },
  list__item: {
    marginTop: '6px',
    position: 'relative',
    paddingLeft: '30px',
  },
  icon: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    left: '0',
    top: '2px',
    color: 'grey',
  },
  link: {
    '&:hover,&:focus': {
      textDecoration: 'none',
    },
  },
  link_black: {
    color: 'black',
  },
  link_grey: {
    color: 'grey',
  },
  link_red: {
    color: theme.palette.primary.main,
  },
}));

export const Map = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Приезжайте к нам в гости!
          </Typography>
        </BlockTitle>
        <Grid container className={classes.content}>
          <Grid item xs={5}>
            <Typography>
              Мы&nbsp;с&nbsp;удовольствием покажем весь ассортимент
              нашей мебели и&nbsp;поможем вам сделать правильный выбор.
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Салон &ldquo;ЧАСТНЫЙ МЕБЕЛЬЕР&ldquo;
            </Typography>
            <ul className={cx(classes['list-contacts'], classes.list)}>
              <li className={cx(classes['list-contacts__item'], classes.list__item)}>
                <RoomIcon className={classes.icon} />
                <Typography className={classes['list-contacts__text']}>
                  м. Сокол, ул. Балтийская, д.9
                </Typography>
              </li>
              <li className={cx(classes['list-contacts__item'], classes.list__item)}>
                <PhoneIcon className={classes.icon} />
                <Typography className={classes['list-contacts__text']}>
                  +7 (495) 278-02-85
                </Typography>
              </li>
              <li className={cx(classes['list-contacts__item'], classes.list__item)}>
                <MailIcon className={classes.icon} />
                <Typography className={classes['list-contacts__text']}>
                  E-mail:
                  {' '}
                  <a href="/" className={cx(classes.link_black, classes.link)}>zakaz@pr-mebel.ru</a>
                </Typography>
              </li>
              <li className={cx(classes['list-contacts__item'], classes.list__item)}>
                <LocalParkingIcon className={classes.icon} />
                <Typography className={classes['list-contacts__text']}>
                  Бесплатная парковка
                </Typography>
              </li>
              <li className={cx(classes['list-contacts__item'], classes.list__item)}>
                <QueryBuilderIcon className={classes.icon} />
                <Typography className={classes['list-contacts__text']}>
                  Время работы: с 10:00 до 20:00
                  <br />
                  Без выходных.
                </Typography>
              </li>
            </ul>
            <ul className={cx(classes['list-map'], classes.list)}>
              <li className={cx(classes['list-map__item'], classes.list__item)}>
                <Typography>
                  <a href="/" className={cx(classes.link, classes.link_grey)}>
                    Открыть в яндекс навигаторе
                  </a>
                </Typography>
              </li>
              <li className={cx(classes['list-map__item'], classes.list__item)}>
                <Typography>
                  <a href="/" className={cx(classes.link, classes.link_grey)}>
                    Открыть Google Maps
                  </a>
                </Typography>
              </li>
              <li className={cx(classes['list-map__item'], classes.list__item)}>
                <Typography>
                  <a href="/" className={cx(classes.link, classes.link_grey)}>
                    Открыть Apple Maps
                  </a>
                </Typography>
              </li>
            </ul>
            <div className={classes.message}>
              <Typography>
                <a href="/" className={cx(classes.link, classes.link_red)}>
                  Написать письмо
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={6} />
        </Grid>
      </Container>
    </div>
  );
};
