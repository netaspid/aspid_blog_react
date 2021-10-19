import {Toolbar, Typography, useTheme} from '@mui/material';
import {makeStyles} from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import React, {useState} from 'react';
import {styled} from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import {Link} from 'react-router-dom';
import MenuList from './Menu';
import {useMediaQuery} from '@mui/material';
import AnimatedButton from './AnimatedButton';

const Navigation = styled(AppBar)(({theme}) =>({
  boxShadow: 'none',
  backgroundColor: '#3cb1fb',
  zIndex: 999,
}));

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

const TextLogo = styled(Typography)(({theme}) =>({
  textTransform: 'uppercase',
  minWidth: 'auto',
  lineHeight: '1.2',
  width: '115px',
}));

const LogoLink = styled(Link)(({theme}) => ({
  'textDecoration': 'none',
  'color': 'inherit',
  '&: hover': {
    textDecoration: 'none',
  },
}));


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
          <LogoLink to="/" >
            <p
              className = {
                isAnimate ?
                animateClass.typing:
                animateClass.logoWithoutAnimation
              }
              onAnimationEnd={()=>setTimeout(()=>setAnimate(false), 1000) }
              onMouseOver={() => setAnimate(true)}
            >
              Aspid.nl
            </p>
          </LogoLink>
        </TextLogo>
        {isDesktop &&
          (<MenuList/>)
        }
        {isDesktop &&
        <AnimatedButton text="Войти"/>
        }
      </Toolbar>
    </Navigation>
  );
};

export default TopMenu;
