import React, { useCallback } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import img from './assets/top-btn.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    left: '40px',
    bottom: '40px',
    cursor: 'pointer',
    opacity: '0',
    zIndex: '1000',
    transition: '.3s all',
    '&::after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '50px',
      height: '50px',
      content: '""',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      transition: '.3s all',
    },
    '&:hover&::after': {
      backgroundColor: '#000',
    },
  },
  root_visible: {
    opacity: '1',
  },
  img: {
    position: 'relative',
    zIndex: '1010',
  },
  [theme.breakpoints.down('xs')]: {
    root: {
      left: '20px',
      bottom: '20px',
    },
  },
}));

export const GoTopButton = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    threshold: '500',
  });

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div
      onClick={handleClick}
      className={cx(classes.root, {
        [classes.root_visible]: trigger,
      })}
    >
      <img
        src={img}
        alt="Подняться на верх страницы"
        className={classes.img}
      />
    </div>
  );
};
