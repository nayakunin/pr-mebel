import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: '16px',
    textAlign: 'center',
  },
  img: {
    width: '70px',
    height: '70px',
  },
});

export const DesignCard = ({
  img,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={img} alt="icon" className={classes.img} />
      <Typography className={classes.text}>{children}</Typography>
    </div>
  );
};

DesignCard.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
