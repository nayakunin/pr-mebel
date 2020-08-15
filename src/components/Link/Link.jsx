import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color .2s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export const Link = ({
  to,
  external,
  children,
  className,
}) => {
  const classes = useStyles();

  if (external) {
    return (
      <a href={to} className={cx(classes.root, className)}>{children}</a>
    );
  }

  return (
    <RouterLink to={to} className={cx(classes.root, className)}>{children}</RouterLink>
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
  className: PropTypes.string,
};

Link.defaultProps = {
  external: false,
  className: '',
};
