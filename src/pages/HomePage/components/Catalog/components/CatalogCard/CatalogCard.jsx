import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    background: 'white',
    marginBottom: '30px',
    '&:hover $img:after': {
      background: 'rgba(0,0,0,.3)',
    },
    '&:hover $hoverText': {
      opacity: 1,
      top: '40%',
    },
    '&:hover $caption:after': {
      width: '100%',
    },
    '&:hover $arrow': {
      right: '5px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  img: {
    width: '100%',
    height: '252px',
    marginBottom: '12px',
    position: 'relative',
    display: 'block',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    '&:after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      background: 'rgba(0,0,0,0)',
      transition: 'background .3s',
    },
  },
  hoverText: {
    fontSize: '18px',
    color: 'white',
    opacity: '0',
    position: 'absolute',
    zIndex: '20',
    transition: 'all .3s ease-in-out',
    top: '56%',
    left: '50px',
  },
  caption: {
    position: 'relative',
    fontSize: '16px',
    '&:after': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      content: '""',
      width: '0',
      height: '1px',
      background: 'black',
      transition: 'all .3s ease-in-out',
    },
  },
  subtitle: {
    fontStyle: 'italic',
  },
  arrow: {
    position: 'absolute',
    transition: 'all .3s ease-in-out',
    color: 'white',
    width: '30px',
    height: '30px',
    bottom: '5px',
    right: '-30px',
    zIndex: '20',
  },
});

export const CatalogCard = ({
  title,
  subtitle,
  caption,
  img,
  href,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href={href} className={classes.link}>
        <div className={classes.img} style={{ backgroundImage: `url(${img})` }}>
          <div className={classes.hoverText}>
            <Typography variant="h5">{title}</Typography>
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          </div>
          <ArrowForwardIcon className={classes.arrow} />
        </div>
        <Typography
          component="span"
          className={classes.caption}
        >
          {caption}
        </Typography>
      </a>
    </div>
  );
};

CatalogCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  href: PropTypes.string,
};

CatalogCard.defaultProps = {
  href: '/',
};
