import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    lineHeight: '45px',
    background: '#ff001f',
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'white',
    border: '1px solid #ff001f',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      color: '#ff001f',
      background: 'white',
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

export const MainButton = ({
  children,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={classes.root}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
