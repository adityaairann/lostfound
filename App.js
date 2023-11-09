import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint to fetch pet data from the server
    fetch('/api/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Missing Pets</h1>
      <div className="pet-list">
        {pets.map((pet, index) => (
          <div className="pet" key={index}>
            <h2 className="pet-name">Name: {pet.name}</h2>
            <p className="pet-info">Age: {pet.age} years</p>
            <p className="pet-info">Breed: {pet.breed}</p>
            <p className="pet-description">Description: {pet.description}</p>
            <div className="pet-photos">
              {pet.photos.map((photo, photoIndex) => (
                <img src={photo} alt={`Pet Photo ${photoIndex + 1}`} key={photoIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

