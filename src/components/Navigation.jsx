import {Toolbar, Typography} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import {styled} from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import MenuList from './Menu';

const Navigation = styled(AppBar)({
  boxShadow: 'none',
});

const TextLogo = styled(Typography)({
  textTransform: 'uppercase',
});

const TopMenu = () => {
  return (
    <Navigation color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}>
          <MenuIcon/>
        </IconButton>
        <TextLogo variant="h6" component="div" sx={{flexGrow: 1}}>
            Aspid.nl
        </TextLogo>
        <MenuList grow={2}/>
      </Toolbar>
    </Navigation>
  );
};

export default TopMenu;
