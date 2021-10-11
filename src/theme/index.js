/* eslint-disable max-len */
import {createTheme} from '@mui/material/styles';
// import JuliusSansOne from './../../public/fonts/JuliusSansOne-Regular.ttf';
import GilroyBold from './../../public/fonts/Gilroy-Bold.ttf';

const GilroyBoldFont = {
  fontFamily: 'GilroyBold',
  fontWeight: '600',
  src: `
    local('JuliusSans'),
    local('GilroyBold'),
    url(${GilroyBold}) format('ttf')
    unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  `,
};

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#022B3A',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'GilroyBold, Arial',
  },
  components: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [GilroyBoldFont],
      },
    },
  },
});

export default themeOptions;
