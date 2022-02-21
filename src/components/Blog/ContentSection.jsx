/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {styled} from '@mui/styles';
import {Box} from '@mui/system';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';


const Feed = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]: {
    width: '100vw',
    padding: '0 5px 0 5px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70vw',
    margin: '5vh auto 0 auto',
    gap: '1.2rem',
  },
}));

const ContentItem = styled('div')(({theme, cpath, wd}) =>({
  [theme.breakpoints.down('md')]: {
    borderRadius: '10px',
    backgroundColor: 'white',
    marginTop: '2vw',
    height: '50vh',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    backgroundColor: 'white',
    width: '100%',
    height: '20vh',
  },
  [theme.breakpoints.up('lg')]: {
    flex: '1 1 490px',
    background: 'linear-gradient(-45deg, transparent 15px, #fff 0)',
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
  const {content} = props;
  const data = content?.length > 0 ? content.slice(1).sort((a, b) => a-b) : [];
  return (
    <Feed>
      {(data && data.length > 0) &&
            data.map((item, index) => {
              return (
                <ContentItem
                  key={'post'+index}>
                  <Link
                    to={'post/'+item.id}
                    style={{
                      textDecoration: 'none',
                      color: '#000000',
                    }}
                  >
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
                  </Link>
                </ContentItem>
              );
            })
      }
    </Feed>
  );
};

export default ContentSection;
