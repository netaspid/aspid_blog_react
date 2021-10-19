import React from 'react';
import OnePost from './Blog/OnePost';
import MainLayout from './MainLayout';
import SectionBlog from './Blog/SectionBlog';
import {Outlet} from 'react-router';

const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <SectionBlog/>,
      },
      {
        path: 'post',
        element: <Outlet/>,
        children: [
          {
            path: ':id',
            element: <OnePost/>,
          },

        ],
      },
    ],
  },
];

export default routes;
