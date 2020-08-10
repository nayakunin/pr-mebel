import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { Card } from './components/Card/Card';

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
  },
});

export const Gallery = ({
  items,
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={4}>
            <Card imageUrlMin={item.imageMinified.url} onClick={() => ({})} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};
