import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

if (app !== null) {
  app.append(mainElement);
}
