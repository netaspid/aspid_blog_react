import React from 'react';
import {Button} from '@mui/material';
import {makeStyles, styled} from '@mui/styles';
import {Link} from '@mui/material';

const MenuButton = styled(Button)({
  color: '#aed3ec !important',
});

const MenuBlock = styled('div')({
  flexGrow: (props) => props.grow,
});

const useStyles = makeStyles({
  root: {
    'flexGrow': (props) => props.grow,
    '& a': {
      color: '#fff',
      transition: 'cubic-bezier(0.075, 0.82, 0.165, 1) 1s',
      textDecoration: 'none',
    },
    '& a:hover': {
      color: '#6cc2ff',
      fontSize: '1.1rem',
    },
  },
});


const menuItems = ['Статьи', 'Категории', 'Портфолио', 'Обо мне'];

const MenuList = (props) => {
  // eslint-disable-next-line react/prop-types
  const {grow} = props;
  const classes = useStyles();
  return (
    <MenuBlock grow={grow} className={classes.root}>
      {menuItems.map((item, index)=>{
        return (
          <MenuButton variant="text" key={index}>
            <Link>{item}</Link>
          </MenuButton>
        );
      })}
    </MenuBlock>
  );
};

export default MenuList;
