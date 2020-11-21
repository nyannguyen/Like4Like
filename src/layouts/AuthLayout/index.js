import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {

  return (
    <div className="container-fluid container-application">
        <div className="main-content position-relative">
            <div className="page-content">
                <Outlet/>
            </div>
        </div>
    </div>
  );
};

export default AuthLayout;
