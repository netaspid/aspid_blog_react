import {createStyles, makeStyles} from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      'html': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        'height': '100%',
        'width': '100%',
      },
      'body': {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      '*::-webkit-scrollbar': {
        width: '0.3em',
        height: '0.3em',
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(153,153,156,.7)',
        borderRadius: '6px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#5664d2',
      },
    },
  }),
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
