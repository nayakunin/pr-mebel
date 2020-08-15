import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    '& path': {
      fill: theme.palette.primary.main,
    }
  },
}));

export const DesignCard = ({
  Img,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Img className={classes.img} />
      <Typography className={classes.text}>{children}</Typography>
    </div>
  );
};

DesignCard.propTypes = {
  Img: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
