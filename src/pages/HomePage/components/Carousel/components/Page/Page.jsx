import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '&:before': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      content: '""',
      background: 'rgba(0, 0, 0, 0.3)',
    },
  },
  content: {
    position: 'relative',
    zIndex: '10',
  },
  text: {
    color: 'white',
  },
  button: {
    padding: '20px 40px',
    borderRadius: '50px',
    background: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'border .2s',
    border: 'solid 2px white',
    '&:hover': {
      border: `solid 2px ${theme.palette.primary.main}`,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  'button-container': {
    marginTop: '60px',
  },
}));

export const Page = ({
  title,
  subtitles,
  image,
  href,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Grid item xs={9} className={classes.content}>
        <Typography
          variant="h1"
          className={cx(classes.text)}
        >
          {title}
        </Typography>
        {subtitles.map((subtitle) => (
          <Typography
            key={subtitle}
            className={cx(classes.text)}
            variant="h4"
          >
            {subtitle}
          </Typography>
        ))}
        <div className={classes['button-container']}>
          <button type="button" className={classes.button}>
            <Typography variant="h6">
              Подробнее
            </Typography>
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
