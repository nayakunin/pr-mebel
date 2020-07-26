import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { DesignCard } from './components/DesignCard/DesignCard';
import img1 from './resources/design-img.svg';
import img2 from './resources/design-img2.svg';
import img3 from './resources/design-img3.svg';
import img4 from './resources/design-img4.svg';

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
    marginBottom: '80px',
  },
  container: {
    marginTop: '48px',
  },
});

export const DesignOffer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <BlockTitle>
        <Typography variant="h4">Получите дизайн-проект</Typography>
        <Typography variant="h4">и стоимость вашего проекта сегодня</Typography>
      </BlockTitle>
      <Grid container className={classes.container} spacing={4}>
        <Grid item xs={3}>
          <DesignCard img={img1}>
            Пришлите нам эскизы вашей мебели или просто оставьте свои контактные данные
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard img={img2}>
            При необходимости, мы&nbsp;уточним детали и&nbsp;бесплатно разработаем проект в&nbsp;ЗД
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard img={img3}>
            Предложим разные варианты наполнение шкафа или гардеробной
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard img={img4}>
            Сформируем лучшее предложение в рамках бюджета
          </DesignCard>
        </Grid>
      </Grid>
    </Container>
  );
};
