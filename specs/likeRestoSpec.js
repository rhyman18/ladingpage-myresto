import favoriteInitiator from '../src/scripts/utils/favoriteInitiator';
import FavoriteResto from '../src/scripts/data/favoriteResto';

describe('Liking A Resto', () => {
  const addFavoriteBtnContainer = () => {
    document.body.innerHTML = '<div id="fav"></div>';
  };

  beforeEach(() => {
    addFavoriteBtnContainer();
  });

  it('should show the add to favorite button when the resto has not been liked before', async () => {
    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const resto = await FavoriteResto.getResto(1);
    expect(resto).toEqual({ id: 1 });

    FavoriteResto.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    await FavoriteResto.putResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteResto.deleteResto(1);
  });

  xit('should not add a resto when it has no id', async () => {
    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
