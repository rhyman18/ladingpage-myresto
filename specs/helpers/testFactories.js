import favoritePresenter from '../../src/scripts/utils/favoritePresenter';
import FavoriteResto from '../../src/scripts/data/favoriteResto';

const createLikeButtonPresenterWithResto = async (resto) => {
  await favoritePresenter.init({
    favoriteContainer: document.querySelector('#fav'),
    favoriteResto: FavoriteResto,
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
