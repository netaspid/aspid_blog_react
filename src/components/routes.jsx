import React from 'react';
import Blog from './Blog';
import MainLayout from './MainLayout';

const routes = [
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: '/',
    element: <MainLayout/>,
  },
];

export default routes;
