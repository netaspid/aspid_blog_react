import React from 'react';
import {useRoutes} from 'react-router-dom';
import GlobalStyles from '../theme/GlobalStyles';
import routes from './routes';
import {ThemeProvider} from '@mui/system';
import themeOptions from '../theme';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getContentData} from './slices/content';


const App = () => {
  const content = useRoutes(routes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentData());
  }, []);
  return (
    <ThemeProvider theme={themeOptions}>
      <GlobalStyles/>
      {content}
    </ThemeProvider>
  );
};

export default App;
