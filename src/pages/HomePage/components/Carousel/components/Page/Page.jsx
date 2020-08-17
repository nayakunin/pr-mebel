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
  },
  content: {
    position: 'relative',
    zIndex: '10',
  },
  title: {
    fontStyle: 'italic',
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
  titles,
  texts,
  imageSet,
  href,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      style={{ backgroundImage: `url(${imageSet.large})` }}
    >
      <Grid item xs={9} className={classes.content}>
        {titles.map((title) => (
          <Typography
            key={title}
            variant="h1"
            className={cx(classes.text, classes.title)}
          >
            {title}
          </Typography>
        ))}
        {texts.map((text) => (
          <Typography
            key={text}
            className={cx(classes.text)}
            variant="h4"
          >
            {text}
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
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  href: PropTypes.string.isRequired,
};
