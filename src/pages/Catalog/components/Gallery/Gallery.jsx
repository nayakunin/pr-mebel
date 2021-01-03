import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { changePage, fetchCatalog } from 'actions';
import { MainButton, Loader } from 'components';
import { Card } from './components';

const useStyles = makeStyles(() => ({
  buttonContainer: {
    marginTop: '60px',
  },
}));

export const Gallery = ({
  items,
  isLoading,
  hasMore,
  page,
  onCardClick,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLoadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      dispatch(changePage(page + 1));
      dispatch(fetchCatalog());
    }
  }, [isLoading, hasMore, dispatch, page]);

  return (
    <Container>
      <Grid container spacing={3}>
        {items.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              imageUrlMin={item.imageMinified.url}
              collection={item.collection}
              currentItemId={i}
              onClick={onCardClick}
            />
          </Grid>
        ))}
        {isLoading && (
          <Loader />
        )}
      </Grid>
      {hasMore && (
        <Grid container justify="center" className={classes.buttonContainer}>
          <Grid item xs={6}>
            <MainButton
              onClick={handleLoadMore}
            >
              Показать еще
            </MainButton>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasMore: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
