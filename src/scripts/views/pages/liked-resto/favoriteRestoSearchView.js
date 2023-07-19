import { createRestoItem } from '../../templates/creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <input id="query" type="text">
      <span class="sub-title">Tandai</span>
      <h2 tabindex="0">Favorite Restoran</h2>
      <div id="restos">
      </div>
    `;
  }

  // getFavoriteRestoTemplate() {
  //   return `
  //     <div class="content">
  //       <h2 class="content__heading">Your Liked Resto</h2>
  //       <div id="restos" class="restos">
  //       </div>
  //     </div>
  //   `;
  // }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // showResto(resto) {
  //   this.showFavoriteResto(resto);
  // }

  showFavoriteResto(resto = []) {
    let html;
    if (resto.length) {
      html = resto.reduce((carry, resto) => carry.concat(createRestoItem(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.querySelector('#restos').innerHTML = html;

    document.querySelector('#restos').dispatchEvent(new Event('resto:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
