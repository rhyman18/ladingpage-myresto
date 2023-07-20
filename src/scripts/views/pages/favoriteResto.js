import FavoriteResto from '../../data/favoriteResto';
import FavoriteRestoSearchView from './liked-resto/favoriteRestoSearchView';
import FavoriteRestoShowPresenter from './liked-resto/favoriteRestoShowPresenter';
import FavoriteRestoSearchPresenter from './liked-resto/favoriteRestoSearchPresenter';
// import { createRestoItem } from '../templates/creator';

const view = new FavoriteRestoSearchView();

const FavoriteRestos = {
  async render() {
    // return `
    // <span class="sub-title">Tandai</span>
    // <h2 tabindex="0">Favorite Restoran</h2>
    // <div id="restos"></div>
    // `;
    return view.getTemplate();
  },

  async afterRender() {
    // const restos = await FavoriteResto.getAllResto();
    // const restosContainer = document.querySelector('#restos');
    // restos.forEach((resto) => {
    //   restosContainer.innerHTML += createRestoItem(resto);
    // });

    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteResto });
    new FavoriteRestoSearchPresenter({ view, favoriteResto: FavoriteResto });
  },
};

export default FavoriteRestos;
