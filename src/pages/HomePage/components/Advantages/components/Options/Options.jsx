import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  'tab-content': {
    display: 'none',
  },
  'tab-content_visible': {
    display: 'block',
  },
});

export const Options = ({
  activeTab,
  children,
}) => {
  const classes = useStyles();

  return (
    <>
      {children.map((child, i) => (
        <div
          key={child.props.label}
          className={cx(classes['tab-content'], {
            [classes['tab-content_visible']]: activeTab === i,
          })}
        >
          {child}
        </div>
      ))}
    </>
  );
};

Options.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  activeTab: PropTypes.number.isRequired,
};
