import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@keyframes pulse': {
    '0%': {
      backgroundColor: '#DDDDDD',
    },
    '30%': {
      backgroundColor: '#E5E5E5',
    },
    '100%': {
      backgroundColor: '#DDDDDD',
    },
  },
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DDDDDD',
    animation: '$pulse 1s infinite ease-in-out',
  },
});

export const LoadingBackground = ({
  children,
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  );
};

LoadingBackground.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

LoadingBackground.defaultProps = {
  className: '',
};
