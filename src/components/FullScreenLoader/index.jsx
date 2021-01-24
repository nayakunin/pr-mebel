import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  '@keyframes cube-loader': {
    '0%, 10%': {
      transform: 'perspective(136px) rotateX(-180deg)',
      opacity: '0',
    },
    '25%, 75%': {
      transform: 'perspective(136px) rotateX(0deg)',
      opacity: '1',
    },
    '90%, 100%': {
      transform: 'perspective(136px) rotateY(180deg)',
      opacity: '0',
    },
  },
  cubeLoaderContainer: {
    alignItems: 'center',
    display: 'block',
    height: '100%',
    width: '100%',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    position: 'fixed',
    zIndex: '9999999999',
    background: '#fff',
    transition: '1s all',
    opacity: '1',
    visibility: 'visible',
  },
  caption: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-35px',
    marginTop: '-70px',
  },
  cubeLoader: {
    width: '73px',
    height: '73px',
    margin: '0 auto',
    marginTop: '49px',
    position: 'relative',
    transform: 'rotateZ(45deg)',
  },
  cube: {
    position: 'relative',
    width: '50%',
    height: '50%',
    float: 'left',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#ff001f',
      animation: '$cube-loader 2.76s infinite linear both',
      transformOrigin: '100% 100%',
    },
  },
  loader1: {
    transform: 'scale(1.1)',
  },
  loader2: {
    transform: 'scale(1.1) rotateZ(90deg)',

    '&:before': {
      animationDelay: '0.35s',
    },
  },
  loader3: {
    transform: 'scale(1.1) rotateZ(180deg)',

    '&:before': {
      animationDelay: '0.69s',
    },
  },
  loader4: {
    transform: 'scale(1.1) rotateZ(270deg)',

    '&:before': {
      animationDelay: '1.04s',
    },
  },
}));

export const FullScreenLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.cubeLoaderContainer}>
      <div className={classes.caption}>
        <div className={classes.cubeLoader}>
          <div className={classNames(classes.cube, classes.loader1)} />
          <div className={classNames(classes.cube, classes.loader2)} />
          <div className={classNames(classes.cube, classes.loader4)} />
          <div className={classNames(classes.cube, classes.loader3)} />
        </div>
      </div>
    </div>
  );
};
