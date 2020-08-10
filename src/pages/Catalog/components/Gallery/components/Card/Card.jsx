import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '75%',
    position: 'relative',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
});

export const Card = ({
  imageUrlMin,
  onClick,
}) => {
  const classes = useStyles();

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div className={classes.root} onClick={handleClick}>
      <img className={classes.img} src={imageUrlMin} alt="Изображение" />
    </div>
  );
};

Card.propTypes = {
  imageUrlMin: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
