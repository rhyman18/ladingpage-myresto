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
    this._latestQuery = latestQuery;

    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);

    this._showFoundResto(foundResto);
  }

  _showFoundResto(resto) {
    if (!resto) return;

    const html = resto.reduce((carry, resto) => carry.concat(`<li class="resto"><span class="resto__title">${resto.title || '-'}</span></li>`), '');

    document.querySelector('.restos').innerHTML = html;

    document.getElementById('resto-search-container').dispatchEvent(new Event('resto:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
};

export default FavoriteRestoSearchPresenter;
