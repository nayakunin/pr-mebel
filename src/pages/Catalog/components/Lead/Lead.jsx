import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import lead from './assets/lead.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      background: 'rgba(0, 0, 0, .3)',
    },
  },
});

export const Lead = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundImage: `url("${lead}")` }} />
  );
};
