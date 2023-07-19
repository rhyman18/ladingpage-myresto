class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser = () => {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  };

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundResto;
    if (this.latestQuery.length > 0) {
      foundResto = await this._favoriteResto.searchResto(this.latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllResto();
    }

    this._showFoundResto(foundResto);
  }

  _showFoundResto(resto) {
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

  get latestQuery() {
    return this._latestQuery;
  }
};

export default FavoriteRestoSearchPresenter;
