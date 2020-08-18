import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff001f',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'Gilroy',
      },
      h2: {
        fontFamily: 'Gilroy',
      },
      h3: {
        fontFamily: 'Gilroy',
      },
      h4: {
        textTransform: 'uppercase',
        fontSize: '30px',
        lineHeight: '35px',
        fontWeight: '300',
        fontFamily: 'Gilroy',
      },
      h5: {
        textTransform: 'uppercase',
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '300',
        fontFamily: 'Gilroy',
      },
      h6: {
        textTransform: 'uppercase',
        fontSize: '18px',
        lineHeight: '1.3',
        fontWeight: '300',
        fontFamily: 'Gilroy',
      },
      subtitle1: {
        fontFamily: 'Gilroy',
      },
      subtitle2: {
        fontFamily: 'Gilroy',
      },
      body1: {
        fontFamily: 'Gilroy',
        fontSize: '18px',
        lineHeight: '1.4',
        letterSpacing: 'normal',
      },
      body2: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: 'normal',
        fontFamily: 'Gilroy',
      },
    },
  },
});
