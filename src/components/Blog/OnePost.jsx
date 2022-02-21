/* eslint-disable react/prop-types */
import React from 'react';
import {styled} from '@mui/system';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';

const WrappedContainer = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
}));
const OnePostContainer = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '50vw',
  backgroundColor: '#fff',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '95%',
    marginTop: '1vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '70vw',
    marginTop: '-30%',
  },
}));

const PostImage = styled(Box)(({theme}) => ({
  'height': '25%',
  'width': '100%',
  '& img': {
    width: '100% !important',
    height: '100% !important',
    objectFit: 'cover',
  },
}));

const HeaderPost = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2vw',
}));

const OnePost = () => {
  const {id} = useParams();
  const content =
   useSelector((state) => state.content.posts).find((item) => item.id === id);
  return (
    <WrappedContainer>
      <OnePostContainer>
        <PostImage>
          <img src={`/images/${content.feature_image}`} />
        </PostImage>
        <HeaderPost>
          <Typography
            sx={{
              textAlign: 'center',
            }}
            variant="h3"
          >
            {content.title}
          </Typography>
        </HeaderPost>
        <Typography
          sx={{
            padding: '2vw 5vw 10vw 5vw',
            fontSize: '1.1rem',
          }}
        >
          <div
            className="content"
            dangerouslySetInnerHTML={{__html: content.html}}
          >

          </div>
        </Typography>
      </OnePostContainer>
    </WrappedContainer>
  );
};

export default OnePost;
