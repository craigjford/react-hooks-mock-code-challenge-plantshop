import React, { useState } from "react";

function NewPlantForm({ handleSubmit }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

  const init = () => {
    console.log('init name = ', name);
    console.log('init image = ', image);
    console.log('init price = ', price);
  }  

  init();

  function onSubmit(event) {

      event.preventDefault();

      const newPlant = {
        name: name,
        image: image,
        price: price
      }   

      console.log('in plant form - newPlant = ', newPlant);

      fetch("http://localhost:6001/plants", { 
        method: "POST",
        headers: {"Content-Type": "application/json",
      },
        body: JSON.stringify(newPlant),
      })
        .then((r) => r.json())
        .then ((newItem) => handleSubmit(newItem));

      setName("");
      setImage("");
      setPrice("");

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plant name" required onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" required onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" required onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
