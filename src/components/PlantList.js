import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const plantLis = filteredPlants.map((plant) => {
      return (<PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} />);
  })    

  return (
    <ul className="cards">
        {plantLis}
    </ul>
  );
}

export default PlantList;
