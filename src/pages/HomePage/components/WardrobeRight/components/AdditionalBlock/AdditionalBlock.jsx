import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { BlockTitle } from 'components';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    marginTop: '20px',
  },
});

export const AdditionalBlock = ({
  title,
  text,
}) => {
  const classes = useStyles();

  return (
    <>
      <BlockTitle>
        <Typography variant="h5">
          {title}
        </Typography>
      </BlockTitle>
      <Typography variant="body2" className={classes.text}>
        {text}
      </Typography>
    </>
  );
};

AdditionalBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
