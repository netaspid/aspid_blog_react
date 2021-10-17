/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {styled} from '@mui/styles';
import {Box} from '@mui/system';

const ContentBlock = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100vw',
  flexWrap: 'wrap',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    marginTop: '1vh',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '10vh',
  },
}));

const Feed = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    padding: '0 5px 0 5px',
  },
  [theme.breakpoints.up('md')]: {
    width: '70vw',
    marginRight: '1.7vw',
  },
}));

const ContentItem = styled('div')(({theme, cpath}) =>({
  clipPath: cpath,
  [theme.breakpoints.down('md')]: {
    clipPath: 'none',
    borderRadius: '10px',
    backgroundColor: 'white',
    height: '25vh',
  },
  [theme.breakpoints.up('md')]: {
    clipPath: cpath,
    backgroundColor: 'white',
    width: '40vw',
    height: '20vh',
  },
}));

const ContentSection = (props) => {
  const getElementTypeByRoute = () => {
    switch (window.location.pathname) {
      case '/blog':
        return 'posts';
      default:
        return 'posts';
    }
  };
  const polygon1 = 'polygon(0% 9%, 3% 0%, 100% 0%, 100% 88%, 97% 99%, 0% 99%)';
  const {content} = props;
  const data = content.filter((element) =>
    element.type === getElementTypeByRoute())[0];
  return (
    <ContentBlock>
      <Feed>
        {(data && data.hasOwnProperty('data')) &&
            data.data.map((item, index) => {
              return (
                <ContentItem cpath={polygon1} key={'post'+index}>
                  {item.id}
                </ContentItem>
              );
            })
        }
      </Feed>
    </ContentBlock>
  );
};

export default ContentSection;
