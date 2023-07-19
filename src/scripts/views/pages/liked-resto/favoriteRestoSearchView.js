import { createRestoItem } from '../../templates/creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
          <ul class="restos">
          </ul>
        </div>
      </div>
    `;
  }

  getFavoriteRestoTemplate() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showResto(resto) {
    let html;
    if (!resto) return;

    if (resto.length > 0) {
      html = resto.reduce((carry, resto) => carry.concat(`<li class="resto"><span class="resto__title">${resto.title || '-'}</span></li>`), '');
    } else {
      html = '<div class="resto__not__found">Resto tidak ditemukan</div>';
    }

    document.querySelector('.restos').innerHTML = html;

    document.getElementById('resto-search-container').dispatchEvent(new Event('resto:searched:updated'));
  }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestoItem(resto)), '');
    } else {
      html = '<div class="resto-item__not__found"></div>';
    }

    document.querySelector('.restos').innerHTML = html;

    document.querySelector('.restos').dispatchEvent(new Event('resto:updated'));
  }
}

export default FavoriteRestoSearchView;
