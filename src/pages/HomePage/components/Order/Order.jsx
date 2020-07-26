import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import img1 from './resources/measurer-img.svg';
import img2 from './resources/measurer-img2.svg';
import img3 from './resources/measurer-img3.svg';
import img4 from './resources/measurer-img4.svg';
import img5 from './resources/measurer-img5.svg';

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
  },
  img: {
    height: '50px',
    marginBottom: '16px',
  },
  container: {
    marginTop: '30px',
  },
  row: {
    marginTop: '30px',
  },
});

export const Order = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Закажите выезд дизайнера-замерщика
            <br />
            и получите проект мебели в течение 24 часов
          </Typography>
        </BlockTitle>
        <Grid container className={classes.container}>
          <Grid item xs={4} container direction="column" alignItems="center">
            <img src={img1} alt="icon" className={classes.img} />
            <Typography variant="body1" align="center">
              Приедет в удобное для вас время
            </Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <img src={img2} alt="icon" className={classes.img} />
            <Typography variant="body1" align="center">
              Привезет нужные материалы
            </Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <img src={img3} alt="icon" className={classes.img} />
            <Typography variant="body1" align="center">
              Сделает профессиональный замер помещение
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8} container className={classes.row} spacing={4}>
            <Grid item xs={6} container direction="column" alignItems="center">
              <img src={img4} alt="icon" className={classes.img} />
              <Typography variant="body1" align="center">
                Объяснит, как лучше использовать пространство вашего помещения
              </Typography>
            </Grid>
            <Grid item xs={6} container direction="column" alignItems="center">
              <img src={img5} alt="icon" className={classes.img} />
              <Typography variant="body1" align="center">
                Разработает дизайн-проект мебели в 3D в течение 24 часов после замера
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
