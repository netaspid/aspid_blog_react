import React from 'react';
import {useRoutes} from 'react-router-dom';
import GlobalStyles from '../theme/GlobalStyles';
import routes from './routes';
import {ThemeProvider} from '@mui/system';
import themeOptions from '../theme';


const App = () => {
  const content = useRoutes(routes);
  return (
    <ThemeProvider theme={themeOptions}>
      <GlobalStyles/>
      {content}
    </ThemeProvider>
  );
};

export default App;
