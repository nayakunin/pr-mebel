import React, {
  useCallback,
  useState,
} from 'react';
import cx from 'classnames';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from 'assets/logo_header.svg';
import { ReactComponent as Fb } from 'assets/fb.svg';
import { ReactComponent as Inst } from 'assets/in.svg';
import { ReactComponent as Vk } from 'assets/vk.svg';
import { Link } from '../Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70px',
    display: 'flex',
    width: '100%',
    position: 'fixed',
    zIndex: '100',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,.1)',
  },
  text: {
    textTransform: 'capitalize',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '600px',
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  dropdown: {
    position: 'relative',
    top: '3px',
    color: 'inherit',
    fontSize: 'inherit',
  },
  menu__dropdown: {
    position: 'relative',
    color: 'inherit',
    transition: 'color .1s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    cursor: 'pointer',
  },
  'menu__dropdown-popup': {
    background: 'white',
    padding: '8px',
    position: 'absolute',
    listStyle: 'none',
    margin: '0',
    boxShadow: '0 10px 20px rgba(0,0,0,.1)',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    justifyContent: 'space-between',
  },
  social__icon: {
    '&:hover path': {
      fill: theme.palette.primary.main,
      transition: 'fill .1s',
    },
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleOpenDropdown = useCallback(() => {
    setDropdownVisible(true);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  return (
    <header className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Grid>
          <Grid item xs={7} container justify="center" alignItems="center">
            <ul className={cx(classes.menu, classes.list)}>
              <li>
                <Typography
                  className={cx(classes.text, classes.menu__dropdown)}
                  align="center"
                  onClick={handleOpenDropdown}
                >
                  Каталог&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </Typography>
                {/* TODO добавить поддержку клика вне дропдауна */}
                {dropdownVisible && (
                  <ul
                    className={classes['menu__dropdown-popup']}
                    onMouseLeave={handleCloseDropdown}
                  >
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link to="/catalog">Шкафы</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link to="/">Гардеробные</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link to="/">Аксессуары</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link to="/">Системные подсветки</Link>
                      </Typography>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link to="/#design-offer">Рассчитать стоимость</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link to="/#advantages">Преимущества</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link to="/#about">О нас</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link to="/#contacts">Контакты</Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} container justify="space-between" alignItems="center">
            <ul className={cx(classes.list, classes.contacts)}>
              <li>
                <Typography variant="body2" className={classes.text}>
                  <Link to="tel:+74952780285" external>+7 (495) 278-02-85</Link>
                </Typography>
              </li>
              <li>
                {/* TODO Add link to ymaps */}
                <Typography variant="body2" className={classes.text}>м. сокол</Typography>
              </li>
              <li>
                <Typography variant="body2" className={classes.text}>10:00 - 20:00</Typography>
              </li>
            </ul>
            <ul className={cx(classes.list, classes.social)}>
              <li>
                <a href="https://vk.com/public185518769">
                  <Vk className={classes.social__icon} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pr_mebel.ru/">
                  <Inst className={classes.social__icon} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/%D0%A7%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%D1%80-108136607213942">
                  <Fb className={classes.social__icon} />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
