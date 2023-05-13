import FavoriteResto from '../../data/favoriteResto';
import {createRestoItem} from '../templates/creator';

const FavoriteRestos = {
  async render() {
    return `
    <span class="sub-title">Tandai</span>
    <h2 tabindex="0">Favorite Restoran</h2>
    <div id="restos"></div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteResto.getAllResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItem(resto);
    });

    // render background hero
    const hero = document.querySelector('#hero');
    hero.style = `background: rgba(0, 0, 0, .5) url('images/heros/hero-image.jpg') no-repeat;`;
  },
};

export default FavoriteRestos;
