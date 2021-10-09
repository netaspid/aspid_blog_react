import React from 'react';
import {Outlet} from 'react-router';

const Home = () => {
  return (
    <div>
        Im home
      <Outlet />
    </div>
  );
};

export default Home;
