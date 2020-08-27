import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    border: '1px solid rgba(235, 47, 70, 0.2)',
    padding: '10px',
    transition: 'all .3s ease-in-out',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  number: {
    fontSize: '40px',
    color: theme.palette.primary.main,
  },
  title: {
    paddingLeft: '10px',
  },
  dropdown: {
    transition: 'all .3s ease-in-out',
    paddingLeft: '8px',
    overflow: 'hidden',
  },
  dropdown__icon: {
    width: '30px',
    height: '30px',
    color: theme.palette.primary.main,
    transition: 'all .3s ease-in-out',
  },
}));

export const Question = ({
  id,
  title,
  children,
}) => {
  const classes = useStyles();
  const itemRef = useRef();
  const dropdownRef = useRef();
  const [dropdownActive, setDropdownActive] = useState(true);
  const [dropdownHeight, setDropdownHeight] = useState();

  const handleToggle = useCallback(() => {
    setDropdownActive((prev) => !prev);
  }, []);

  useEffect(() => {
    setDropdownHeight(window.getComputedStyle(dropdownRef.current).height);
    setDropdownActive(false);
  }, [dropdownRef]);

  return (
    <div
      className={classes.root}
      ref={itemRef}
      onClick={handleToggle}
    >
      <Grid container spacing={1} className={classes.top}>
        <Grid item xs={1} container direction="column" justify="center" alignItems="center">
          <Typography className={classes.number}>{id}</Typography>
        </Grid>
        <Grid item xs={10} container direction="column" justify="center">
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={1} container direction="column" justify="center" alignItems="center">
          <ArrowForwardIosIcon
            className={classes.dropdown__icon}
            style={{ transform: dropdownActive ? 'rotate(-90deg)' : 'rotate(90deg)' }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.dropdown}
        ref={dropdownRef}
        style={{ height: dropdownActive ? dropdownHeight : '0' }}
      >
        <Grid item xs={12}>
          <Typography variant="body2">
            {children}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
