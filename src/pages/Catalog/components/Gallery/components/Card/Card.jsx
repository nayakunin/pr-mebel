import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { LoadingBackground } from '../../../../../../components/LoadingBackground/LoadingBackground';
import { LazyImage } from '../../../../../../components/LazyImage/LazyImage';

const useStyles = makeStyles({
  root: {
    // 3 / 2 ratio
    paddingTop: '66.66%',
    position: 'relative',
    overflow: 'hidden',
  },
  root_loaded: {
    cursor: 'pointer',
    '&:hover $tooltip': {
      transform: 'translateY(0)',
    },
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
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
  currentItemId,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  const handleClick = useCallback(() => {
    onClick(currentItemId);
  }, [onClick, currentItemId]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <LoadingBackground>
      <div
        className={cx(classes.root, {
          [classes.root_loaded]: isLoaded,
        })}
        onClick={handleClick}
      >
        <LazyImage
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
    </LoadingBackground>
  );
};

Card.propTypes = {
  imageUrlMin: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
  currentItemId: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
