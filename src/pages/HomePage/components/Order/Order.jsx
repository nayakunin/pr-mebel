import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { BlockTitle } from 'components';
import { ReactComponent as Img1 } from './assets/img1.svg';
import { ReactComponent as Img2 } from './assets/img2.svg';
import { ReactComponent as Img3 } from './assets/img3.svg';
import { ReactComponent as Img4 } from './assets/img4.svg';
import { ReactComponent as Img5 } from './assets/img5.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '80px',
  },
  img: {
    height: '50px',
    marginBottom: '16px',
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
  container: {
    marginTop: '30px',
  },
  row: {
    marginTop: '30px',
  },
}));

export const Order = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Закажите выезд дизайнера-замерщика сегодня
          </Typography>
          <Typography variant="h5">
            и получите проект мебели в течение 24 часов
          </Typography>
        </BlockTitle>
        <Grid container className={classes.container}>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Img1 className={classes.img} />
            <Typography variant="body2" align="center">
              Приедет в удобное для вас время
            </Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Img2 className={classes.img} />
            <Typography variant="body2" align="center">
              Привезет нужные материалы
            </Typography>
          </Grid>
          <Grid item xs={4} container direction="column" alignItems="center">
            <Img3 className={classes.img} />
            <Typography variant="body2" align="center">
              Сделает профессиональный замер помещение
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8} container className={classes.row} spacing={4}>
            <Grid item xs={1} />
            <Grid item xs={5} container direction="column" alignItems="center">
              <Img4 className={classes.img} />
              <Typography variant="body2" align="center">
                Объяснит, как лучше использовать пространство вашего помещения
              </Typography>
            </Grid>
            <Grid item xs={5} container direction="column" alignItems="center">
              <Img5 className={classes.img} />
              <Typography variant="body2" align="center">
                Разработает дизайн-проект мебели в 3D в течение 24 часов после замера
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
