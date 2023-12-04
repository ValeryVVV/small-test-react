import axios from 'axios';

export const fetchPokemon = async name => {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response = await axios.get(`${BASE_URL}?offset=20&limit=20`);
  return response.data;
};
