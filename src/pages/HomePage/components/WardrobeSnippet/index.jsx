import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { BlockTitle } from 'components';
import { Typography, Popover } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  '@keyframes pulse': {
    '40%': {
      boxShadow: '0 0 0 0 rgba(255, 0, 0, .7)',
    },
    '80%': {
      boxShadow: '0 0 0 10px rgba(255, 0, 0, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 10px rgba(255, 0, 0, 0)',
    },
  },
  circle: {
    width: '11px',
    height: '11px',
    background: '#b0a3a3',
    border: '2px solid white',
    borderRadius: '50%',
    position: 'relative',
    animation: '$pulse 2s infinite',
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    width: '310px',
  },
  paperContainer: {
    position: 'relative',
    zIndex: '1500',
  },
  container: {
    marginTop: '10px',
    padding: '6px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '16px',
    lineHeight: '18px',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '1.3',
  },
  img: {
    width: '310px',
    height: '310px',
  },
}));

export const WardrobeSnippet = ({
  title,
  text,
  img,
  direction,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        className={classes.circle}
      />
      <Popover
        id="mouse-over-popover"
        open={open}
        className={classes.popover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: direction,
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: direction === 'right' ? 'left' : 'right',
        }}
        PaperProps={{
          className: classes.paper,
        }}
        onClose={handleClose}
        disableScrollLock
      >
        <div className={classes.paperContainer}>
          <img
            className={classes.img}
            src={img}
            alt="Сниппет изображения шкафа"
          />
          <div className={classes.container}>
            <BlockTitle>
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
            </BlockTitle>
            <Typography variant="body2" className={classes.text}>
              {text}
            </Typography>
          </div>
        </div>
      </Popover>
    </div>
  );
};

WardrobeSnippet.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  direction: PropTypes.string.isRequired,
};
