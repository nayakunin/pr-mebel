import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '65px',
  },
});

export const Description = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography>
        Шоу-рум Частный Мебельер, представляет Вашему внимаю огромное разнообразие различных
        систем хранения премиум класса. От&nbsp;классических гардеробных,
        до&nbsp;современных шкафов купе,
        с&nbsp;реализацией самых смелых дизайнерских решений,
        учетом всех необходимых пожеланий в&nbsp;отделке
        и&nbsp;проектных особенностей. В&nbsp;нашем салоне&nbsp;Вы можете ознакомиться
        с&nbsp;нашими реализованными проектами,
        с&nbsp;люксовыми вариантами отделки от&nbsp;натурального шпона,
        до&nbsp;кожи, алькантары и&nbsp;стекла.
        Вы&nbsp;убедитесь в&nbsp;безграничности наших возможностей декора
        от&nbsp;дизайнерских фрезеровок и&nbsp;матирования стекла,
        до&nbsp;резьбы и&nbsp;патирования фасадов.
        Для нас, создание мебели&nbsp;&mdash; это искусство.
      </Typography>
    </Container>
  );
};