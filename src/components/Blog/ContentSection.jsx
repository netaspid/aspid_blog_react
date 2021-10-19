/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {styled} from '@mui/styles';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const ContentBlock = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  flexWrap: 'wrap',
  height: '100%',
  [theme.breakpoints.down('md')]: {

  },
  [theme.breakpoints.up('md')]: {
    marginTop: '2vw',
  },
}));

const Feed = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    padding: '0 5px 0 5px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2.4rem',
    width: '70vw',
  },
}));

const ContentItem = styled('div')(({theme, cpath, wd}) =>({
  clipPath: cpath,
  [theme.breakpoints.down('md')]: {
    clipPath: 'none',
    borderRadius: '10px',
    backgroundColor: 'white',
    marginTop: '2vw',
    height: '50vh',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    clipPath: cpath,
    backgroundColor: 'white',
    width: '100%',
    height: '20vh',
  },
  [theme.breakpoints.up('lg')]: {
    clipPath: cpath,
    backgroundColor: 'white',
    width: wd? '37vw' : '30vw',
    height: '20vh',
  },
}));

const Wrapper = styled(Box)(({theme}) =>({
  'display': 'flex',
  'flexDirection': 'row',
  'height': '100%',
  '& img': {
    width: '30%',
    height: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    'flexDirection': 'column',
    'alignItems': 'center',
    '& img': {
      width: '100%',
      height: '45%',
      objectFit: 'cover',
    },
  },
}));

const ContentSection = (props) => {
  const polygon1 = 'polygon(0% 9%, 3% 0%, 100% 0%, 100% 88%, 97% 99%, 0% 99%)';
  const polygon2 = 'polygon(0% 11%, 5% 0%, 100% 0%, 100% 87%, 96% 99%, 0% 99%)';
  const {content} = props;
  const data = content?.length > 0 ? content.slice(1).sort((a, b) => a-b) : [];
  return (
    <ContentBlock>
      <Feed>
        {data &&
            data.map((item, index) => {
              const isOdd = index%2==0;
              return (
                <Link
                  to={'post/'+item.id}
                  key={'post'+index}
                  style={{
                    textDecoration: 'none',
                    color: '#000000',
                  }}
                >
                  <ContentItem wd={isOdd} cpath={isOdd ? polygon1: polygon2}>
                    <Wrapper>
                      <img src={`/images/${item.feature_image}`}/>
                      <Box
                        sx={{
                          display: 'flex',
                          width: '100%',
                          flexDirection: 'column',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '1vw',
                          }}
                        >
                          <Typography variant="h5">
                            {item.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '1vw 2vw 1vw 2vw',
                          }}
                        >
                          <Typography>
                            {item.plaintext.split(' ').slice(0, 40).join(' ')}
                          </Typography>
                        </Box>
                      </Box>
                    </Wrapper>
                  </ContentItem>
                </Link>
              );
            })
        }
      </Feed>
    </ContentBlock>
  );
};

export default ContentSection;
