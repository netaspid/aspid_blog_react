import {Toolbar, Typography, useTheme} from '@mui/material';
import {makeStyles} from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import React, {useState} from 'react';
import {styled} from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import MenuList from './Menu';
import {useMediaQuery} from '@mui/material';

const Navigation = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: '#3cb1fb',
  zIndex: 999,
});

const animationTextLogo = (props) => {
  const useStyles = makeStyles((theme) => ({
    'typing': {
      overflow: 'hidden',
      borderRight: '.14em solid #fff',
      whiteSpace: 'nowrap',
      letterSpacing: '.05em',
      animation: `$typing 3.5s steps(40, end),
       $blink-caret 0.6s step-end infinite`,
    },
    'logoWithoutAnimation': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      letterSpacing: '.05em',
    },
    '@keyframes typing': {
      'from': {width: 0},
      '70%': {width: '100%'},
      '80%': {width: '100%'},
      '100%': {width: '100%'},
    },
    '@keyframes blink-caret': {
      '0%': {borderColor: 'transparent'},
      '50%': {borderColor: '#fff'},
      '100%': {borderColor: 'transparent'},
    },
  }));
  return useStyles(props);
};

const TextLogo = styled(Typography)({
  'textTransform': 'uppercase',
  'minWidth': '5.3vw',
  'lineHeight': '1.2',
});

const TopMenu = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const animateClass = animationTextLogo();
  const [isAnimate, setAnimate] = useState(true);

  return (
    <Navigation color="primary" position="relative">
      <Toolbar>
        {!isDesktop &&
          (<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}>
            <MenuIcon/>
          </IconButton>
          )}
        <TextLogo variant="h6" component="div">
          <p
            className = {
              isAnimate ? animateClass.typing: animateClass.logoWithoutAnimation
            }
            onAnimationEnd={()=>setTimeout(()=>setAnimate(false), 1000)}
          >
            Aspid.nl
          </p>
        </TextLogo>
        {isDesktop &&
          (<MenuList/>)
        }
      </Toolbar>
    </Navigation>
  );
};

export default TopMenu;
