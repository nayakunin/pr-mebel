import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from './assets/img.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '30%',
    marginTop: '40px',
    backgroundImage: `url('${img}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

export const ShopImg = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
    />
  );
};
