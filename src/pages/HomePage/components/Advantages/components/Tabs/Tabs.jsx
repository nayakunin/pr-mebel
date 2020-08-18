import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabs: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  tab: {
    marginRight: '30px',
    position: 'relative',
    transition: 'all .3s',
    cursor: 'pointer',
    '&:after': {
      position: 'absolute',
      fontSize: '20px',
      fontWeight: '300',
      color: 'black',
      content: '"/"',
      right: '-20px',
      bottom: '0',
    },
    '&:last-of-type&:after': {
      display: 'none',
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  active: {
    cursor: 'default',
    color: theme.palette.primary.main,
  },
  'tab-content': {
    display: 'none',
  },
  'tab-content_visible': {
    display: 'block',
  },
}));

export const Tabs = ({
  activeTab,
  tabs,
  children,
  onChange,
}) => {
  const classes = useStyles();

  const handeChangeTab = useCallback((tab) => () => {
    if (tab !== activeTab) {
      onChange(tab);
    }
  }, [onChange, activeTab]);

  return (
    <>
      <ul className={classes.tabs}>
        {tabs.map((tab) => (
          <li
            key={tab.title}
            className={cx(classes.tab, {
              [classes.active]: activeTab === tab.title,
            })}
            onClick={handeChangeTab(tab.title)}
          >
            <Typography component="span" variant="h6" color="inherit">{tab.title}</Typography>
          </li>
        ))}
      </ul>
      {children.map((child) => (
        <div
          key={child.props.label}
          className={cx(classes['tab-content'], {
            [classes['tab-content_visible']]: activeTab === child.props.label,
          })}
        >
          {child}
        </div>
      ))}
    </>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
};
