import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    height: '27px',
    padding: '11px 48px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    background: theme.palette.grey[100],
  },
  option: {
    cursor: 'pointer',
    lineHeight: '1',
    padding: '0 20px',
  },
  selectedOption: {
    cursor: 'default',
    color: theme.palette.primary.main,
  },
}));

// TODO Доверстать селект секции
export const SectionPicker = ({ options, value, onChange }) => {
  const classes = useStyles();

  const handleClick = useCallback((id) => () => {
    onChange({
      name: 'section',
      value: id,
    });
  }, [onChange]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {options.map((section, i) => {
          if (i !== options.length - 1) {
            return (
              <>
                <Typography
                  variant="h6"
                  className={cx(classes.option, {
                    [classes.selectedOption]: value === section.id,
                  })}
                  onClick={handleClick(section.id)}
                >
                  {section.title}
                </Typography>
                <span className={classes.dash}>&mdash;</span>
              </>
            );
          }

          return (
            <Typography
              variant="h6"
              className={cx(classes.option, {
                [classes.selectedOption]: value === section.id,
              })}
              onClick={handleClick(section.id)}
            >
              {section.title}
            </Typography>
          );
        })}
      </div>
    </div>
  );
};

SectionPicker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
