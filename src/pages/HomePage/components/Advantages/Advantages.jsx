import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import {
  BlockTitle,
  MainButton,
} from 'components';
import { TABS } from '__constants__';
import { Tabs } from './components';

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
  },
  description: {
    marginTop: '30px',
  },
  materials: {
    marginTop: '40px',
  },
  list: {
    margin: '0',
    marginTop: '10px',
    paddingLeft: '30px',
    listStyle: 'none',
  },
  tabs: {
    marginTop: '10px',
  },
  'list-item': {
    position: 'relative',
    marginBottom: '2px',
  },
  check: {
    position: 'absolute',
    left: '-30px',
    color: 'red',
  },
  img: {
    width: '100%',
    height: '300px',
  },
  'button-container': {
    marginTop: '32px',
  },
});

export const Advantages = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(TABS[0].title);

  const handleChangeTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">Преимущества нашей продукции</Typography>
        </BlockTitle>
        <Grid container className={classes.description}>
          <Grid item xs={10}>
            <Typography>
              Мы&nbsp;постоянно улучшаем качество,
              эргономические и&nbsp;эстетические параметры нашей мебели.
              Начиная с&nbsp;подбора материалов и&nbsp;комплектующих мы&nbsp;создаем
              эксклюзивный проект будущего изделия, который не&nbsp;просто идеально
              впишется в&nbsp;ваш интерьер, а&nbsp;будет комфортен, удобен и&nbsp;функционален
              в&nbsp;использовании, и&nbsp;прослужит Вам долгие годы.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container className={classes.materials} spacing={2}>
          <Grid item xs={7} container direction="column">
            <Grid item>
              <BlockTitle>
                <Typography variant="h4">
                  Мы используем только премиальные
                  <br />
                  материалы для нашей мебели
                </Typography>
              </BlockTitle>
            </Grid>
            <Grid item className={classes.tabs}>
              <Tabs tabs={TABS} activeTab={activeTab} onChange={handleChangeTab}>
                {TABS.map((tab) => (
                  <div key={tab.title} label={tab.title}>
                    <ul className={classes.list}>
                      {tab.list.map((option) => (
                        <li key={option} className={classes['list-item']}>
                          <CheckIcon className={classes.check} />
                          <Typography>{option}</Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Tabs>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <img
              src={TABS.filter((tab) => tab.title === activeTab)[0].img}
              alt="smth"
              className={classes.img}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container justify="center" className={classes['button-container']}>
          <Grid item xs={4}>
            {/* TODO Add callback */}
            <MainButton onClick={() => ({})}>Рассчитать стоимость</MainButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
