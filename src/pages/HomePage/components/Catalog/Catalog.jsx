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
    display: 'flex',
    justifyContent: 'center',
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
          <Grid item xs={4} key={item.id}>
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
      <Grid container justify="center">
        <Grid item xs={4}>
          <MainButton>Рассчитать стоимость</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};
