import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  content: {
    position: 'relative',
    zIndex: '10',
  },
  text: {
    color: 'white',
  },
  title: {
    fontFamily: 'PlayfairDisplay Italic, serif',
    fontSize: '90px',
    lineHeight: '90px',
    letterSpacing: '2px',
    '&:last-of-type': {
      marginBottom: '15px',
    },
  },
  subtitle: {
    '&:last-of-type': {
      marginBottom: '20px',
    },
    fontFamily: 'PlayfairDisplay Italic, serif',
    fontSize: '60px',
    letterSpacing: '2px',
    lineHeight: '1',
  },
  'bottom-text': {
    fontSize: '36px',
    lineHeight: '1.3',
  },
  button: {
    padding: '20px 40px',
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
  'button-container': {
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
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
      style={{ backgroundImage: `url(${imageSet.large})` }}
    >
      <Grid item xs={9} className={classes.content}>
        {titles.map((title) => (
          <Typography
            key={title}
            className={cx(classes.text, classes.title)}
          >
            {title}
          </Typography>
        ))}
        <div className={classes.subtitles__container}>
          {subtitles.map((subtitle) => (
            <Typography
              key={subtitle}
              className={cx(classes.text, classes.subtitle)}
            >
              {subtitle}
            </Typography>
          ))}
        </div>
        <div className={classes['bottom-text__container']}>
          {texts.map((text) => (
            <Typography
              key={text}
              className={cx(classes.text, classes['bottom-text'])}
              variant="h4"
            >
              {text}
            </Typography>
          ))}
        </div>
        <div className={classes['button-container']}>
          <Link to={to}>
            <button type="button" className={classes.button}>
              <Typography variant="h6">
                Подробнее
              </Typography>
            </button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

Page.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  to: PropTypes.string.isRequired,
};

Page.defaultProps = {
  subtitles: [],
};
