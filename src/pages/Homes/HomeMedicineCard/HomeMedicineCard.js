import React from 'react';

const HomeMedicineCard = (props) =>  {
    const {name,price,brand,image} = props.Medicine || {};
    return (
        <div className="col-md-4 col-sm-1 g-2">
            <div class="card" style={{"width": "23rem"}}>
                        <img src={image} className="card-img-top w-100 d-flex justify-content-center" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text ">Price: <small className="fw-bold">{price}</small></p>
                            <p class="card-text">Brand: <small className="fw-bold">{brand}</small></p>
                        </div>
            </div>
        </div>
    );
};

export default HomeMedicineCard;