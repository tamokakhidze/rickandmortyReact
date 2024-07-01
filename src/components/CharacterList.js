import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await getCharacters();
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>
              <h3>{character.name}</h3>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              {}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
