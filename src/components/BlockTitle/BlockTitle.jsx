import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginBottom: '11px',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '0',
      bottom: '-11px',
      width: '95px',
      height: '1px',
      background: 'red',
    },
  },
});

export const BlockTitle = ({
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      {children}
    </div>
  );
};

BlockTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BlockTitle.defaultProps = {
  className: {},
};