import React, { useEffect, useState } from 'react';
import MedicineCard from '../MedicineCard/MedicineCard';

const Medicine = () => {
    const [Medicines, setMedicines] = useState([]);
    useEffect(()=>{
        fetch('./product1.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold pt-5 mb-5">Our <span className="text-primary"> Pharmacy</span></h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-1">
                        <div className="row">
                        {
                            Medicines.map(Medicine => <MedicineCard key={Medicine.id} Medicine={Medicine} ></MedicineCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Medicine;