import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
     <h1 class="fw-bold fs-3">Health<span className="text-primary">Med</span></h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav className="navbar-nav">
            <NavLink to="/home" className="nav-link active">Home</NavLink>
            <NavLink to="/About" className="nav-link active">About</NavLink>
            <NavLink to="/doctor" className="nav-link active">Doctor</NavLink>
            <NavLink to="/medicine" className="nav-link active">Medicine</NavLink>
      </nav>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;