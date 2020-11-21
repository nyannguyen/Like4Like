import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import ClientLayout from './layouts/DashboardClientLayout';
import CommunityLayout from './layouts/DashboardCommunityLayout';
import Login from './views/auth/login';
import CreateRequest from './views/client/create-request';
import ClientProfile from './views/client/profile';
import Request from './views/client/request';
import LikeList from './views/community/like';
import CommunityProfile from './views/community/profile';
import SelectApp from './views/select-app';

const routes = [
  {
    path: 'app/community',
    element: <CommunityLayout/>,
    children: [
      { path: '/profile', element: <CommunityProfile/> },
      { path: '/likes', element: <LikeList/> },
      { path: '*', element: <></> }
    ]
  },
  {
    path: '/app/client',
    element: <ClientLayout />,
    children: [
      { path: '/requests/create', element: <CreateRequest/> },
      { path: '/requests', element: <Request/> },
      { path: '/profile', element: <ClientProfile/> },
      { path: '*', element: <></> }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login/> },
      { path: '/app', element: <SelectApp/> },
      { path: '*', element: <></> }
    ]
  },
];

export default routes;
