import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  BlockTitle,
  MainButton,
} from 'components';

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
  },
  container: {
    marginTop: '32px',
  },
  item: {
    position: 'relative',
  },
  number: {
    position: 'absolute',
    fontSize: '120px',
    lineHeight: '120px',
    // TODO Добавить цвет в тему
    color: '#eb2f46',
    opacity: '.07',
    top: '-5px',
    left: '20px',
    fontWeight: '700',
  },
  text: {
    marginTop: '20px',
  },
  'button-container': {
    marginTop: '36px',
    marginBottom: '24px',
  },
});

export const HowToOrder = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Как заказать нашу мебель
          </Typography>
        </BlockTitle>
        <Grid container spacing={6} className={classes.container}>
          <Grid item xs={4} className={classes.item}>
            <div className={classes.number}>01</div>
            <BlockTitle>
              <Typography variant="h5">
                Оставьте заявку на сайте или закажите звонок
              </Typography>
            </BlockTitle>
            <Typography variant="body2" className={classes.text}>
              Наш менеджер свяжется с&nbsp;вами, ответит на&nbsp;все вопросы,
              и&nbsp;предложит вам наиболее удобный способ работы над вашим проектом
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.item}>
            <div className={classes.number}>02</div>
            <BlockTitle>
              <Typography variant="h5">
                Оставьте заявку на сайте или закажите звонок
              </Typography>
            </BlockTitle>
            <Typography variant="body2" className={classes.text}>
              Наш менеджер свяжется с&nbsp;вами, ответит на&nbsp;все вопросы,
              и&nbsp;предложит вам наиболее удобный способ работы над вашим проектом
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.item}>
            <div className={classes.number}>03</div>
            <BlockTitle>
              <Typography variant="h5">
                Оставьте заявку на сайте или закажите звонок
              </Typography>
            </BlockTitle>
            <Typography variant="body2" className={classes.text}>
              Наш менеджер свяжется с&nbsp;вами, ответит на&nbsp;все вопросы,
              и&nbsp;предложит вам наиболее удобный способ работы над вашим проектом
            </Typography>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={8} container spacing={6}>
            <Grid item xs={6} className={classes.item}>
              <div className={classes.number}>04</div>
              <BlockTitle>
                <Typography variant="h5">
                  Оставьте заявку на сайте или закажите звонок
                </Typography>
              </BlockTitle>
              <Typography variant="body2" className={classes.text}>
                Наш менеджер свяжется с&nbsp;вами, ответит на&nbsp;все вопросы,
                и&nbsp;предложит вам наиболее удобный способ работы над вашим проектом
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.item}>
              <div className={classes.number}>05</div>
              <BlockTitle>
                <Typography variant="h5">
                  Оставьте заявку на сайте или закажите звонок
                </Typography>
              </BlockTitle>
              <Typography variant="body2" className={classes.text}>
                Наш менеджер свяжется с&nbsp;вами, ответит на&nbsp;все вопросы,
                и&nbsp;предложит вам наиболее удобный способ работы над вашим проектом
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="center" className={classes['button-container']}>
            <Grid item xs={4}>
              {/* TODO Add callback */}
              <MainButton>Рассчитать стоимость</MainButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
