import React from 'react';
import Blog from './Blog';
import Home from './Home';

const routes = [
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: '/',
    element: <Blog/>,
  },
];

export default routes;
