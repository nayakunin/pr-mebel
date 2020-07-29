import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { Tabs } from './components/Tabs/Tabs';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { MainButton } from '../../../../components/MainButton/MainButton';

const TABS = [
  {
    title: 'Эмаль',
    list: [
      'Классичесике и современные модели фасадов',
      'Патина, матовые и глянцевые отделки',
      'Более 2000 оттенков',
      'Разработка фасадов по вашему образцу',
    ],
    img: 'http://placekitten.com/300/300',
  },
  {
    title: 'Ламинат',
    list: [
      'Итальянские, немецкие и австрийские материалы',
      '100% экологичность, можно применять в детских комнатах',
      'Более 300 вариантов декоров под любой дизайн помещения',
      'Высокая износостойкость',
      'Декоративная ударопрочная кромка (не Китай).',
    ],
    img: 'http://placekitten.com/300/301',
  },
  {
    title: '3D Ламинат',
    list: [
      'Европейские материалы',
      'Глубокая имитация текстуры натуральных материалов',
      'Более 50 вариантов декоров под древесину, камень, кожу',
      'Высокая износостойкость',
    ],
    img: 'http://placekitten.com/300/302',
  },
  {
    title: 'Шпон',
    list: [
      'Подбор шпона по образцу',
      'Покраска эмалью',
      'Тонирование в нужный цвет',
      'Сохраняется точный рисунок древесины',
    ],
    img: 'http://placekitten.com/300/306',
  },
  {
    title: 'Кожа',
    list: [
      'Прочный и долговечный материал',
      'Выглядит благородно и элегантно',
      'Создает атмосферу респектабельности и эксклюзивности',
    ],
    img: 'http://placekitten.com/300/303',
  },
  {
    title: 'Стекло',
    list: [
      'Декоративные и крашеные стекла',
      'Декоративные и цветные зеркала',
      'Более 100 декоров',
      'Нанесение декоративной гравировки',
      'Художественное матирование стекла',
      'Составные панно из зеркал',
    ],
    img: 'http://placekitten.com/300/304',
  },
];

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
                  // TODO Move to a separate component
                  <div key={tab.title} label={tab.title}>
                    <ul className={classes.list}>
                      {tab.list.map((option) => (
                        // TODO Move to a separate component
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
