import React, { useRef, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { MainButton } from '../../../../components/MainButton/MainButton';

const useStyles = makeStyles({
  root: {
    background: '#303030',
    padding: '80px 0',
  },
  input: {
    width: '100%',
    color: 'white',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid white',
    boxSizing: 'border-box',
    padding: '8px',
    '&:focus': {
      outline: 'none',
    },
  },
  text: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '100',
    lineHeight: '100%',
  },
  publish: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  icon: {
    color: 'red',
    width: '30px',
    height: '30px',
  },
  text_publish: {
    color: 'white',
    fontSize: '16px',
    lineHeight: '16px',
    marginLeft: '4px',
  },
  'copyright-link': {
    color: 'white',
  },
  'input-file': {
    display: 'none',
  },
  'button-container': {
    marginTop: '36px',
    marginBottom: '24px',
  },
  filenames: {
    color: 'white',
  },
});

export const FeedbackForm = () => {
  const classes = useStyles();
  const fileInputRef = useRef();
  const [fileNames, setFileNames] = useState([]);

  const handleFileInputClick = useCallback(() => {
    fileInputRef.current.click();
  }, [fileInputRef]);

  const handleFileUploadChange = useCallback(() => {
    const { files } = fileInputRef.current;
    const names = [];

    for (let i = 0; i < files.length; i++) {
      if (i > 2) {
        names.push(`И еще ${files.length - i}`);
        break;
      }
      names.push(files[i].name);
    }

    setFileNames(names);
  }, [fileInputRef]);

  return (
    <div className={classes.root}>
      <Container>
        <form className={classes.form}>
          <Grid container>
            <Grid item xs={6} container spacing={4}>
              <Grid item xs={6}>
                <input
                  type="text"
                  autoComplete="name"
                  className={classes.input}
                  placeholder="Имя"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <input
                  type="tel"
                  autoComplete="tel"
                  pattern="[7,8]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  className={classes.input}
                  placeholder="Телефон"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.text}>
                  Прикрепите, пожалуйста, эскизы вашей мебели или просто план помещения
                  с&nbsp;описанием ваших пожеланий и&nbsp;наш дизайнер
                  в&nbsp;кратчайшие сроки подготовит для вас свои предложения.
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5} container spacing={4}>
              <Grid
                item
                xs={4}
              >
                <input
                  type="file"
                  multiple
                  ref={fileInputRef}
                  className={classes['input-file']}
                  onChange={handleFileUploadChange}
                />
                <div onClick={handleFileInputClick} className={classes.publish}>
                  <PublishIcon className={classes.icon} />
                  <Typography className={classes.text_publish}>
                    Прикрепить
                    <br />
                    эскизы
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={8}>
                {fileNames.map((file) => (
                  <Typography key={file} className={classes.filenames}>{file}</Typography>
                ))}
              </Grid>
            </Grid>
            {/* TODO Добавить тип кнопки и доделать отправку формы */}
            <Grid item xs={12} container justify="center" className={classes['button-container']}>
              <Grid item xs={4}>
                <MainButton>Рассчитать стоимость</MainButton>
              </Grid>
            </Grid>
            <Grid item xs container justify="center">
              <Grid item xs={6}>
                <Typography className={classes.text} align="center">
                  Нажимая кнопку &laquo;Рассчитать стоимость&raquo;,
                  я&nbsp;даю согласие на&nbsp;обработку персональных данных и&nbsp;подтверждаю,
                  что ознакомлен с&nbsp;
                  <a href="/" className={classes['copyright-link']}>пользовательским соглашением</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>

  );
};
