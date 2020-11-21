import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const menu = [
        {
            href: '/app/community/dashboard',
            title: 'Dashboard'
        },
        {
            href: '/app/community/likes',
            title: 'Likes'
        },
        {
            href: '/app/community/profile',
            title: 'Profile'
        },
        {
            href: '/app/community/wallet',
            title: 'Wallet'
        },
    ]

    return(<nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-user d-lg-none ml-auto">
            <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i className="fas fa-search"></i></a>
                </li>
                <li className="nav-item dropdown dropdown-animate">
                    <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bell"></i></a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                        <div className="py-3 px-3">
                            <h5 className="heading h6 mb-0">Notifications</h5>
                        </div>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                                    <div>
                                        <span className="avatar bg-primary text-white rounded-circle">AM</span>
                                    </div>
                                    <div className="flex-fill ml-3">
                                        <div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
                                        <p className="text-sm lh-140 mb-0">
                                            Some quick example text to build on the card title.
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                                    <div>
                                        <span className="avatar bg-warning text-white rounded-circle">SW</span>
                                    </div>
                                    <div className="flex-fill ml-3">
                                        <div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
                                        <p className="text-sm lh-140 mb-0">
                                            Some quick example text to build on the card title.
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
                                    <div>
                                        <span className="avatar bg-info text-white rounded-circle">JM</span>
                                    </div>
                                    <div className="flex-fill ml-3">
                                        <div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
                                        <p className="text-sm lh-140 mb-0">
                                            Some quick example text to build on the card title.
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                                    <div>
                                        <span className="avatar bg-dark text-white rounded-circle">MJ</span>
                                    </div>
                                    <div className="flex-fill ml-3">
                                        <div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
                                        <p className="text-sm lh-140 mb-0">
                                            Some quick example text to build on the card title.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="py-3 text-center">
                            <a href="#" className="link link-sm link--style-3">View all notifications</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-animate">
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                        <h6 className="dropdown-header px-0">Hi, Heather!</h6>
                        <a href="../application/user/profile.html" className="dropdown-item">
                            <i className="fas fa-user"></i>
                            <span>My profile</span>
                        </a>
                        <a href="../application/account/settings.html" className="dropdown-item">
                            <i className="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                        <a href="../application/account/billing.html" className="dropdown-item">
                            <i className="fas fa-credit-card"></i>
                            <span>Billing</span>
                        </a>
                        <a href="../application/shop/orders.html" className="dropdown-item">
                            <i className="fas fa-shopping-basket"></i>
                            <span>Orders</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="../application/authentication/login.html" className="dropdown-item">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
            <ul className="navbar-nav align-items-lg-center">
                {
                    menu.map(item => {
                        return(
                            <li key={item.title} className="nav-item ">
                                <NavLink to={item.href} className="nav-link pl-lg-0">
                                    {item.title}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
            <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                <li className="nav-item">
                    <a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item dropdown dropdown-animate">
                    <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bell"></i></a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
                        <div className="py-3 px-3">
                            <h5 className="heading h6 mb-0">Notifications</h5>
                        </div>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                                <div>
                                <span className="avatar bg-primary text-white rounded-circle">AM</span>
                                </div>
                                <div className="flex-fill ml-3">
                                <div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
                                <p className="text-sm lh-140 mb-0">
                                    Some quick example text to build on the card title.
                                </p>
                                </div>
                            </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                                <div>
                                <span className="avatar bg-warning text-white rounded-circle">SW</span>
                                </div>
                                <div className="flex-fill ml-3">
                                <div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
                                <p className="text-sm lh-140 mb-0">
                                    Some quick example text to build on the card title.
                                </p>
                                </div>
                            </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
                                <div>
                                <span className="avatar bg-info text-white rounded-circle">JM</span>
                                </div>
                                <div className="flex-fill ml-3">
                                <div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
                                <p className="text-sm lh-140 mb-0">
                                    Some quick example text to build on the card title.
                                </p>
                                </div>
                            </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
                                <div>
                                <span className="avatar bg-dark text-white rounded-circle">MJ</span>
                                </div>
                                <div className="flex-fill ml-3">
                                <div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
                                <p className="text-sm lh-140 mb-0">
                                    Some quick example text to build on the card title.
                                </p>
                                </div>
                            </div>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
                                <div>
                                <span className="avatar bg-primary text-white rounded-circle">RN</span>
                                </div>
                                <div className="flex-fill ml-3">
                                <div className="h6 text-sm mb-0">Richard Nixon <small className="float-right text-muted">3 hrs ago</small></div>
                                <p className="text-sm lh-140 mb-0">
                                    Some quick example text to build on the card title.
                                </p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="py-3 text-center">
                            <a href="#" className="link link-sm link--style-3">View all notifications</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown dropdown-animate">
                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                    <h6 className="dropdown-header px-0">Hi, John!</h6>
                    <a href="#!" className="dropdown-item">
                        <i className="fas fa-user"></i>
                        <span>My profile</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                        <i className="fas fa-credit-card"></i>
                        <span>Billing</span>
                    </a>
                    <a href="#!" className="dropdown-item">
                        <i className="fas fa-tasks"></i>
                        <span>Activity</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#!" className="dropdown-item">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                    </div>
                </li>
                </ul>
        </div>
    </div>
  </nav>);
}

export default NavBar;