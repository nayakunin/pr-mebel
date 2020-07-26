import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from '../../../../components/BlockTitle/BlockTitle';
import { Question } from './components/Question/Question';

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
  },
  container: {
    marginTop: '30px',
    height: '345px',
    overflow: 'scroll',
  },
});

export const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <BlockTitle>
          <Typography variant="h4">
            Часто задаваемые вопросы
          </Typography>
        </BlockTitle>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={8} container spacing={2} className={classes.container}>
            <Grid item xs={12}>
              <Question
                id="01"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="02"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="03"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="04"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="05"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="06"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="07"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="08"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="09"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
            <Grid item xs={12}>
              <Question
                id="10"
                title="Сколько лет ваша компания существует на рынке?"
              >
                Наш салон расположен на&nbsp;одном и&nbsp;том&nbsp;же
                месте и&nbsp;успешно работает уже более 20&nbsp;лет.
                Приходите, мы&nbsp;будем рады вас видеть и&nbsp;поделимся
                с&nbsp;вами всем нашим опытом!
              </Question>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
