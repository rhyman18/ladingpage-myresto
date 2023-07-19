import CONFIG from '../../global/config';
import UrlParser from '../../routes/urlParser';
import ApiSource from '../../data/apiSource';
import FavoriteResto from '../../data/favoriteResto';
import favoritePresenter from '../../utils/favoritePresenter';
import {
  createRestoDetail,
  createMenuDetail,
  createReviewDetail,
} from '../templates/creator';

const DetailResto = {
  async render() {
    return `
      <span class="sub-title">Tentang</span>
      <h2 tabindex="0">Detail Restoran</h2>
      <div id="resto"></div>
      <span class="sub-title">Makanan &amp; Minuman</span>
      <h2 tabindex="0">Menu Restoran</h2>
      <div id="menus"></div>
      <span class="sub-title">Kata Mereka</span>
      <h2 tabindex="0">Review Restoran</h2>
      <div id="reviews"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await ApiSource.fetchDetail(url.id);

    const restoContainer = document.querySelector('#resto');
    const menuContainer = document.querySelector('#menus');
    const reviewsContainer = document.querySelector('#reviews');

    restoContainer.innerHTML = createRestoDetail(resto.restaurant);
    menuContainer.innerHTML += createMenuDetail(resto.restaurant.menus);
    reviewsContainer.innerHTML += createReviewDetail(resto.restaurant.customerReviews);

    // render favorite button
    favoritePresenter.init({
      favoriteContainer: document.querySelector('#fav'),
      favoriteResto: FavoriteResto,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        description: resto.restaurant.description,
      },
    });

    // render background hero
    const hero = document.querySelector('#hero');
    hero.style = `background: rgba(0, 0, 0, .5) url('${resto.restaurant.pictureId ? CONFIG.BASE_IMAGE_LARGE_URL + resto.restaurant.pictureId : 'images/heros/hero-image.jpg'}') no-repeat center center;`;
  },
};

export default DetailResto;
