import React, {
  useCallback,
  useState,
} from 'react';
import cx from 'classnames';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from '../Link/Link';
import logo from './resources/logo.svg';

const useStyles = makeStyles({
  root: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
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
      color: 'red',
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
});

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
            <img src={logo} alt="logo" />
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
                {dropdownVisible && (
                  <ul
                    className={classes['menu__dropdown-popup']}
                    onMouseLeave={handleCloseDropdown}
                  >
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link href="/">Шкафы</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link href="/">Гардеробные</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link href="/">Аксессуары</Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography className={classes.text} gutterBottom>
                        <Link href="/">Системные подсветки</Link>
                      </Typography>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link href="#design">Рассчитать стоимость</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link href="#design">Преимущества</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link href="#design">О нас</Link>
                </Typography>
              </li>
              <li>
                <Typography className={classes.text}>
                  <Link href="#design">Контакты</Link>
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} container justify="space-between" alignItems="center">
            <ul className={cx(classes.list, classes.contacts)}>
              <li>
                <Typography variant="body2" className={classes.text}>
                  <Link href="tel:+74952780285">+7 (495) 278-02-85</Link>
                </Typography>
              </li>
              <li>
                <Typography variant="body2" className={classes.text}>м. сокол</Typography>
              </li>
              <li>
                <Typography variant="body2" className={classes.text}>10:00 - 20:00</Typography>
              </li>
            </ul>
            <ul className={cx(classes.list, classes.social)}>
              <li>vk</li>
              <li>in</li>
              <li>fb</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
