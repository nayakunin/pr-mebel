import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import cx from 'classnames';
import { Container } from '@material-ui/core';
import { pages } from './constants';
import { Page, Pagination } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '700px',
    overflow: 'hidden',
  },
  slider: {
    position: 'relative',
    display: 'flex',
    width: `${pages.length}00%`,
    height: '100%',
    transition: 'all .4s ease-in-out',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: '100px',
    width: '100%',
    '@media (max-width: 1250px)': {
      bottom: '50px',
    },
  },
  paginationInnerContainer: {
    maxWidth: '1140px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '0',
    '@media (max-width: 1250px)': {
      justifyContent: 'center',
    },
  },
  nav: {
    color: 'white',
  },
  navDesktop: {
    width: '40px',
    height: '40px',
    color: 'white',
    position: 'absolute',
    cursor: 'pointer',
    zIndex: '50',
    '@media (max-width: 1250px)': {
      display: 'none',
    },
  },
  prevDesktop: {
    top: '50%',
    left: '30px',
  },
  nextDesktop: {
    top: '50%',
    right: '30px',
  },
  navMobile: {
    display: 'none',
    '@media (max-width: 1250px)': {
      display: 'block',
    },
  },
  prevMobile: {
    marginRight: theme.spacing(3),
  },
  nextMobile: {
    marginLeft: theme.spacing(3),
  },
}));

export const Carousel = () => {
  const classes = useStyles();
  const rootRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleClickPrev = useCallback(() => {
    setActiveSlide((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return pages.length - 1;
    });
  }, []);

  const handleClickNext = useCallback(() => {
    setActiveSlide((prev) => {
      if (prev < pages.length - 1) {
        return prev + 1;
      }

      return 0;
    });
  }, []);

  const handleChangeSlide = useCallback((value) => {
    setActiveSlide(value);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(rootRef.current ? rootRef.current.offsetWidth : 0);
    };

    const handleRotate = () => {
      handleClickNext();
    };

    if (rootRef.current) {
      handleResize();
    }

    const interval = setInterval(() => handleRotate(), 7000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [handleClickNext, rootRef]);

  return (
    <div className={classes.root} ref={rootRef}>
      <ArrowBackIosIcon
        className={cx(
          classes.prevDesktop,
          classes.navDesktop,
          classes.nav,
        )}
        onClick={handleClickPrev}
      />
      <div
        className={classes.slider}
        style={{ transform: `translateX(-${windowWidth * activeSlide}px)` }}
      >
        {pages.map((page) => (
          <Page
            key={page.titles[0]}
            titles={page.titles}
            subtitles={page.subtitles}
            texts={page.texts}
            imageSet={page.imageSet}
            to={page.to}
          />
        ))}
      </div>
      <ArrowForwardIosIcon
        className={cx(
          classes.nextDesktop,
          classes.navDesktop,
          classes.nav,
        )}
        onClick={handleClickNext}
      />
      <div className={classes.paginationContainer}>
        <Container className={classes.paginationInnerContainer}>
          <ArrowBackIosIcon
            className={cx(
              classes.prevMobile,
              classes.navMobile,
              classes.nav,
            )}
            onClick={handleClickPrev}
          />
          <Pagination
            currentPage={activeSlide}
            pages={pages}
            onChangeSlide={handleChangeSlide}
          />
          <ArrowForwardIosIcon
            className={cx(
              classes.nextMobile,
              classes.navMobile,
              classes.nav,
            )}
            onClick={handleClickNext}
          />
        </Container>
      </div>
    </div>
  );
};
