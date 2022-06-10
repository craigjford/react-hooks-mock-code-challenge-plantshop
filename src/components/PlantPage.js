import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {
        setPlants(plants)})
  }, []);

  const handleFormSubmit = (newPlant) => {
      setPlants([...plants, newPlant]);
  } 

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  return (
    <main>
      <NewPlantForm handleSubmit={handleFormSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} searchTerm={searchTerm}/>
    </main>
  )
}

export default PlantPage;
