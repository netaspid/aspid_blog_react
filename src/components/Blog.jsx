import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-decoration: none;
  background: ${(props) => props.primary ? 'palevioletred' : 'white'};
  color: ${(props) => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Blog = () => {
  console.log('BLOG');
  return (
    <div>
      <Button as="a" href="#">My first styled button </Button>
      <TomatoButton as="a" href="#">My first styled button </TomatoButton>
    </div>
  );
};

export default Blog;
