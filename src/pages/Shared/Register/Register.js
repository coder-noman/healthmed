import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="my-5">
            <h1 className="text-center">Please <span className="text-primary">Register</span></h1>
            <div className="d-flex justify-content-center mt-5">
            <form className="w-50">
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-primary me-2 fw-bold">Register</button>
                </div>     
</form>

            </div>
            <div className="text-center">
            <Link to="/login" className="btn btn-outline-primary mt-2 fw-bold">Already Register?</Link>
            </div>
        </div>
    );
};

export default Register;