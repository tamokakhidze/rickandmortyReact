import React from 'react';
import CharacterList from '../components/CharacterList';

function CharactersPage() {
  return (
    <div className="characters-page">
      <h2>Characters from Rick and Morty</h2>
      <CharacterList />
    </div>
  );
}

export default CharactersPage;
