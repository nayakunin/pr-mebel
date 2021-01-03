import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Container,
  Grid,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import {
  BlockTitle,
} from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  form: {
    marginTop: '40px',
  },
  'form-control': {
    width: '100%',
  },
  button: {
    lineHeight: '45px',
    background: theme.palette.primary.main,
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
      color: theme.palette.primary.main,
      background: 'white',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  label: {
    display: 'block',
    width: '100%',
    color: theme.palette.grey[500],
  },
}));

export const OldFilters = ({
  filter,
  options,
  onApplyFilter,
  onChange,
}) => {
  const classes = useStyles();

  const styleSelectDisabled = filter.section === 'accessories'
    || filter.section === 'lightingSystems';

  const doorTypeSelectDisabled = filter.section !== 'cupboard';

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    onChange({
      name,
      value,
    });
  }, [onChange]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    onApplyFilter();
  }, [onApplyFilter]);

  return (
    <Container className={classes.root}>
      <BlockTitle>
        <Typography variant="h4">
          Каталог
        </Typography>
      </BlockTitle>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <FormControl
              className={classes['form-control']}
            >
              <InputLabel
                id="filter-sections-label"
                className={classes.label}
              >
                Раздел
              </InputLabel>
              <Select
                labelId="filter-sections-label"
                name="section"
                value={filter.section}
                onChange={handleChange}
              >
                {options.sections.map((el) => (
                  <MenuItem value={el.id} key={el.id}>{el.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl
              className={classes['form-control']}
              disabled={styleSelectDisabled}
            >
              <InputLabel
                id="filter-styles-label"
                className={classes.label}
              >
                Стиль
              </InputLabel>
              <Select
                labelId="filter-styles-label"
                name="style"
                value={filter.style}
                onChange={handleChange}
              >
                {options.styles.map((el) => (
                  <MenuItem value={el.id} key={el.id}>{el.title}</MenuItem>
                ))}
              </Select>
              {styleSelectDisabled && (
                <FormHelperText>Фильтр не применим для выбранной секции</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl
              className={classes['form-control']}
              disabled={doorTypeSelectDisabled}
            >
              <InputLabel
                id="filter-doorTypes-label"
                className={classes.label}
              >
                Тип дверей
              </InputLabel>
              <Select
                labelId="filter-doorTypes-label"
                name="doorType"
                value={filter.doorType}
                onChange={handleChange}
              >
                {options.doorTypes.map((el) => (
                  <MenuItem value={el.id} key={el.id}>{el.title}</MenuItem>
                ))}
              </Select>
              {doorTypeSelectDisabled && (
                <FormHelperText>Фильтр не применим для выбранной секции</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3} container>
            <Grid item md={3} />
            <Grid item xs={12} md={6} container alignItems="center">
              <button type="submit" className={classes.button}>
                Применить
              </button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

OldFilters.propTypes = {
  options: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
    styles: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
    doorTypes: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
  }).isRequired,
  filter: PropTypes.shape({
    section: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    doorType: PropTypes.string.isRequired,
  }).isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
