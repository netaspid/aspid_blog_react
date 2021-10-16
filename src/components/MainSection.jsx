/* eslint-disable max-len */
import React from 'react';
import {useSelector} from 'react-redux';
import ContentSection from './ContentSection';


const MainSection = (props) => {
  const {content} = useSelector((state) => state.content);
  return (
    <ContentSection content={content}/>
  );
};

export default MainSection;
