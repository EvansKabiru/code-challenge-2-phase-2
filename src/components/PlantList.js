import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete, onUpdatePrice, onToggleSoldOut }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
          onUpdatePrice={onUpdatePrice}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;
