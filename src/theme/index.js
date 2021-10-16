/* eslint-disable max-len */
import {createTheme} from '@mui/material/styles';
// import JuliusSansOne from './../../public/fonts/JuliusSansOne-Regular.ttf';
// import GilroyMedium from './../../public/fonts/Gilroy-Medium.ttf';
// import GugiRegular from './../../public/fonts/Gugi-Regular.ttf';


// const GilroyMediumFont = {
//   fontFamily: 'GilroyMedium',
//   fontWeight: '300',
//   src: `
//     local('GilroyMedium'),
//     local('GilroyMedium'),
//     url(${GilroyMedium}) format('ttf')
//   `,
//   unicodeRange:
//    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

// const GugiRegularFont = {
//   fontFamily: 'GugiRegular',
//   fontWeight: '300',
//   src: `
//     local('GugiRegular'),
//     local('GugiRegular'),
//     url(${GugiRegular}) format('ttf')
//   `,
//   unicodeRange:
//    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


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
    h6: {
      fontFamily: ['Gugi', 'cursive'].join(','),
    },
    h1: {
      fontFamily: 'Gugi',
    },
    fontFamily: 'Gilroy',
    menu: {
      fontFamily: 'Gilroy',
    },
  },
});

export default themeOptions;
