import React from 'react';
import TopMenu from './Navigation';
import {styled} from '@mui/system';
import {Grid} from '@mui/material';

const GridLayout = styled(Grid)({
  minWidth: '100%',
  width: '100%',
  minHeight: '100vh',
  marginLeft: 0,
});

const SliceLayout = styled(Grid)({
  display: 'flex',
  minHeight: '60vh',
  height: '70vh',
  minWidth: '100%',
  width: '100%',
  backgroundColor: '#022B3A',
  clipPath: 'url(#header-clip)',
});


const MainLayout = () => {
  return (
    <GridLayout container spacing={1}>
      <SliceLayout>
        <TopMenu/>
      </SliceLayout>
    </GridLayout>
  );
};


export default MainLayout;
