// import React from 'react';

import { Link } from "react-router-dom";

const Card = ({coffee}) => {

 const {name,image,category,origin,rating,popularity,type} = coffee || {};
    
  return (
    <Link to={'/singlecard'}><div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={image}
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {name}
        <div className="badge badge-secondary">{category}</div>
      </h2>
      <p>{origin}</p>
      <div className="card-actions justify-start">
       <div>
          <p>Rating </p>
          <p>Popular </p>
          <p>Type </p>
       </div>
       <div>
          <p className="font-bold">{rating}</p>
          <p className="font-bold">{popularity}</p>
          <p className="font-bold">{type}</p>
       </div>
      </div>
    </div>
  </div></Link>
  );
};

export default Card;
