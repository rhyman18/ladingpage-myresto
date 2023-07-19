import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/swRegister';

const hamburger = document.querySelector('.hamburger');
const drawer = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mainContent = document.querySelector('#content');
const skipLink = document.querySelector('.skip-link');

const app = new App({
  button: hamburger,
  drawer: drawer,
  link: navLinks,
  content: mainContent,
});

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({behavior: 'smooth'});
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
