import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
    const {name,specialist,contact,image} = props.Doctor || {};
    return (
        <div class="card m-2 " style={{"width": "22rem"}}>
  <div class="row g-0">
    <div class="col-md-3">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <p class="card-text fw-bold">{name}</p>
        <p class="card-text">Specialist: <span className="fw-bold">{specialist}</span></p>
        <p class="card-text">Contact Number: <span className="fw-bold">{contact}</span></p>
        <Link to="/appoinment" class="btn button fw-bold bg-primary text-white" ><i class="fas fa-phone-alt"></i> For Appoinment</Link>
      </div>
    </div>
  </div>
</div>


    );
};

export default DoctorCard;