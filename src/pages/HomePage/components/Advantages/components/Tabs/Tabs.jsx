import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
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
      bottom: '4px',
    },
    '&:last-of-type&:after': {
      display: 'none',
    },
    '&:hover': {
      color: 'red',
    },
  },
  active: {
    cursor: 'default',
    color: 'red',
  },
  'tab-content': {
    display: 'none',
  },
  'tab-content_visible': {
    display: 'block',
  },
});

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
        {tabs.map((tab) => {
          const activeClass = activeTab === tab.title
            ? cx(classes.active, classes.tab) : cx(classes.tab);
          return (
            <li
              key={tab.title}
              className={activeClass}
              onClick={handeChangeTab(tab.title)}
            >
              <Typography component="span" variant="h6" color="inherit">{tab.title}</Typography>
            </li>
          );
        })}
      </ul>
      {children.map((child) => {
        const activeTabContent = activeTab === child.props.label
          ? cx(classes['tab-content_visible'], classes['tab-content'])
          : cx(classes['tab-content']);
        return (
          <div key={child.props.label} className={activeTabContent}>{child}</div>
        );
      })}
    </>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onChange: PropTypes.func.isRequired,
};
