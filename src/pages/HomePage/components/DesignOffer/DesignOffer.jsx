import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from 'components';
import { DesignCard } from './components';
import { ReactComponent as img1 } from './assets/design-img.svg';
import { ReactComponent as img2 } from './assets/design-img2.svg';
import { ReactComponent as img3 } from './assets/design-img3.svg';
import { ReactComponent as img4 } from './assets/design-img4.svg';

const useStyles = makeStyles({
  container: {
    marginTop: '48px',
  },
});

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
        <Grid item xs={3}>
          <DesignCard Img={img1}>
            Пришлите нам эскизы вашей мебели или просто оставьте свои контактные данные
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard Img={img2}>
            При необходимости, мы&nbsp;уточним детали и&nbsp;бесплатно разработаем проект в&nbsp;ЗД
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard Img={img3}>
            Предложим разные варианты наполнение шкафа или гардеробной
          </DesignCard>
        </Grid>
        <Grid item xs={3}>
          <DesignCard Img={img4}>
            Сформируем лучшее предложение в рамках бюджета
          </DesignCard>
        </Grid>
      </Grid>
    </Container>
  );
};
