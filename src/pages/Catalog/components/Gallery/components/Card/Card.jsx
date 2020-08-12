import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  '@keyframes pulse': {
    '0%': {
      backgroundColor: '#DFDEDE',
    },
    '50%': {
      backgroundColor: '#E5E5E5',
    },
    '100%': {
      backgroundColor: '#DFDEDE',
    },
  },
  root: {
    // 3 / 2 ratio
    paddingTop: '66.66%',
    backgroundColor: '#DFDEDE',
    position: 'relative',
    animation: '$pulse 1s infinite ease-in-out',
    overflow: 'hidden',
  },
  root_loaded: {
    cursor: 'pointer',
    '&:hover $tooltip': {
      transform: 'translateY(0)',
    },
    '& $img': {
      opacity: '1',
    },
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    opacity: '0',
    transition: 'opacity .4s ease-out',
  },
  tooltip: {
    transform: 'translateY(100%)',
    transition: 'transform .2s ease-out',
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '5px 40px 5px 15px',
    backgroundColor: 'rgba(119, 119, 119, 0.72)',
  },
  tooltip__text: {
    color: 'white',
  },
  arrow: {
    position: 'absolute',
    color: 'white',
    bottom: '5px',
    right: '5px',
  },
});

export const Card = ({
  imageUrlMin,
  collection,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={cx(classes.root, {
        [classes.root_loaded]: isLoaded,
      })}
      onClick={handleClick}
    >
      <img
        className={classes.img}
        src={imageUrlMin}
        alt="Изображение"
        onLoad={handleLoad}
      />
      <div
        className={classes.tooltip}
      >
        <Typography className={classes.tooltip__text}>{collection}</Typography>
        <ArrowForwardIcon className={classes.arrow} />
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrlMin: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
