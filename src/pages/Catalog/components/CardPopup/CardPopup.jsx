import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import cx from 'classnames';
import {
  MainButton,
  LoadingBackground,
  LazyImage,
} from 'components';

const useStyles = makeStyles({
  root: {

  },
  'img-container': {
    width: '100%',
    paddingTop: '66.66%',
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  img_prev2: {
    left: '-200%',
  },
  img_prev1: {
    left: '-100%',
  },
  img_center: {
    left: '0',
  },
  img_next1: {
    left: '100%',
  },
  img_next2: {
    left: '200%',
  },
  label: {
    fontWeight: 'bold',
  },
  'description-container': {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  socials: {
    marginTop: '10px',
  },
  arrow: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '50',
    backgroundColor: 'rgba(0, 0, 0, .2)',
    width: '50px',
    height: '30px',
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
  },
  arrow_left: {
    left: '0',
  },
  arrow_right: {
    right: '0',
  },
  icon: {
    color: 'white',
  },
});

export const CardPopup = ({
  items,
  currentItemId,
  isOpen,
  onClose,
  onButtonClick,
  onClickBack,
  onClickForward,
  onDownloadMoreCards,
}) => {
  const classes = useStyles();

  // const handleImageClick = useCallback(() => {
  //   onImageClick(currentItemId);
  // });

  const handleClickBack = useCallback(() => {
    onClickBack();
  }, [onClickBack]);

  const handleClickForward = useCallback(() => {
    onClickForward();
  }, [onClickForward]);

  useEffect(() => {
    if (items.length - 5 === currentItemId) {
      onDownloadMoreCards();
    }
  }, [items.length, currentItemId, onDownloadMoreCards]);

  // TODO Добавить плавный переход между картинками
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      className={classes.root}
    >
      <Grid container className={classes.grid}>
        <Grid item xs={7}>
          <LoadingBackground>
            <div className={classes['img-container']}>
              {currentItemId > 1 && (

                <img
                  className={cx(classes.img, classes.img_prev2)}
                  src={items[currentItemId - 2].imageMedium.url}
                  alt="Картинка в модальном окне"
                />

              )}
              {currentItemId > 0 && (
                <>
                  <div
                    className={cx(classes.arrow, classes.arrow_left)}
                    onClick={handleClickBack}
                  >
                    <ArrowBack className={classes.icon} />
                  </div>
                  <img
                    className={cx(classes.img, classes.img_prev1)}
                    src={items[currentItemId - 1].imageMedium.url}
                    alt="Картинка в модальном окне"
                  />
                </>
              )}
              <LazyImage
                className={cx(classes.img, classes.img_center)}
                src={items[currentItemId].imageMedium.url}
                alt="Картинка в модальном окне"
              />
              {currentItemId < items.length - 1 && (
                <>
                  <img
                    className={cx(classes.img, classes.img_next1)}
                    src={items[currentItemId + 1].imageMedium.url}
                    alt="Картинка в модальном окне"
                  />
                  <div
                    className={cx(classes.arrow, classes.arrow_right)}
                    onClick={handleClickForward}
                  >
                    <ArrowForward className={classes.icon} />
                  </div>
                </>
              )}
              {currentItemId < items.length - 2 && (
                <img
                  className={cx(classes.img, classes.img_next2)}
                  src={items[currentItemId + 2].imageMedium.url}
                  alt="Картинка в модальном окне"
                />
              )}
            </div>
          </LoadingBackground>
        </Grid>
        <Grid item xs={5} className={classes['description-container']}>
          <div className={classes['description-container_top']}>
            <Typography variant="h6" gutterBottom>
              Коллекция:&nbsp;
              <Typography varaint="body1" component="span">
                {items[currentItemId].collection}
              </Typography>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Артикул:&nbsp;
              <Typography varaint="body1" component="span">
                {items[currentItemId].id}
              </Typography>
            </Typography>
            {items[currentItemId].description && (
              <>
                <Typography variant="h6">Описание:</Typography>
                <Typography varaint="body1" component="span">
                  {items[currentItemId].description}
                </Typography>
              </>
            )}
          </div>
          <div className={classes['description-container_top']}>
            <MainButton onClick={onButtonClick}>Рассчитать стоимость</MainButton>
            <Grid container className={classes.socials}>
              <Grid item xs={4} />
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={4} container justify="center">inst</Grid>
                <Grid item xs={4} container justify="center">vk</Grid>
                <Grid item xs={4} container justify="center">fb</Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
};

CardPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    collection: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageFull: PropTypes.object.isRequired,
    imageMedium: PropTypes.object.isRequired,
    imageMinified: PropTypes.object,
  })).isRequired,
  currentItemId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onClickBack: PropTypes.func.isRequired,
  onClickForward: PropTypes.func.isRequired,
  onDownloadMoreCards: PropTypes.func.isRequired,
};
