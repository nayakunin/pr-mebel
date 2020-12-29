import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  option: {
    display: 'inline-block',
    color: theme.palette.grey[500],
    cursor: 'pointer',
  },
  selectedOption: {
    cursor: 'default',
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: '14px',
    fontWeight: '600',
  },
  optionContainer: {
    marginTop: '10px',
  },
  dash: {
    margin: '0 10px',
  },
}));

export const BottomFilters = ({
  styleOptions,
  selectedStyle,
  doorTypeOptions,
  selectedDoorType,
  onChange,
}) => {
  const classes = useStyles();

  const handleClick = useCallback((id, name) => () => {
    onChange({
      name,
      value: id,
    });
  }, [onChange]);

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} sm={6}>
        <Grid item container xs={12} justify="center">
          <Typography variant="h6" className={classes.subtitle}>
            Стиль
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center" className={classes.optionContainer}>
          {styleOptions.map((option, i) => {
            if (i !== styleOptions.length - 1) {
              return (
                <>
                  <Typography
                    variant="body2"
                    component="span"
                    className={cx(classes.option, {
                      [classes.selectedOption]: selectedStyle === option.id,
                    })}
                    onClick={handleClick(option.id, 'style')}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.dash}
                  >
                    -
                  </Typography>
                </>
              );
            }

            return (
              <Typography
                variant="body2"
                component="span"
                className={cx(classes.option, {
                  [classes.selectedOption]: selectedStyle === option.id,
                })}
                onClick={handleClick(option.id, 'style')}
              >
                {option.title}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
      <Grid item container xs={12} sm={6}>
        <Grid item container xs={12} justify="center">
          <Typography variant="h6" className={classes.subtitle}>
            Тип открывания дверей
          </Typography>
        </Grid>
        <Grid item container xs={12} justify="center" className={classes.optionContainer}>
          {doorTypeOptions.map((option, i) => {
            if (i !== doorTypeOptions.length - 1) {
              return (
                <>
                  <Typography
                    variant="body2"
                    component="span"
                    className={cx(classes.option, {
                      [classes.selectedOption]: selectedDoorType === option.id,
                    })}
                    onClick={handleClick(option.id, 'doorType')}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    className={classes.dash}
                  >
                    -
                  </Typography>
                </>
              );
            }

            return (
              <Typography
                className={cx(classes.option, {
                  [classes.selectedOption]: selectedDoorType === option.id,
                })}
                onClick={handleClick(option.id, 'doorType')}
              >
                {option.title}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

BottomFilters.propTypes = {
  selectedStyle: PropTypes.string.isRequired,
  styleOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  selectedDoorType: PropTypes.string.isRequired,
  doorTypeOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
