import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { BlockTitle } from 'components';
import { DesignCard } from './components';
import { LIST } from './constants';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '48px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '24px',
    },
  },
}));

export const DesignOffer = () => {
  const classes = useStyles();

  return (
    <Container>
      <BlockTitle>
        <Typography variant="h4">
          Получите дизайн-проект
          <br />
          и стоимость вашего проекта сегодня
        </Typography>
      </BlockTitle>
      <Grid container className={classes.container} spacing={4}>
        {LIST.map((item) => (
          <Grid key={item.title} item xs={12} sm={6} md={3}>
            <DesignCard Img={item.img}>
              {item.title}
            </DesignCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
