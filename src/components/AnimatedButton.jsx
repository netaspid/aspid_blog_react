/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import {styled} from '@mui/styles';
import {Typography} from '@mui/material';

const CustomButton = styled('div')(({theme, mleft}) =>({
  'marginLeft': mleft,
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'color': '#fff',
  'width': '7vw',
  'height': '2vw',
  'border': '1px #49667 solid',
  'fontSize': '1.7vh',
  'backgroundImage': 'linear-gradient(to top, rgb(55 117 255) 50%, rgb(0, 0, 0) 50%)',
  'backgroundSize': '100% 200%',
  'transition': 'background-position 1s',
  '&:hover': {
    backgroundPosition: '0 -100%',
  },
}));

const AnimatedButton = (props) => {
  const {text, mleft} = props;
  return (
    <CustomButton mleft={mleft}>
      <Typography
        sx={{
          fontSize: '.9em',
          fontFamily: 'Gilroy',
        }}
      >
        {text}
      </Typography>
    </CustomButton>
  );
};

export default AnimatedButton;
