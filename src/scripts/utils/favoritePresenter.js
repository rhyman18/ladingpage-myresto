import FavoriteResto from '../data/favoriteResto';
import {createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate} from '../views/templates/creator';

const favoritePresenter = {
  async init({favoriteContainer, resto}) {
    this._favoriteContainer = favoriteContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    this._favoriteContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default favoritePresenter;
