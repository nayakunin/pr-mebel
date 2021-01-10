import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import {
  BlockTitle,
  MainButton,
} from 'components';
import { CATALOG } from './constants';
import { CatalogCard } from './components';

const useStyles = makeStyles({
  title: {
    marginBottom: '60px',
  },
  'button-container': {
    marginTop: '30px',
  },
});

export const Catalog = () => {
  const classes = useStyles();

  return (
    <Container>
      <BlockTitle className={classes.title}>
        <Typography variant="h4">
          Каталог
        </Typography>
      </BlockTitle>
      <Grid container spacing={4}>
        {CATALOG.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CatalogCard
              title={item.title}
              subtitle={item.subtitle}
              caption={item.caption}
              img={item.img}
              href={item.href}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center" className={classes['button-container']}>
        <Grid item xs={10} sm={6} md={4}>
          <MainButton>Рассчитать стоимость</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};
