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
import { ReactComponent as Fb } from 'assets/fb.svg';
import { ReactComponent as Inst } from 'assets/in.svg';
import { ReactComponent as Vk } from 'assets/vk.svg';

const useStyles = makeStyles((theme) => ({
  root: {

  },
  imgContainer: {
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
  imgPrev2: {
    left: '-200%',
  },
  imgPrev1: {
    left: '-100%',
  },
  imgCenter: {
    left: '0',
  },
  imgNext1: {
    left: '100%',
  },
  imgNext2: {
    left: '200%',
  },
  label: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
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
  arrowLeft: {
    left: '0',
  },
  arrowRight: {
    right: '0',
  },
  icon: {
    color: 'white',
  },
  title: {
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  description: {
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    paperRoot: {
      height: '100%',
    },
    container: {
      height: '100%',
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
    gridItem: {
      flexGrow: '0',
      flexBasis: 'unset',
    },
  },
}));

export const CardPopup = ({
  items,
  currentItemId,
  isOpen,
  onClose,
  onClickBack,
  onClickForward,
  onDownloadMoreCards,
}) => {
  const classes = useStyles();
  // const theme = useTheme();

  // const smDown = useMediaQuery(theme.breakpoints.down('sm'));

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

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      className={classes.root}
      PaperProps={{
        className: classes.paperRoot,
      }}
    >
      <Grid container className={classes.container}>
        <Grid item xs={12} md={7} className={classes.gridItem}>
          <LoadingBackground>
            <div className={classes.imgContainer}>
              {currentItemId > 1 && (

                <img
                  className={cx(classes.img, classes.imgPrev2)}
                  src={items[currentItemId - 2].imageMedium.url}
                  alt="Картинка в модальном окне"
                />

              )}
              {currentItemId > 0 && (
                <>
                  <div
                    className={cx(classes.arrow, classes.arrowLeft)}
                    onClick={handleClickBack}
                  >
                    <ArrowBack className={classes.icon} />
                  </div>
                  <img
                    className={cx(classes.img, classes.imgPrev1)}
                    src={items[currentItemId - 1].imageMedium.url}
                    alt="Картинка в модальном окне"
                  />
                </>
              )}
              {/* TODO Избавиться от LazyImage */}
              <LazyImage
                className={cx(classes.img, classes.imgCenter)}
                src={items[currentItemId].imageMedium.url}
                alt="Картинка в модальном окне"
              />
              {currentItemId < items.length - 1 && (
                <>
                  <img
                    className={cx(classes.img, classes.imgNext1)}
                    src={items[currentItemId + 1].imageMedium.url}
                    alt="Картинка в модальном окне"
                  />
                  <div
                    className={cx(classes.arrow, classes.arrowRight)}
                    onClick={handleClickForward}
                  >
                    <ArrowForward className={classes.icon} />
                  </div>
                </>
              )}
              {currentItemId < items.length - 2 && (
                <img
                  className={cx(classes.img, classes.imgNext2)}
                  src={items[currentItemId + 2].imageMedium.url}
                  alt="Картинка в модальном окне"
                />
              )}
            </div>
          </LoadingBackground>
        </Grid>
        <Grid item xs={12} md={5} className={classes.descriptionContainer}>
          <div className={classes.descriptionContainerTop}>
            <Typography variant="body1" gutterBottom className={classes.title}>
              Коллекция:&nbsp;
              <Typography varaint="body1" component="span" className={classes.text}>
                {items[currentItemId].collection}
              </Typography>
            </Typography>
            {items[currentItemId].description && (
              <div className={classes.description}>
                <Typography variant="body1" className={classes.title}>
                  Описание:
                </Typography>
                <Typography varaint="body1" className={classes.text}>
                  {items[currentItemId].description}
                </Typography>
              </div>
            )}
            <Typography variant="body1" gutterBottom className={classes.title}>
              Артикул:&nbsp;
              <Typography varaint="body1" component="span" className={classes.text}>
                {items[currentItemId].id}
              </Typography>
            </Typography>
          </div>
          <div className={classes.descriptionContainerTop}>
            <MainButton>Рассчитать стоимость</MainButton>
            <Grid container className={classes.socials}>
              <Grid item xs={4} />
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={4} container justify="center">
                  <a href="https://www.instagram.com/pr_mebel.ru/">
                    <Inst className={classes.socialIcon} />
                  </a>
                </Grid>
                <Grid item xs={4} container justify="center">
                  <a href="https://vk.com/public185518769">
                    <Vk className={classes.socialIcon} />
                  </a>
                </Grid>
                <Grid item xs={4} container justify="center">
                  <a href="https://www.facebook.com/%D0%A7%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%D0%B5%D1%80-108136607213942">
                    <Fb className={classes.socialIcon} />
                  </a>
                </Grid>
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
  onClickBack: PropTypes.func.isRequired,
  onClickForward: PropTypes.func.isRequired,
  onDownloadMoreCards: PropTypes.func.isRequired,
};
