import DrawerInitiator from '../utils/drawerInitiator';
import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

class App {
  constructor({button, drawer, link, content}) {
    this._button = button;
    this._drawer = drawer;
    this._link = link;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      link: this._link,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
