import { createElement } from '../../utils/createElement';
import styles from './character.module.css';
import type { Character } from '../../types';

export function createCharacterCard({
  name,
  status,
  species,
  location,
  image,
}: Character): HTMLElement {
  return createElement('article', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.image,
        src: image,
      }),
      createElement('section', {
        className: styles.info,
        childElements: [
          createElement('h2', {
            className: styles.name,
            innerText: name,
          }),
          createElement('div', {
            className: styles.status,
            childElements: [
              createElement('p', {
                innerText: status === 'Alive' ? '🟢' : '🔴 ',
              }),
              createElement('p', {
                innerText: status,
              }),
              createElement('p', {
                innerText: species,
              }),
            ],
          }),
          createElement('div', {
            childElements: [
              createElement('h3', { innerText: 'Last known location:' }),
              createElement('p', { innerText: location }),
            ],
          }),
        ],
      }),
    ],
  });
}
