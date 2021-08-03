import { createElement } from '../../utils/createElement';
import './character.css';

export function createCharacterCard(): HTMLElement {
  return createElement('article', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }),
      createElement('section', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', {
            className: 'character-card__name',
            innerText: 'Rick Sanchez',
          }),
          createElement('div', {
            childElements: [
              createElement('p', {
                className: 'character-card__status',
                innerText: '🟢 Alive',
              }),
              createElement('p', {
                className: 'character-card__species',
                innerText: 'Human',
              }),
            ],
          }),
          createElement('div', {
            childElements: [
              createElement('h3', { innerText: 'Last known location' }),
              createElement('p', {
                className: 'character-card__location',
                innerText: 'Story Train',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
