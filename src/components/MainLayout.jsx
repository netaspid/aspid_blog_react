import React from 'react';
import TopMenu from './Navigation';
import {Outlet} from 'react-router';
import {styled} from '@mui/system';
import {Grid} from '@mui/material';
import Footer from './Footer';
import backgroundImage from './../../public/images/layout-bg.svg';

const GridLayout = styled(Grid)({
  'minWidth': '100%',
  'width': '100%',
  'minHeight': '100vh',
  'marginLeft': 0,
  'backgroundColor': '#213a4a',
  'backgroundImage': `url(${backgroundImage})`,
  'backgroundRepeat': 'repeat',
  'backgroundPositionX': '2vw',
  'opacity': '0.9',
});

const SliceLayout = styled(Grid)(({theme}) =>({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    height: '100%',
    minWidth: '100%',
    width: '100%',
    opacity: 0.1,
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    height: '70vh',
    minWidth: '100%',
    width: '100%',
    backgroundColor: '#3cb1fb',
    clipPath: 'url(#header-clip)',
  },
}));

const MainLayout = () => {
  return (
    <GridLayout container spacing={1}>
      <TopMenu/>
      <SliceLayout/>
      <Outlet/>
      <Footer/>
    </GridLayout>
  );
};


export default MainLayout;
