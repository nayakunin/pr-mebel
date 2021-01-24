import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import img from './assets/img.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '30%',
    backgroundImage: `url('${img}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
});

export const ShopImg = () => {
  const classes = useStyles();

  return (
    <LazyLoad height={400}>
      <div
        className={classes.root}
      />
    </LazyLoad>
  );
};
