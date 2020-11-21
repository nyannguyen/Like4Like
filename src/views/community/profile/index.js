import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'src/redux/actions/User';
const Profile = () => {
    const [values, setValues] = useState(useSelector(state => state.User));
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
    };

    const handleSubmit = () => {
        dispatch(updateProfile(values));
    }

    return (
        <>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Profile</h5>
                        </div>
                        <div className="align-items-center ml-4 d-inline-flex">
                            <span className="text-sm opacity-7 text-white">We'll never share your information with anyone else.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card hover-shadow-lg">
                        <div className="card-body overflow-hidden">
                            <div className="form-group">
                                <label>Name</label>
                                <input value={values.name} name="name" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Facebook Profile</label>
                                <input value={values.facebook_profile} name="facebook_profile" onChange={handleChange} type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="actions d-flex justify-content-center px-4">
                                <button onClick={handleSubmit} className="action-item w-100">
                                    <i className="fas fa-edit"></i>
                                    &nbsp;Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile