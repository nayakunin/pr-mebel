import React, {
  useCallback,
  useState,
} from 'react';
import cx from 'classnames';
import {
  Grid,
  Container,
  Typography,
  Hidden,
  Drawer,
  useScrollTrigger,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import logo from 'assets/logo_header.svg';
import { ReactComponent as Fb } from 'assets/fb.svg';
import { ReactComponent as Inst } from 'assets/in.svg';
import { ReactComponent as Vk } from 'assets/vk.svg';
import { Link } from '../Link/Link';
import MainButton from '../MainButton/MainButton';

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
    transition: '.1s height',
    [theme.breakpoints.down('xs')]: {
      height: '50px',
    },
  },
  root_dense: {
    height: '50px',
  },
  innerWrapperSm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '47px',
    transition: '.1s height',
  },
  logo_dense: {
    height: '40px',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoContainerSm: {
    width: '110px',
    [theme.breakpoints.up('sm')]: {
      width: '150px',
    },
  },
  logoSm: {
    width: '100%',
  },
  text: {
    fontSize: '13px',
    textTransform: 'uppercase',
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
  menu__icon: {
    width: '35px',
    height: '35px',
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
    width: '180px',
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
  drawer: {
    width: '250px',
    boxSizing: 'border-box',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hl: {
    width: '100%',
    height: '1px',
    background: theme.palette.grey[300],
    content: '""',
    margin: '10px 0',
  },
}));

export const Header = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smallHeader = useScrollTrigger(500);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleOpenDropdown = useCallback(() => {
    setDropdownVisible(true);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setDropdownVisible(false);
  }, []);

  return (
    <header className={cx(classes.root, {
      [classes.root_dense]: smallHeader && !isMdDown,
    })}
    >
      <Container>
        <Hidden mdDown>
          <Grid container>
            <Grid item xs={2} className={classes.logoContainer}>
              <Link to="/" className={classes.logoWrapper}>
                <img
                  src={logo}
                  alt="logo"
                  className={cx(classes.logo, {
                    [classes.logo_dense]: smallHeader,
                  })}
                />
              </Link>
            </Grid>
            <Grid item xs={7} container justify="center" alignItems="center">
              <ul
                className={cx(classes.menu, classes.list)}
                onMouseEnter={handleOpenDropdown}
                onMouseLeave={handleCloseDropdown}
              >
                <li>
                  <Typography
                    className={cx(classes.text, classes.menu__dropdown)}
                    align="center"
                  >
                    Каталог&nbsp;
                    <ArrowDropDownIcon className={classes.dropdown} />
                  </Typography>
                  {dropdownVisible && (
                    <ul
                      className={classes['menu__dropdown-popup']}
                    >
                      <li>
                        <Typography className={classes.text} gutterBottom>
                          <Link to="/catalog?section=cupboards">Шкафы</Link>
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.text} gutterBottom>
                          <Link to="/catalog?section=wardrobes">Гардеробные</Link>
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.text} gutterBottom>
                          <Link to="/catalog?section=accessories">Аксессуары</Link>
                        </Typography>
                      </li>
                      <li>
                        <Typography className={classes.text} gutterBottom>
                          <Link to="/catalog?section=lightingSystems">Системы подсветки</Link>
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
                {!smallHeader && (
                  <>
                    <li>
                      <Typography variant="body2" className={classes.text}>
                        <Link to="https://yandex.ru/maps/-/CCQtFQdaLA" external>
                          м. сокол
                        </Link>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" className={classes.text}>10:00 - 20:00</Typography>
                    </li>
                  </>
                )}
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
        </Hidden>
        <Hidden lgUp>
          <Container className={classes.containerSm}>
            <div className={classes.innerWrapperSm}>
              <div className={classes.logoWrapperSm}>
                <Link to="/" className={cx(classes.logoContainer, classes.logoContainerSm)}>
                  <img
                    src={logo}
                    alt="logo"
                    className={classes.logoSm}
                  />
                </Link>
              </div>
              <MenuIcon className={classes.menu__icon} onClick={handleOpenDrawer} />
            </div>
          </Container>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            PaperProps={{
              classes: {
                root: classes.drawer,
              },
            }}
            onClick={handleCloseDrawer}
            onClose={handleCloseDrawer}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography>
                  <Link to="/catalog">Каталог</Link>
                </Typography>
              </Grid>
              <div className={classes.hl} />
              <Grid item xs={12} container spacing={1} direction="column" style={{ paddingLeft: '10px' }}>
                <Grid item xs>
                  <Typography>
                    <Link to="/catalog?section=cupboards">Шкафы</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/catalog?section=wardrobes">Гардеробные</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/catalog?section=accessories">Аксессуары</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/catalog?section=lightingSystems">Системы подсветки</Link>
                  </Typography>
                </Grid>
              </Grid>
              <div className={classes.hl} />
              <Grid item xs={12} container spacing={1} direction="column">
                <Grid item xs>
                  <Typography>
                    <Link to="/#design-offer">Рассчитать стоимость</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/#advantages">Преимущества</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/#about">О нас</Link>
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    <Link to="/#contacts">Контакты</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="column" spacing={2}>
              <Grid item xs container direction="column" justify="center">
                <Typography variant="body2" className={classes.text} align="center">
                  <Link to="tel:+74952780285" external>+7 (495) 278-02-85</Link>
                </Typography>
                <Typography variant="body2" className={classes.text} align="center">
                  <Link to="https://yandex.ru/maps/-/CCQtFQdaLA" external>
                    м. сокол
                  </Link>
                </Typography>
                <Typography variant="body2" className={classes.text} align="center">
                  10:00 - 20:00
                </Typography>
              </Grid>
              <Grid item xs container justify="center">
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
              <Grid item xs>
                <MainButton>Заказать звонок</MainButton>
              </Grid>
            </Grid>
          </Drawer>
        </Hidden>
      </Container>
    </header>
  );
};
