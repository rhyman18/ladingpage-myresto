import favoritePresenter from '../../src/scripts/utils/favoritePresenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await favoritePresenter.init({
    favoriteContainer: document.querySelector('#fav'),
    resto,
  });
};

export { createLikeButtonPresenterWithResto };
