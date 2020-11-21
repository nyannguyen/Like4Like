import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const user = useSelector(state => state.User);

    const menu = [
        {
            href: '/app/community/dashboard',
            icon: "fas fa-home fa-2x",
            title: 'Dashboard'
        },
        {
            href: '/app/community/likes',
            icon: "far fa-thumbs-up fa-2x",
            title: 'Likes'
        },
        {
            href: '/app/community/profile',
            icon: "fas fa-user-ninja fa-2x",
            title: 'Profile'
        },
        {
            href: '/app/community/wallet',
            icon: "fas fa-wallet fa-2x",
            title: 'Wallet'
        },
    ];

    return(<div className="sidenav" id="sidenav-main">
        <div className="sidenav-header d-flex align-items-center">
            <a className="navbar-brand" href="../index.html">
                <img src="/assets/img/brand/white.png" className="navbar-brand-img" alt="..."/>
            </a>
            <div className="ml-auto">
                <div className="sidenav-toggler sidenav-toggler-dark d-md-none" data-action="sidenav-unpin" data-target="#sidenav-main">
                    <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                        <i className="sidenav-toggler-line bg-white"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="sidenav-user d-flex flex-column align-items-center justify-content-between text-center">
            <div>
                <a href="#" className="avatar rounded-circle avatar-xl">
                    <img alt="Image placeholder" src={user.avatar} className=""/>
                </a>
                <div className="mt-4">
                    <h5 className="mb-3 text-white">{user.name}</h5>
                    <a href="#" className="btn btn-sm btn-white btn-icon rounded-pill shadow hover-translate-y-n3">
                        <span className="btn-inner--icon"><i className="fas fa-coins"></i></span>
                        <span className="btn-inner--text">{user.wallet}</span>
                    </a>
                </div>
            </div>
            <div className="w-100 mt-4 actions d-flex justify-content-between">
                <a href="../application/user/profile.html" className="action-item action-item-lg text-white pl-0">
                    <i className="fas fa-user"></i>
                </a>
                <a href="#modal-chat" className="action-item action-item-lg text-white" data-toggle="modal">
                    <i className="fas fa-comment-alt"></i>
                </a>
                <a href="../application/shop/invoices.html" className="action-item action-item-lg text-white pr-0">
                    <i className="fas fa-receipt"></i>
                </a>
            </div>
        </div>
        <div className="nav-application clearfix">
            {
                menu.map(item => {
                    return(
                    <NavLink key={item.title} to={item.href} activeClassName="active" className="btn btn-square text-sm">
                        <span className="btn-inner--icon d-block"><i className={item.icon}></i></span>
                        <span className="btn-inner--icon d-block pt-2">{item.title}</span>
                    </NavLink>       
                    );
                })
            }
        </div>
        <div className="card bg-gradient-warning">
            <div className="card-body">
                <h5 className="text-white">Hello, Friend!</h5>
                <p className="text-white mb-4">
                Why not start using Purpose Application UI Kit and create something amazing today?
                </p>
                <a href="https://themes.getbootstrap.com/product/purpose-application-ui-kit/" className="btn btn-sm btn-block btn-white rounded-pill" target="_blank">Get started</a>
            </div>
        </div>
    </div>);
}

export default SideBar;