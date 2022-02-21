import React from 'react';
import {styled} from '@mui/system';
import {Avatar, Grid, Paper} from '@mui/material';
import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import AnimatedButton from './AnimatedButton';
import {Link} from 'react-router-dom';
const TopPostWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}));

const TopPosts = styled('div')({
  marginTop: '-30%',
  display: 'flex',
  top: '10vw',
  left: '14vw',
  width: '70vw',
  height: '65vh',
});

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '100%',
  color: theme.palette.text.secondary,
  padding: 'none',
  position: 'relative',
}));

const GradientWrapper = styled('div')(({theme}) => ({
  background: 'rgba(10, 7, 9, 0.38)',
  color: '#FFF',
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 5vw 0 5vw',
  top: 0,
  left: 0,
}));

const TopPostUserWrapper = styled('div')(({theme}) =>({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  left: '10%',
  top: '90%',
}));

const TopPostReadBtnWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  left: '80%',
  top: '90%',
}));

const checkImageExists = (url) => {
  console.log('check for image');
  const image = new Image();
  image.src = 'images/' + url;
  if (image.width === 0) {
    return false;
  } else {
    return true;
  }
};

const HeaderPosts = () => {
  const [content, users] =
    useSelector((state) => [state.content.posts, state.users.users]);


  const topPosts = content.slice(0, 2);
  const topPostOneUser = users.find(
      (user) => user.name === topPosts[0]?.created_by ?? '') ?? '';

  return (
    <TopPostWrapper>
      <TopPosts>
        {topPosts.length > 0 &&
        (<Grid
          direction="row"
          container
          spacing={2}>
          <Grid
            item xs={8}>
            <Item>
              {
                (checkImageExists(topPosts[0].feature_image)) &&
              (
                <img
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                  src={'images/'+topPosts[0].feature_image} />
              )
              }
              <GradientWrapper>
                {
                  (topPosts?.length > 0) &&
                    (
                      <Typography variant="h2">
                        {topPosts[0].title}
                      </Typography>
                    )
                }
                {
                  (topPosts?.length > 0) &&(
                    <TopPostUserWrapper>
                      <Avatar
                        sx={{
                          marginRight: '.5rem',
                        }}
                        src={'images/'+topPostOneUser.image}
                      />
                      <Typography
                        variant="h8"
                        sx ={{
                          fontFamily: 'Gugi',
                        }}
                      >
                        {topPostOneUser.name}
                      </Typography>
                    </TopPostUserWrapper>
                  )
                }
                {
                  (topPosts?.length > 0) &&(
                    <TopPostReadBtnWrapper>
                      <Link
                        style={{
                          textDecoration: 'none',
                        }}
                        to={'post/'+topPosts[0].id}>
                        <AnimatedButton
                          text="Читать"/>
                      </Link>
                    </TopPostReadBtnWrapper>
                  )
                }
              </GradientWrapper>
            </Item>
          </Grid>
          <Grid
            item xs={4}
            sx={
              {
                clipPath:
               'polygon(0% 8%, 14% 0%, 100% 0%, 100% 96%, 94% 100%, 0% 100%)',
              }
            }>
            <Item
              sx={{
                background: 'rgba(59,119,211, 0.94)',
                color: '#fff',
              }}>
              {(topPosts?.length > 1) &&
              (
                <Typography variant="h4">
                  {topPosts[1].title}
                </Typography>
              )
              }
            </Item>
          </Grid>
        </Grid>)}
      </TopPosts>
    </TopPostWrapper>
  );
};

export default HeaderPosts;
