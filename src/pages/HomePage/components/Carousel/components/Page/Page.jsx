import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  imageContainer: {
    position: 'absolute',
    objectPosition: 'center',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'relative',
    padding: '0',
    width: '1140px',
    zIndex: '10',
    boxSizing: 'border-box',
    '@media (max-width: 1250px)': {
      width: '930px',
    },
    '@media (max-width: 990px)': {
      width: '690px',
    },
    '@media (max-width: 768px)': {
      width: '510px',
    },
    '@media (max-width: 550px)': {
      width: '100%',
      padding: '15px',
    },
  },
  text: {
    color: 'white',
  },
  title: {
    fontFamily: 'PlayfairDisplay Italic, serif',
    fontSize: '7.4vh',
    lineHeight: '1.1',
    letterSpacing: '2px',
    '&:last-of-type': {
      marginBottom: '15px',
    },
    '@media (max-width: 990px)': {
      fontSize: '72px',
      lineHeight: '68px',
    },
    '@media (max-width: 768px)': {
      fontSize: '65px',
      lineHeight: '62px',
    },
    '@media (max-width: 550px)': {
      fontSize: '42px',
      lineHeight: '38px',
    },
    '@media (max-width: 375px)': {
      fontSize: '40px',
    },
  },
  subtitle: {
    '&:last-of-type': {
      marginBottom: '20px',
    },
    fontFamily: 'PlayfairDisplay Italic, serif',
    fontSize: '4.6vh',
    letterSpacing: '2px',
    lineHeight: '1',
    '@media (max-width: 990px)': {
      fontSize: '45px',
      // lineHeight: '1.1',
    },
    '@media (max-width: 768px)': {
      fontSize: '38px',
    },
    '@media (max-width: 550px)': {
      fontSize: '28px',
    },
    '@media (max-width: 375px)': {
      fontSize: '24px',
    },
  },
  bottomText: {
    fontSize: '2.8vh',
    lineHeight: '1.3',
    '@media (max-width: 990px)': {
      fontSize: '25px',
    },
    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
    '@media (max-width: 550px)': {
      fontSize: '16px',
    },
  },
  button: {
    padding: '15px 50px',
    textTransform: 'capitalize',
    borderRadius: '50px',
    background: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'border .2s',
    border: 'solid 2px white',
    '&:hover': {
      border: `solid 2px ${theme.palette.primary.main}`,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  buttonText: {
    textTransform: 'capitalize',
  },
  buttonContainer: {
    marginTop: '60px',
  },
}));

export const Page = ({
  titles,
  subtitles,
  texts,
  imageSet,
  to,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
    >
      <picture className={classes.imageContainer}>
        <source className={classes.image} srcSet={imageSet.small} media="(max-width: 575px)" />
        <source className={classes.image} srcSet={imageSet.medium} media="(max-width: 990px)" />
        <source className={classes.image} srcSet={imageSet.large} />
        <img className={classes.image} src={imageSet.small} alt="Фоновое изображение" />
      </picture>
      <div className={classes.content}>
        {titles.map((title) => (
          <Typography
            key={title}
            className={cx(classes.text, classes.title)}
          >
            {title}
          </Typography>
        ))}
        <div className={classes.subtitlesContainer}>
          {subtitles.map((subtitle) => (
            <Typography
              key={subtitle}
              className={cx(classes.text, classes.subtitle)}
            >
              {subtitle}
            </Typography>
          ))}
        </div>
        <div className={classes.bottomTextContainer}>
          {texts.map((text) => (
            <Typography
              key={text}
              className={cx(classes.text, classes.bottomText)}
            >
              {text}
            </Typography>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          <Link to={to}>
            <button type="button" className={classes.button}>
              <Typography className={classes.buttonText}>
                Подробнее
              </Typography>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSet: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
};

Page.defaultProps = {
  subtitles: [],
};
