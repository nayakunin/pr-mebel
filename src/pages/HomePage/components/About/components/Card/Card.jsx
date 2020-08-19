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
  row_top: {
    display: 'flex',
    flexDirection: 'row',
    height: '57px',
  },
  title__container: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  row_bottom: {
    marginTop: '10px',
  },
  icon: {
    width: '50px',
    height: '50px',
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
  text: {
    fontSize: '15px',
    lineHeight: '17px',
  },
}));

export const Card = ({
  Img,
  title,
  text,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} spacing={2}>
      <div className={classes.row_top}>
        <Img className={classes.icon} />
        <div className={classes.title__container}>
          <Typography variant="h6">
            {title}
          </Typography>
        </div>
      </div>
      <div className={classes.row_bottom}>
        <Typography variant="body2" className={classes.text}>
          {text}
        </Typography>
      </div>
    </Grid>
  );
};

Card.propTypes = {
  Img: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
