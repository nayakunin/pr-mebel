import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changePage, fetchCatalog } from '../../../../actions/catalog';
import { Card } from './components/Card/Card';
import { Loader } from './components/Loader/Loader';

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
  },
});

export const Gallery = ({
  items,
  isLoading,
  hasMore,
  page,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const observer = useRef();
  const observedNodeRef = useCallback((node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        dispatch(changePage(page + 1));
        dispatch(fetchCatalog());
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {items.map((item, i) => {
          if (i === items.length - 10) {
            return (
              <Grid item xs={4} key={item.id} ref={observedNodeRef}>
                <Card imageUrlMin={item.imageMinified.url} onClick={() => ({})} />
              </Grid>
            );
          }
          return (
            <Grid item xs={4} key={item.id}>
              <Card imageUrlMin={item.imageMinified.url} onClick={() => ({})} />
            </Grid>
          );
        })}
        {isLoading && (
          <Loader />
        )}
      </Grid>
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
};
