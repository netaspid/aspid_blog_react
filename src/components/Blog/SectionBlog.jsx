/* eslint-disable max-len */
import React from 'react';
import {useSelector} from 'react-redux';
import ContentSection from './ContentSection';
import HeaderPosts from '../TopPosts';
import {useTheme, useMediaQuery} from '@mui/material';


const MainSection = (props) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const content = useSelector((state) => state.content.posts);

  return (
    <>
      {isDesktop && (<HeaderPosts/>)}
      <ContentSection content={content}/>
    </>
  );
};

export default MainSection;
