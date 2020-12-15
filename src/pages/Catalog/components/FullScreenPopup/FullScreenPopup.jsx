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
      className={classes.root}
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
