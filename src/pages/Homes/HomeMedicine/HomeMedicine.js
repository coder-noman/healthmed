import { useEffect, useState } from 'react';
import HomeMedicineCard from '../HomeMedicineCard/HomeMedicineCard';

const HomeMedicine = () => {
    const [Medicines, setMedicines] = useState([]);
    useEffect(()=>{
        fetch('./product2.json')
        .then(res => res.json())
        .then(data => setMedicines(data))
    },[])
    return (
        <div>
            <h1 className="text-center fw-bold pt-5 mb-5">Our <span className="text-primary"> Pharmacy</span></h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-1">
                        <div className="row">
                        {
                            Medicines.map(Medicine => <HomeMedicineCard key={Medicine.id} Medicine={Medicine} ></HomeMedicineCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

        </div>
    )
}

export default HomeMedicine;