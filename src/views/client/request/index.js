import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Request = () => {
    const [data] = useState(useSelector(state => state.Request));

    return (
        <>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Buy Like For Your Post/Page</h5>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-end">
                        <div className="actions actions-dark d-inline-block">
                            <NavLink to="create" className="action-item ml-md-4">
                                <i className="fas fa-plus"></i> New Request
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card hover-shadow-lg">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table align-items-center">
                                    <thead>
                                        <tr>
                                        <th scope="col" className="sort" data-sort="id">Post ID</th>
                                        <th scope="col" className="sort" data-sort="cost-per-like">Cost per like</th>
                                        <th scope="col" className="sort" data-sort="budget">Budget</th>
                                        <th scope="col" className="sort text-center" data-sort="completion">Completion</th>
                                        <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="list">
                                        {
                                            data.map(request=> {
                                                return(<tr key={request.id}>
                                                        <td scope="row">
                                                            <a href={request.url} className="name mb-0 h6 text-sm">{request.id}</a>
                                                        </td>
                                                        <td className="cost-per-like">
                                                            {request.value} Credits 
                                                        </td>
                                                        <td className="budget">
                                                            {request.budget} Credits
                                                        </td>
                                                        <td className="budget text-center">
                                                            <span className="completion mr-2">{Math.trunc(((request.totalLike*request.value)/(request.budget))*100)}%</span>
                                                        </td>
                                                        <td className="completion text-left">
                                                            <div>
                                                                <div className="progress">
                                                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={((request.totalLike*request.value)/(request.budget))*100} aria-valuemin="0" aria-valuemax="100" style={{width: `${((request.totalLike*request.value)/(request.budget))*100}%` }}></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Request