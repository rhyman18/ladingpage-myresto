import favoriteInitiator from '../src/scripts/utils/favoriteInitiator';

describe('Liking A Resto', () => {
  it('should show the add to favorite button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="fav"></div>';

    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    document.body.innerHTML = '<div id="fav"></div>';

    await favoriteInitiator.init({
      favoriteContainer: document.querySelector('#fav'),
      resto: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });
});
