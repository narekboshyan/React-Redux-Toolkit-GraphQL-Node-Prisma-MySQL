import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import { HomePage, Authentication, RecoverPassword } from 'pages';

const Routes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    { path: '/auth', element: <Authentication /> },
    { path: '/recover-password', element: <RecoverPassword /> },
  ]);

  return element;
};

export default Routes;
