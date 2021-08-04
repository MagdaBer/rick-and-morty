import { createCharacterCard } from './components/character/character';
import './style.css';
import type { Character } from './types';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = [
  {
    name: 'Aqua Rick',
    status: 'unknown',
    species: 'Humanoid',
    location: 'Citadel of Ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
  },
  {
    name: 'Alien Spa Employee',
    status: 'Alive',
    species: 'Alien',
    location: 'Alien Day Spa',
    image: 'https://rickandmortyapi.com/api/character/avatar/470.jpeg',
  },
];

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
if (app !== null) {
  app.append(mainElement);
}
