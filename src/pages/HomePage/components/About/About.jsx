import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from 'components';
import { CARDS } from './constants';
import { Card } from './components';

const useStyles = makeStyles({
  root: {

  },
  title_middle: {
    marginTop: '30px',
    fontWeight: '400',
  },
  grid: {
    marginTop: '14px',
  },
});

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            О нас
          </Typography>
        </BlockTitle>
        <Typography variant="h5" align="center" className={classes.title_middle}>
          Почему нас выбрали уже более 10 000 клиентов?
        </Typography>
        <Grid container spacing={4} className={classes.grid}>
          {CARDS.map((card) => (
            <Card
              key={card.id}
              Img={card.img}
              title={card.title}
              text={card.text}
            />
          ))}
        </Grid>
        <Typography variant="h5" align="center" className={classes.title_middle}>
          Приходите, нам есть чем вас удивить!
        </Typography>
      </Container>

    </div>
  );
};
