import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color .2s',
    '&:hover': {
      color: 'red',
    },
  },
});

export const Link = ({
  to,
  external,
  children,
}) => {
  const classes = useStyles();

  if (external) {
    return (
      <a href={to} className={classes.root}>{children}</a>
    );
  }

  return (
    <RouterLink to={to} className={classes.root}>{children}</RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  external: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};
