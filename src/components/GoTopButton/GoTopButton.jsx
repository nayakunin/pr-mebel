import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { makeStyles } from '@material-ui/core/styles';
import img from './assets/top-btn.svg';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: '40px',
    bottom: '40px',
    cursor: 'pointer',
    opacity: '0',
    transition: '.1s all',
    '&:after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '50px',
      height: '50px',
      content: '""',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.2)',
      transition: '.1s all',
    },
    '&:hover&:after': {
      background: 'rgba(255, 255, 255, 0.5)',
    },
  },
  root_visible: {
    opacity: '1',
  },
  img: {
    position: 'relative',
    zIndex: '10',
  },
});

export const GoTopButton = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [], false, false, 300);

  return (
    <div
      onClick={handleClick}
      className={cx(classes.root, {
        [classes.root_visible]: visible,
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
