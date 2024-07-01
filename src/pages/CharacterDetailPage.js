import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';

function CharacterDetailPage() {
  const { id } = useParams();

  return (
    <div className="character-detail-page">
      <h2>Character Detail</h2>
      <CharacterDetail id={id} />
    </div>
  );
}

export default CharacterDetailPage;
