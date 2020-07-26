import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import img from './resources/production-img.jpg';

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
  },
  img: {
    marginTop: '30px',
    width: '100%',
    marginBottom: '24px',
  },
  text: {
    marginTop: '24px',
  },
  text_bottom: {
    marginTop: '24px',
  },
});

export const OurProduction = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Наше производство
          </Typography>
        </BlockTitle>
        <img src={img} alt="Производство" className={classes.img} />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <BlockTitle>
              <Typography variant="h5">
                Квалифицированный персонал
              </Typography>
            </BlockTitle>
            <Typography className={classes.text} variant="body2">
              Все сотрудники нашей фабрики имеют многолетний опыт работы
              и&nbsp;проходят ежегодную аттестацию.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <BlockTitle>
              <Typography variant="h5">
                Инженерное 3D-проектирование
              </Typography>
            </BlockTitle>
            <Typography className={classes.text} variant="body2">
              Каждый проект проходит стадию инженерного 3Д-проектирования,
              что обеспечивает максимально качественную реализацию проекта.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <BlockTitle>
              <Typography variant="h5">
                Промышленное оборудование
              </Typography>
            </BlockTitle>
            <Typography className={classes.text} variant="body2">
              Наша фабрика оснащена европейским промышленным оборудованием
              с&nbsp;числовым программным управлением.
              Максимум автоматизации, минимум ручного труда.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <BlockTitle>
              <Typography variant="h5">
                Контроль качества на всех участках
              </Typography>
            </BlockTitle>
            <Typography className={classes.text} variant="body2">
              Качество нашей продукции оценивается более чем
              по&nbsp;1000&nbsp;параметрам, что позволяет
              свести риск возникновения брака к&nbsp;минимуму.
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={10} className={classes.text_bottom}>
            <Typography variant="h4" align="center">
              Современные технологии производства для идеального качества мебели
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
