import React from 'react';
import {Button} from '@mui/material';
import {makeStyles, styled} from '@mui/styles';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const MenuButton = styled(Button)(({theme}) => ({
  color: '#aed3ec !important',
  fontFamily: 'Gilroy !important',
  fontSize: '1.2vh !important',
  lineHeight: '1.1vh',
  marginLeft: '1vw !important',
}));

const MenuBlock = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: '0 5vw 0 5vw',
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& a': {
      color: '#fff',
      fontSize: '1.2em',
      // transition: 'cubic-bezier(0.075, 0.82, 0.165, 1) .5s',
      textDecoration: 'none',
    },
    // '& a:hover': {
    //   paddingBottom: '1px',
    //   borderBottom: '1px solid white',
    // },
  },
}));


// const menuItems = ['Статьи', 'Категории', 'Портфолио', 'Обо мне'];

const MenuList = (props) => {
  const menuItems = useSelector((state) => state.content.menu);
  console.log('menuItems ', menuItems);
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
            <Link to={item.link}>{item.name}</Link>
          </MenuButton>
        );
      })}
    </MenuBlock>
  );
};

export default MenuList;
