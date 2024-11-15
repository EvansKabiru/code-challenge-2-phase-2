import React, { useState } from "react";

function PlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant({ name, image, price: parseFloat(price), soldOut: false });
    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Plant name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={image}
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default PlantForm;
