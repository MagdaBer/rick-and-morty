import { createElement } from '../../utils/createElement';
import './character.css';
import type { Character } from '../../types';

export function createCharacterCard(character: Character): HTMLElement {
  return createElement('article', {
    className: 'character-card',
    childElements: [
      createElement('img', {
        className: 'character-card__image',
        src: character.image,
      }),
      createElement('section', {
        className: 'character-card__info',
        childElements: [
          createElement('h2', {
            className: 'character-card__name',
            innerText: character.name,
          }),
          createElement('div', {
            className: 'character-card__status',
            childElements: [
              createElement('p', {
                className: 'character-card__status--icon',
                innerText: status === 'Alive' ? '🟢' : '🔴 ',
              }),
              createElement('p', {
                className: 'character-card__status--text',
                innerText: character.status,
              }),
              createElement('p', {
                className: 'character-card__status--species',
                innerText: character.species,
              }),
            ],
          }),
          createElement('div', {
            className: 'character-card__location',
            childElements: [
              createElement('h3', { innerText: 'Last known location:' }),
              createElement('p', { innerText: character.location }),
            ],
          }),
        ],
      }),
    ],
  });
}
