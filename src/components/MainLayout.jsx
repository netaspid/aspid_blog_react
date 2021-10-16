import React from 'react';
import TopMenu from './Navigation';
import HeaderPosts from './TopPosts';
import MainSection from './MainSection';
import {styled} from '@mui/system';
import {Grid} from '@mui/material';
import {Outlet} from 'react-router';
import {useTheme, useMediaQuery} from '@mui/material';
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
    height: '10vh',
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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <GridLayout container spacing={1}>
      <TopMenu/>
      <SliceLayout/>
      {isDesktop && (<HeaderPosts/>)}
      <MainSection />
      <Outlet/>
    </GridLayout>
  );
};


export default MainLayout;
