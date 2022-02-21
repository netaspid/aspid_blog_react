import React from 'react';
import {Box} from '@mui/system';
import Loader from './Loader';

const LoadingScreen = () =>
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'background.paper',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 2000,
    }}
  >
    <Loader/>
  </Box>;

export default LoadingScreen;
