import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

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
  ],
});
if (app !== null) {
  app.append(mainElement);
}
