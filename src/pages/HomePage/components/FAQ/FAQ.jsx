import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, Typography, Grid } from '@material-ui/core';
import { BlockTitle } from 'components';
import { Question } from './components';
import { LIST } from './constants';

const useStyles = makeStyles({
  container: {
    marginTop: '30px',
  },
});

export const FAQ = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <BlockTitle>
        <Typography variant="h4">
          Часто задаваемые вопросы
        </Typography>
      </BlockTitle>
      <Grid container className={classes.container} spacing={3}>
        {LIST.map((item) => (
          <>
            {isMdUp && (<Grid item xs={0} md={2} />)}
            <Grid key={item.title} item xs={12} md={8}>
              <Question
                id={item.id}
                title={item.title}
              >
                {item.title}
              </Question>
            </Grid>
            {isMdUp && (<Grid item xs={0} md={2} />)}
          </>
        ))}
      </Grid>
    </Container>
  );
};
