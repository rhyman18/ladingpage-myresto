import ApiSource from '../../data/apiSource';
import { createRestoItem, createRestoItemSkeleton } from '../templates/creator';

const ListResto = {
  async render() {
    return `
    <span class="sub-title">Jelajahi</span>
    <h2 tabindex="0">List Restoran</h2>
    <div id="restos">
      ${createRestoItemSkeleton(20)}
    </div>
    `;
  },

  async afterRender() {
    const restos = await ApiSource.fetchList();
    const restosContainer = document.querySelector('#restos');
    restosContainer.innerHTML = '';
    restos.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createRestoItem(resto);
    });
  },
};

export default ListResto;
