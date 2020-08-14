import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { MainButton } from '../../../../components/MainButton/MainButton';

const TABS = [
  {
    title: 'Однотонный',
    img: 'http://placekitten.com/300/300',
  },
  {
    title: 'Комбинированный',
    img: 'http://placekitten.com/300/301',
  },
  {
    title: 'Кобминированный с Alcantara',
    img: 'http://placekitten.com/300/302',
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
  },
  content: {
    marginTop: '50px',
    height: '400px',
  },
  img: {
    height: '100%',
    position: 'relative',
  },
  list: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
    marginTop: '40px',
  },
  option: {
    color: 'black',
    transition: 'all .3s ease-in-out',
    marginBottom: '16px',
    cursor: 'pointer',
    '&:hover': {
      color: 'red',
    },
  },
  active: {
    color: 'red',
  },
  'button-container': {
    marginTop: '32px',
  },
});

export const WardrobeLeft = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(TABS[0].title);

  const handleClick = useCallback((tab) => () => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Комфорт и удобство, продуманное до мелочей
          </Typography>
        </BlockTitle>
        <Grid container spacing={6} className={classes.content}>
          <Grid item xs={6}>
            <img
              src={TABS.filter((tab) => tab.title === activeTab)[0].img}
              alt="шкаф"
              className={classes.img}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>
              Мы&nbsp;разработали специальные решения для оптимизации
              хранения ваших вещей, которые позволяют сделать ежедневно
              пользование мебелью не&nbsp;только удобным и&nbsp;комфортным,
              но&nbsp;еще и&nbsp;приятным
            </Typography>
            <ul className={classes.list}>
              {TABS.map((tab) => (
                <li
                  key={tab.title}
                  className={cx(classes.option, {
                    [classes.active]: activeTab === tab.title,
                  })}
                  onClick={handleClick(tab.title)}
                >
                  <Typography color="inherit" variant="h6">
                    {tab.title}
                  </Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes['button-container']}>
          <Grid item xs={4}>
            {/* TODO Add callback */}
            <MainButton onClick={() => ({})}>Рассчитать стоимость</MainButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
