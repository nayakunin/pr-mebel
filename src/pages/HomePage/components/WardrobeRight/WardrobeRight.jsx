import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import {
  BlockTitle,
  MainButton,
} from 'components';
import img from './assets/quality-img.jpg';

const useStyles = makeStyles({
  content: {
  },
  description: {
    marginTop: '80px',
  },
  img: {
    width: '100%',
    position: 'relative',
  },
  'button-container': {
    marginTop: '32px',
  },
});

export const WardrobeRight = () => {
  const classes = useStyles();

  return (
    <Container>
      <BlockTitle>
        <Typography variant="h4">
          Исключительное качество
          <br />
          нашей мебели
        </Typography>
      </BlockTitle>
      <Grid container spacing={6} className={classes.content}>
        <Grid item xs={6} className={classes.description}>
          <Typography>
            Каждое наше изделие это сложный инженерный продукт,
            включающий в&nbsp;себя передовые мировые стандарты производства
            мебели. Все это сделано для того, чтобы наша мебель
            безупречно служила вам долгие годы
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img
            src={img}
            alt="шкаф"
            className={classes.img}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes['button-container']}>
        <Grid item xs={4}>
          <MainButton>Рассчитать стоимость</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};
