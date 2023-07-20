import FavoriteResto from '../src/scripts/data/favoriteResto';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Resto', () => {
  const addFavoriteBtnContainer = () => {
    document.body.innerHTML = '<div id="fav"></div>';
  };

  beforeEach(async () => {
    addFavoriteBtnContainer();
    await FavoriteResto.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteResto.deleteResto(1);

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
