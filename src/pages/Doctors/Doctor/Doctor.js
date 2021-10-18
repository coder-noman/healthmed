import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctor = () => {
    const [Doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctor.json')
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
                            Doctors.map(Doctor => <DoctorCard key={Doctor.id} Doctor={Doctor} ></DoctorCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Doctor;