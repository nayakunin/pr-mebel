import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import {
  Container,
  Typography,
  Grid,
  Hidden,
} from '@material-ui/core';
import {
  BlockTitle,
  MainButton,
  Pagination,
} from 'components';
import { ADDITIONAL } from './constants';
import { WardrobeAdditionalBlock } from '../WardrobeAdditionalBlock';
import { WardrobeSnippet } from '../WardrobeSnippet';
import img from './assets/quality-img.jpg';

const useStyles = makeStyles((theme) => ({
  content_sm: {
    marginTop: '40px',
  },
  description: {
    marginTop: '80px',
  },
  img__container: {
    position: 'relative',
    paddingTop: '71.9%',
  },
  imgWrapper: {
    position: 'relative',
  },
  point: {
    position: 'absolute',
  },
  img: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
    },
  },
  text_bottom: {
    marginTop: '30px',
    minHeight: '120px',
  },
  'button-container': {
    marginTop: '32px',
  },
}));

export const WardrobeRight = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(0);
  const [currentImg, setCurrentImg] = useState(img);

  useEffect(() => {
    if (activePage === 0) {
      setCurrentImg(img);
    } else {
      setCurrentImg(ADDITIONAL[activePage - 1].img);
    }
  }, [activePage]);

  return (
    <Container>
      <BlockTitle>
        <Typography variant="h4">
          Исключительное качество
          <br />
          нашей мебели
        </Typography>
      </BlockTitle>
      <Hidden smDown>
        <Grid container spacing={6} className={classes.content}>
          <Grid item xs={6} className={classes.description}>
            <Typography variant="body1">
              Каждое наше изделие это сложный инженерный продукт,
              включающий в&nbsp;себя передовые мировые стандарты производства
              мебели. Все это сделано для того, чтобы наша мебель
              безупречно служила вам долгие годы
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.imgWrapper}>
              <LazyLoad height={450} offset={500}>
                <img
                  src={img}
                  alt="шкаф"
                  className={classes.img}
                />
              </LazyLoad>
              {ADDITIONAL.map((point) => (
                <div
                  key={`${point.left} x ${point.top}`}
                  className={classes.point}
                  style={{
                    left: point.left,
                    top: point.top,
                  }}
                >
                  <WardrobeSnippet
                    img={point.img}
                    title={point.title}
                    text={point.text}
                    direction={point.direction}
                  />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container justify="center" className={classes.content_sm}>
          <Grid item xs={12} className={classes.img__container}>
            <LazyLoad height={400} offset={300}>
              <img
                src={currentImg}
                alt="шкаф"
                className={classes.img}
              />
            </LazyLoad>
          </Grid>
          <Grid item xs={12}>
            <Pagination
              list={ADDITIONAL}
              activeIndex={activePage}
              onChange={setActivePage}
            />
          </Grid>
          {activePage !== 0 ? (
            <Grid item xs={10} className={classes.text_bottom}>
              <WardrobeAdditionalBlock
                title={ADDITIONAL[activePage - 1].title}
                text={ADDITIONAL[activePage - 1].text}
              />
            </Grid>
          ) : (
            <Grid item xs={10} className={classes.text_bottom}>
              <Typography variant="body2">
                Каждое наше изделие это сложный инженерный продукт,
                включающий в&nbsp;себя передовые мировые стандарты производства
                мебели. Все это сделано для того, чтобы наша мебель
                безупречно служила вам долгие годы
              </Typography>
            </Grid>
          )}
        </Grid>
      </Hidden>
      <Grid container justify="center" className={classes['button-container']}>
        <Grid item xs={10} sm={6} md={4}>
          <MainButton>Рассчитать стоимость</MainButton>
        </Grid>
      </Grid>
    </Container>
  );
};
