import React from 'react';
import {styled} from '@mui/styles';
import {Box} from '@mui/system';

const FooterLayout = styled(Box)(({theme}) => ({
  width: '100%',
  minHeight: '15vw',
  backgroundColor: '#000',
  marginTop: '5vw',
  display: 'flex',
  justifyContent: 'center',
}));

const Wrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '70vw',
  color: '#fff',
}));

const Footer = () => {
  return (
    <FooterLayout>
      <Wrapper>
            Test
      </Wrapper>
    </FooterLayout>
  );
};

export default Footer;
