import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  try {
    return await axios.get(`${baseURL}/character`);
  } catch (error) {
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    return await axios.get(`${baseURL}/character/${id}`);
  } catch (error) {
    throw error;
  }
};

