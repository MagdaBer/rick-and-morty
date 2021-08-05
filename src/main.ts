import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'app__characterContainer',
  childElements: characters.map((character) => createCharacterCard(character)),
});

const searchbar = createElement('input', {
  className: 'app__userInput',
  placeholder: 'Search for a character',
  oninput: async () => {
    characterContainer.innerHTML = '';
    const search = searchbar.value;
    const filteredCharacters = await getCharacters(search);
    const filteredCharacterElements = filteredCharacters.map(
      (filteredCharacter) => createCharacterCard(filteredCharacter)
    );
    characterContainer.append(...filteredCharacterElements);
  },
});

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Rick and Morty',
      className: 'app__title',
    }),
    searchbar,
    characterContainer,
  ],
});
document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
