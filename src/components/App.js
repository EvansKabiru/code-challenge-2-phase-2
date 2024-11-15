import React, { useState, useEffect } from "react";
import PlantList from "../components/PlantList";
import PlantForm from "../components/PlantForm";
import Search from "../components/Search";
import "../index.css";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from JSON server
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants)
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  // Add a new plant
  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((plant) => setPlants([...plants, plant]))
      .catch((error) => console.error("Error adding plant:", error));
  };

  // Update plant price
  const updatePlantPrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setPlants(plants.map((plant) => (plant.id === id ? updatedPlant : plant)));
      })
      .catch((error) => console.error("Error updating plant price:", error));
  };

  // Delete a plant
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, { method: "DELETE" })
      .then(() => setPlants(plants.filter((plant) => plant.id !== id)))
      .catch((error) => console.error("Error deleting plant:", error));
  };

  // Toggle sold out
  const toggleSoldOut = (id) => {
    const plant = plants.find((p) => p.id === id);
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ soldOut: !plant.soldOut }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setPlants(plants.map((p) => (p.id === id ? updatedPlant : p)));
      })
      .catch((error) => console.error("Error toggling sold out status:", error));
  };

  // Filtered plants
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Plant Store</h1>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantForm addPlant={addPlant} />
      <PlantList
        plants={filteredPlants}
        onDelete={deletePlant}
        onUpdatePrice={updatePlantPrice}
        onToggleSoldOut={toggleSoldOut}
      />
    </div>
  );
}

export default App;