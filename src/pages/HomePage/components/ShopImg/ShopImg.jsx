import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '30%',
    marginTop: '40px',
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
      style={{ backgroundImage: 'url(http://placekitten.com/300/300)' }}
    />
  );
};
