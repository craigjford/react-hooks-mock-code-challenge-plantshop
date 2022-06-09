import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  //const [searchTerm, setSearchTerm] = ("");

  console.log('got into PlantPage')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, []);

  const handleFormSubmit = (newPlant) => {
      console.log('in plant page submit routine = ', newPlant)
      setPlants([...plants, newPlant]);
  } 

  const handleSearch = (searchF) => {
    console.log('SERCHF TERM = ', searchF)
    //setSearchTerm(searchF)
    //console.log('after set state')
    const filteredPlants = plants.filter((plant) => {
        console.log('in filtering serachF = ', searchF)
        if (plant.name.includes(searchF)) {
           return true;
        } else {
           return false;
        }
    })
    setPlants(filteredPlants)
    console.log('got to end')
  } 

  return (
    <main>
      <NewPlantForm handleSubmit={handleFormSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} />
    </main>
  )
}

export default PlantPage;
