import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    bottom: '100px',
    display: 'flex',
    color: 'white',
    zIndex: '10',
  },
  content: {
    position: 'relative',
    zIndex: '10',
  },
  item: {
    width: '50px',
    height: '50px',
    background: 'none',
    border: 'none',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:focus': {
      outline: 'none',
    },
  },
  active: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '46px',
      height: '46px',
      content: '""',
      borderRadius: '50%',
      border: 'solid 2px white',
    },
  },
  text: {
    color: 'inherit',
    cursor: 'pointer',
    transition: 'color .2s',
    '&:hover': {
      color: 'red',
    },
  },
});

export const Pagination = ({
  currentPage,
  pages,
  onChangeSlide,
}) => {
  const classes = useStyles();
  const cx = classNames.bind(classes);

  const handleClick = useCallback((index) => () => {
    onChangeSlide(index);
  }, [onChangeSlide]);

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item xs={9} container className={classes.content}>
        {pages.map((page, index) => {
          // TODO Fix classnames composition
          let itemClasses;
          if (currentPage === index) {
            itemClasses = cx(classes.item, classes.active);
          } else {
            itemClasses = cx(classes.item);
          }
          return (
            <button
              key={page.title}
              type="button"
              className={itemClasses}
              onClick={handleClick(index)}
            >
              <Typography
                className={classes.text}
              >
                {index + 1}
              </Typography>
            </button>
          );
        })}
      </Grid>
    </Grid>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.array.isRequired,
  onChangeSlide: PropTypes.func.isRequired,
};
