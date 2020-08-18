import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import cx from 'classnames';
import { pages } from './constants';
import {
  Page,
  Pagination,
} from './components';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    minHeight: '700px',
    overflow: 'hidden',
  },
  slider: {
    position: 'relative',
    display: 'flex',
    width: `${pages.length}00%`,
    height: '100%',
    transition: 'left .7s ease-in-out',
  },
  nav: {
    width: '50px',
    height: '50px',
    color: 'white',
    position: 'absolute',
    cursor: 'pointer',
    zIndex: '50',
  },
  prev: {
    top: '50%',
    left: '20px',
  },
  next: {
    top: '50%',
    right: '20px',
  },
});

export const Carousel = () => {
  const classes = useStyles();

  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClickPrev = useCallback(
    () => {
      setActiveSlide((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return pages.length - 1;
      });
    },
    [],
  );

  const handleClickNext = useCallback(
    () => {
      setActiveSlide((prev) => {
        if (prev < pages.length - 1) {
          return prev + 1;
        }

        return 0;
      });
    },
    [],
  );

  const handleChangeSlide = useCallback(
    (value) => {
      setActiveSlide(value);
    },
    [],
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleRotate = () => {
      handleClickNext();
    };

    const interval = setInterval(() => handleRotate(), 15000);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [handleClickNext]);

  return (
    <div className={classes.root}>
      <NavigateBeforeIcon onClick={handleClickPrev} className={cx(classes.prev, classes.nav)} />
      <div className={classes.slider} style={{ left: `-${windowWidth * activeSlide}px` }}>
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
      <NavigateNextIcon onClick={handleClickNext} className={cx(classes.next, classes.nav)} />
      <Pagination
        currentPage={activeSlide}
        pages={pages}
        onChangeSlide={handleChangeSlide}
      />
    </div>
  );
};
