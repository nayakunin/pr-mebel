import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1370,
      xl: 1920,
    },
  },
  spacing: 6,
  palette: {
    primary: {
      main: '#ff001f',
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: 'Gilroy, sans-serif',
      },
      h2: {
        fontFamily: 'Gilroy, sans-serif',
      },
      h3: {
        fontFamily: 'Gilroy, sans-serif',
      },
      h4: {
        textTransform: 'uppercase',
        fontSize: '30px',
        lineHeight: '35px',
        fontWeight: '300',
        fontFamily: 'Gilroy, sans-serif',
      },
      h5: {
        textTransform: 'uppercase',
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '300',
        fontFamily: 'Gilroy, sans-serif',
      },
      h6: {
        textTransform: 'uppercase',
        fontSize: '18px',
        lineHeight: '1.3',
        fontWeight: '300',
        fontFamily: 'Gilroy, sans-serif',
      },
      subtitle1: {
        fontFamily: 'Gilroy, sans-serif',
      },
      subtitle2: {
        fontFamily: 'Gilroy, sans-serif',
      },
      body1: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '18px',
        lineHeight: '1.4',
        letterSpacing: 'normal',
      },
      body2: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: 'normal',
        fontFamily: 'Gilroy, sans-serif',
      },
    },
  },
});
