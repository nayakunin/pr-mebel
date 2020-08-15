import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  openOrderFormPopup,
} from 'actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
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
      color: '#ff001f',
      background: 'white',
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

const MainButton = ({
  children,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <button
      type="button"
      className={classes.root}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default connect(
  null,
  (dispatch, ownProps) => {
    if (!ownProps.onClick) {
      return {
        onClick: () => dispatch(openOrderFormPopup()),
      };
    }

    return {
      onClick: ownProps.onClick,
    };
  },
)(MainButton);
