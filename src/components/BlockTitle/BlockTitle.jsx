import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: '11px',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '0',
      bottom: '-2px',
      width: '65px',
      height: '1px',
      background: theme.palette.primary.main,
    },
  },
}));

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
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

BlockTitle.defaultProps = {
  className: {},
};
