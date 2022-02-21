import React from 'react';
import {Box} from '@mui/system';
import {CircularProgress} from '@mui/material';

const Loader = (props) =>
  <Box
    sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress {...props}/>
  </Box>;

export default Loader;
