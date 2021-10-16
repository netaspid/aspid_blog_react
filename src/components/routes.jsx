import React from 'react';
import Blog from './Blog/SectionBlog';
import MainLayout from './MainLayout';

const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: 'blog',
        element: <Blog/>,
      },
    ],
  },
];

export default routes;
