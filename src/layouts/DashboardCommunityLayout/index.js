import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
}));

const CommunityLayout = () => {
  const classes = useStyles();

  const user = useSelector(state=>state.User);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user.name) {
      navigate('/login', { replace: true });
    }
  },[user]);

  return (
    <div className="container-fluid container-application">
        <SideBar/>
        <div className="main-content position-relative">
            <NavBar/>
            <div className="page-content" style={{minHeight: "100vh"}}>
                <Outlet/>
            </div>
        </div>
    </div>
  );
};

export default CommunityLayout;
