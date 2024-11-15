import React, { useState } from "react";

function PlantCard({ plant, onDelete, onUpdatePrice, onToggleSoldOut }) {
  const [newPrice, setNewPrice] = useState(plant.price);

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.soldOut ? "Sold Out" : `Price: $${plant.price}`}</p>
      <button onClick={() => onToggleSoldOut(plant.id)}>
        {plant.soldOut ? "Available" : "Mark as Sold Out"}
      </button>
      <input
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(parseFloat(e.target.value))}
      />
      <button onClick={() => onUpdatePrice(plant.id, newPrice)}>Update Price</button>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </div>
  );
}

export default PlantCard;

