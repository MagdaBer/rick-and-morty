import type { AllCharactersFromAPI, Character } from '../types';

export async function getCharacters(name?: string): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name ? name : ''}`
  );
  const data: AllCharactersFromAPI = await response.json();
  const characters = data.results;
  const formattedCharacters: Character[] = characters.map((character) => {
    const formattedCharacter: Character = {
      name: character.name,
      status: character.status,
      species: character.species,
      location: character.location.name,
      image: character.image,
    };
    return formattedCharacter;
  });

  return formattedCharacters;
}
