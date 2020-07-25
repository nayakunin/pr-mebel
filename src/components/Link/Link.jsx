import React from 'react';
import PropTypes from 'prop-types';
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
  href,
  children,
}) => {
  const classes = useStyles();

  return (
    <a href={href} className={classes.root}>{children}</a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
