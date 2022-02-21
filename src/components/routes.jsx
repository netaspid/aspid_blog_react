/* eslint-disable new-cap */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, {Suspense, lazy} from 'react';
import OnePost from './Blog/OnePost';
import SectionBlog from './Blog/SectionBlog';
import {Outlet} from 'react-router';
import LoadingScreen from './LoadingScreen';

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
	    (
	      <Suspense fallback={<LoadingScreen />}>
	        <Component {...props} />
	      </Suspense>
	    );
const MainLayout = Loadable(lazy(() => import('./MainLayout')));

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
