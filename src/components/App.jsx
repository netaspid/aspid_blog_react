import React from 'react';
import {useRoutes} from 'react-router-dom';
// import routes from './routes';
import Home from './Home';
import Blog from './Blog';

const routes = [
  {
    path: 'blog',
    element: <Blog />,
  },
  {
    path: '/',
    element: (
      <Home />
    ),
  },
];


const App = () => {
  const content = useRoutes(routes);

  return (
    <div>
            Content: <br />
      {content}
    </div>
  );
};

export default App;
