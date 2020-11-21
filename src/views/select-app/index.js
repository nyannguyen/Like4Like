import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectApp = () => {
    const navigate = useNavigate();
    const onClientClick = () => {
        navigate('/app/client', { replace: true });
    }
    const onCommunityClick = () => {
        navigate('/app/community', { replace: true });
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
                                    <h6 className="h3">What are you looking for?</h6>
                                </div>
                                <span className="clearfix"></span>
                                <div className="mt-4">
                                    <button type="button" onClick={onClientClick} className="btn btn-sm btn-primary btn-icon rounded-pill w-100">
                                        <span className="btn-inner--text">Get More Likes</span>
                                        <span className="btn-inner--icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <button type="button" onClick={onCommunityClick} className="btn btn-sm btn-primary btn-icon rounded-pill w-100">
                                        <span className="btn-inner--text">Like To Get Money</span>
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

export default SelectApp