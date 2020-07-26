import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
    height: '50px',
    overflow: 'hidden',
    position: 'relative',
    border: '1px solid red',
    transition: 'all .3s',
  },
  active: {
    height: 'fit-content',
  },
  title: {
    paddingLeft: '80px',
    lineHeight: '50px',
    marginBottom: '12px',
  },
  number: {
    position: 'absolute',
    fontSize: '40px',
    lineHeight: '40px',
    color: 'red',
    opacity: '0.8',
    top: '5px',
    left: '5px',
  },
});

export const Question = ({
  id,
  title,
  children,
}) => {
  const classes = useStyles();
  const itemRef = useRef();

  const handleToggle = useCallback(() => {
    itemRef.current.classList.toggle(classes.active);
  });

  return (
    <div className={classes.root} ref={itemRef} onClick={handleToggle}>
      <div className={classes.number}>{id}</div>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>
      <Typography>
        {children}
      </Typography>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
