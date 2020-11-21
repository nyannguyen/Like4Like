import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import initAction from 'src/redux/actions/User';

const Login = () => {
    const navigate = useNavigate();
    const user = useSelector(state=>state.User);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(user.name) {
            navigate('/app', { replace: true });
        }
    })

    const onLogin = () => {
        dispatch(initAction());
        navigate('/app', { replace: true });
    }

    return (
        <>
        <div className="min-vh-100 py-5 d-flex align-items-center">
            <div className="w-100">
                <div className="row justify-content-center">
                    <div className="col-sm-8 col-lg-4">
                        <div className="card shadow zindex-100 mb-0">
                            <div className="card-body px-md-5 py-5">
                                <div className="mb-5">
                                    <h6 className="h3">Login</h6>
                                    <p className="text-muted mb-0">Sign in to your account to continue.</p>
                                </div>
                                <span className="clearfix"></span>
                                <div className="mt-4">
                                    <button type="button" onClick={onLogin} className="btn btn-sm btn-primary btn-icon rounded-pill w-100">
                                        <span className="btn-inner--icon"><i className="fab fa-facebook-f"></i></span>
                                        <span className="btn-inner--text">Sign in with Facebook</span>
                                        <span className="btn-inner--icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login