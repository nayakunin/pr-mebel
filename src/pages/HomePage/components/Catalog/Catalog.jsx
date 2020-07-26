import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { CatalogCard } from './components/CatalogCard/CatalogCard';
import { MainButton } from '../../../../components/MainButton/MainButton';
import { catalogMock } from '../../../../__fixtures__/catalog';

const useStyles = makeStyles({
  root: {
    marginTop: '65px',
  },
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
    <Container className={classes.root}>
      <BlockTitle className={classes.title}>
        <Typography variant="h4">
          Каталог
        </Typography>
      </BlockTitle>
      <Grid container spacing={4}>
        {catalogMock.map((item) => (
          <Grid item xs={4} key={item.title}>
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
          <MainButton onClick={() => ({})}>Рассчитать стоимость</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};
