import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeDoctorCard from '../HomeDoctorCard/HomeDoctorCard';

const HomeDoctor = () => {
    const [Doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctor2.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold pt-5 mb-5">Our <span className="text-primary"> Doctors</span></h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-1">
                        <div className="row">
                        {
                            Doctors.map(Doctor => <HomeDoctorCard key={Doctor.id} Doctor={Doctor} ></HomeDoctorCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center my-3">
        <Link to="/doctor" class="btn button fw-bold bg-primary text-white" ><i class="fas fa-phone-alt"></i> For Appoinment</Link>
        </div>
        </div>
    )
}

export default HomeDoctor;