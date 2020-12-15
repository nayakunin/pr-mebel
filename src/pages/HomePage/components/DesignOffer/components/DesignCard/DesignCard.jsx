import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: '16px',
    textAlign: 'center',
  },
  img: {
    width: '70px',
    height: '70px',
    '& path': {
      fill: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      width: '45px',
      height: '45px',
    },
    '@media (max-width: 400px)': {
      width: '35px',
      height: '35px',
    },
  },
}));

export const DesignCard = ({
  Img,
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      <Hidden smUp>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            <Img className={classes.img} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2">{children}</Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item xs={12}>
            <Img className={classes.img} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">{children}</Typography>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

DesignCard.propTypes = {
  Img: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
