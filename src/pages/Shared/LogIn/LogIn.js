import React from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className="my-5">
            <h1 className="text-center">Please <span className="text-primary mt-5">Login</span></h1><div className="d-flex justify-content-center mt-5">
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
  <button type="submit" className="btn btn-primary fw-bold">Sign In</button>
  </div>
</form>
            </div>
            <div className="text-center">
            <button className="btn btn-primary mt-1 me-2 fw-bold" onClick={handleGoogleLogIn}>Google Sign In</button>
            <Link to="/register" className="btn btn-outline-primary mt-1 fw-bold">New User?</Link>
            </div>
        </div>
    );
};

export default LogIn;