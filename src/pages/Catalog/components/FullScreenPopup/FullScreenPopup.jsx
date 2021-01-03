import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

  },
  img: {
    width: '100%',
    height: '100%',
    opacity: '1',
    objectFit: 'cover',
    transition: 'opacity .5s ease-out',
  },
  paperRoot: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    minWidth: '100px',
    background: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    minHeight: '100px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FullScreenPopup = ({
  img,
  isOpen,
  onClose,
}) => {
  const classes = useStyles();

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
      <img className={classes.img} src={img} alt="Товар" />
    </Dialog>
  );
};

FullScreenPopup.propTypes = {
  img: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
