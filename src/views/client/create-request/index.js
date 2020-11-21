import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRequest } from 'src/redux/actions/Request';
import { useNavigate } from 'react-router-dom';

const CreateRequest = () => {
    const [values, setValues] = useState({
        id: 0,
        userId: '',
        url: "",
        value: 0,
        type: "",
        totalLike: 0,
        budget: 0
      });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });

        setValues((oldValues) => {
            return({
              ...oldValues,
              id: oldValues.url.substring(oldValues.url.lastIndexOf('/') + 1),
              type: oldValues.url.includes("post")?"post":"page"
            })
        })      
    };

    const handleSubmit = () => {
        dispatch(addRequest(values));
        navigate('../', { replace: true });
    }

    return (
        <>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">New Request</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card hover-shadow-lg">
                        <div className="card-body overflow-hidden">
                            <div className="form-group">
                                <label>Post URL / Page URL</label>
                                <input value={values.url} name="url" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Cost per like</label>
                                <input value={values.value} name="value" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Owner ID</label>
                                <input value={values.userId} name="userId" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Budget</label>
                                <input value={values.budget} name="budget" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="actions d-flex justify-content-center px-4">
                                <button onClick={handleSubmit} className="action-item w-100">
                                    <i className="fas fa-edit"></i>
                                    &nbsp;Add Request
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRequest