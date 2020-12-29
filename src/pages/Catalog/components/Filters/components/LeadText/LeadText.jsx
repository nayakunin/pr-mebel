import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { texts } from './constants';

export const LeadText = ({ selectedSection }) => (
  <Typography variant="body1">
    {texts[selectedSection]}
  </Typography>
);

LeadText.propTypes = {
  selectedSection: PropTypes.string.isRequired,
};
