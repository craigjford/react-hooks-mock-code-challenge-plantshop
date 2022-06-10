import React, { useState } from "react";

function NewPlantForm({ handleSubmit }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

  function onSubmit(event) {

      event.preventDefault();

      const newPlant = {
        name: name,
        image: image,
        price: parseFloat(price)
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
        <input type="text" name="name" placeholder="Plant name" value={name} required onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} required onChange={(e) => setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} required onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
