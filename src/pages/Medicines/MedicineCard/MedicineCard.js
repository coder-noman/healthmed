import React from 'react';
import { Link } from 'react-router-dom';

const MedicineCard = (props) => {
    const {name,price,brand,image} = props.Medicine || {};
    return (
        <div className="col-md-3 col-sm-1 g-2">
            <div class="card" style={{"width": "16rem"}}>
                        <img src={image} className="card-img-top w-100 d-flex justify-content-center" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text ">Price: <small className="fw-bold">{price}</small></p>
                            <p class="card-text">Brand: <small className="fw-bold">{brand}</small></p>
                            <Link to="/buymedicine" class="btn button fw-bold bg-primary text-white" ><i class="fas fa-pills"></i> Buy Medicine</Link>
                        </div>
            </div>
        </div>
    );
};
export default MedicineCard;
