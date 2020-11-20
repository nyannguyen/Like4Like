import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import DashboardClient from './views/client/dashboard/DashboardClient';
import DashboardCommunity from './views/community/dashboard/DashboardCommunity';
import DashboardClientLayout from './layouts/DashboardClientLayout';
import DashboardCommunityLayout from './layouts/DashboardCommunityLayout';
import LikeList from './views/community/like';
import RequestListView from './views/client/request';
import Profile from './views/community/profile';
import ClientProfile from './views/client/profile';
import NewRequest from './views/client/new-request';

const routes = [
  {
    path: 'app/client',
    element: <DashboardClientLayout/>,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'request', element: <RequestListView /> },
      { path: 'request/new', element: <NewRequest /> },
      { path: 'dashboard', element: <DashboardClient/> },
      { path: 'products', element: <ProductListView /> },
      { path: 'profile', element: <ClientProfile /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'app/community',
    element: <DashboardCommunityLayout/>,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardCommunity/> },
      { path: 'products', element: <ProductListView /> },
      { path: 'likes', element: <LikeList /> },
      { path: 'profile', element: <Profile /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
