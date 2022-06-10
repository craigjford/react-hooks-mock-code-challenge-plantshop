import React, { useState } from "react";

function PlantCard({ name, image, price }) {

  const [isInStock, setIsInStock] = useState(true);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => setIsInStock(!isInStock)}>In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(!isInStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
