import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Rick and Morty',
      className: 'app__title',
    }),
    createElement('input', {
      placeholder: 'Search for a character...',
      className: 'app__userInput',
    }),
    createElement('div', {
      className: 'app__characterContainer',
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});
document.querySelector<HTMLDivElement>('#app')?.append(mainElement);
