import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  icon: {
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
}));

export const Card = ({
  Img,
  title,
  text,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} container spacing={2}>
      <Grid item xs={2}>
        <Img className={classes.icon} />
      </Grid>
      <Grid item xs={10} container alignItems="center">
        <Typography variant="h6">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

Card.propTypes = {
  Img: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
