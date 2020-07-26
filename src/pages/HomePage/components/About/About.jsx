import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import img1 from './resources/about-img.svg';
import img2 from './resources/about-img2.svg';
import img3 from './resources/about-img3.svg';
import img4 from './resources/about-img4.svg';
import img5 from './resources/about-img5.svg';
import img6 from './resources/about-img6.svg';

const CARDS = [
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img1,
  },
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img2,
  },
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img3,
  },
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img4,
  },
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img5,
  },
  {
    title: 'Богатый ассортимент',
    text: `Мы\xa0можем предложить Вам корпусную мебель для любой из\xa0зон
    вашего дома\xa0\u2014 от\xa0кухни до\xa0детской комнаты.
    Более 1000 вариантов материалов и\xa0отделок будут доступны для вашего выбора.
    Это удобно, выгодно и\xa0позволит сэкономит массу Вашего времени.`,
    img: img6,
  },
];

const useStyles = makeStyles({
  root: {

  },
  grid: {
    marginTop: '24px',
  },
  subtitle: {
    marginTop: '24px',
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
        <Typography variant="h5" align="center">
          Почему нас выбрали уже более 10 000 клиентов?
        </Typography>
        <Grid container spacing={4} className={classes.grid}>
          {CARDS.map((card) => (
            <Grid item xs={4} container spacing={2}>
              <Grid item xs={2}>
                <img src={card.img} alt="icon" />
              </Grid>
              <Grid item xs={10} container alignItems="center">
                <Typography variant="h6">
                  {card.title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  {card.text}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h5" align="center" className={classes.subtitle}>
          Приходите, нам есть чам вас удивить!
        </Typography>
      </Container>

    </div>
  );
};
