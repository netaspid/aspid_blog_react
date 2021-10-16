import React from 'react';
import {Button} from '@mui/material';
import {makeStyles, styled} from '@mui/styles';
import {Link} from '@mui/material';

const MenuButton = styled(Button)(({theme}) => ({
  color: '#aed3ec !important',
  fontFamily: 'Gilroy !important',
  fontSize: '1.5vh',
}));

const MenuBlock = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& a': {
      color: '#fff',
      fontSize: '1em',
      // transition: 'cubic-bezier(0.075, 0.82, 0.165, 1) .5s',
      textDecoration: 'none',
    },
    '& a:hover': {
      borderBottom: '1px solid #fff',
    },
  },
}));


const menuItems = ['Статьи', 'Категории', 'Портфолио', 'Обо мне'];

const MenuList = (props) => {
  // eslint-disable-next-line react/prop-types
  const classes = useStyles();
  return (
    <MenuBlock
      className={classes.root}>
      {menuItems.map((item, index)=>{
        return (
          <MenuButton
            variant="text"
            key={index}>
            <Link>{item}</Link>
          </MenuButton>
        );
      })}
    </MenuBlock>
  );
};

export default MenuList;
