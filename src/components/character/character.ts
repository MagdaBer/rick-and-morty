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
            className: 'character-card__status',
            childElements: [
              createElement('p', {
                className: 'character-card__status--icon',
                innerText: '🟢',
              }),
              createElement('p', {
                className: 'character-card__status--text',
                innerText: 'Alive',
              }),
              createElement('p', {
                className: 'character-card__status--species',
                innerText: 'Human',
              }),
            ],
          }),
          createElement('div', {
            className: 'character-card__location',
            childElements: [
              createElement('h3', { innerText: 'Last known location:' }),
              createElement('p', { innerText: 'Story Train' }),
            ],
          }),
        ],
      }),
    ],
  });
}
