import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favoriteRestoSearchPresenter';
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favoriteRestoSearchView';
import FavoriteResto from '../src/scripts/data/favoriteResto';

describe('Searching resto', () => {
  let presenter;
  let favoriteResto;
  let view;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteResto = spyOnAllFunctions(FavoriteResto);
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchResto('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked resto', () => {
      searchResto('resto a');

      expect(favoriteResto.searchResto).toHaveBeenCalledWith('resto a');
    });

    // it('should show the found resto', () => {
    //   presenter._showFoundResto([{ id: 1 }]);
    //   expect(document.querySelectorAll('.resto').length).toEqual(1);

    //   presenter._showFoundResto([{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]);
    //   expect(document.querySelectorAll('.resto').length).toEqual(2);
    // });

    // it('should show the title of the found resto', () => {
    //   presenter._showFoundResto([{ id: 1, name: 'Satu' }]);
    //   expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

    //   presenter._showFoundResto([{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]);

    //   const restoTitles = document.querySelectorAll('.resto__title');
    //   expect(restoTitles.item(0).textContent).toEqual('Satu');
    //   expect(restoTitles.item(1).textContent).toEqual('Dua');
    // });

    // it('should show - for found resto without title', () => {
    //   presenter._showFoundResto([{ id: 1 }]);

    //   expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
    // });

    it('should show the resto found by Favorite Resto', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(3);

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchResto('resto a');
    });

    it('should show the name of the resto found by Favorite Resto', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('resto abc');
        expect(restoTitles.item(1).textContent).toEqual('ada juga resto abcde');
        expect(restoTitles.item(2).textContent).toEqual('ini juga boleh resto a');

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 111, name: 'resto abc' },
        { id: 222, name: 'ada juga resto abcde' },
        { id: 333, name: 'ini juga boleh resto a' },
      ]);

      searchResto('resto a');
    });

    it('should show - when the resto returned does not contain a title', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([
        { id: 444 },
      ]);

      searchResto('resto a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite resto', () => {
      searchResto('    ');

      expect(favoriteResto.getAllResto).toHaveBeenCalled();
    });
  });

  describe('When no favorite resto could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });

    it('should not show any resto', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(0);

        done();
      });

      favoriteResto.searchResto.withArgs('resto a').and.returnValues([]);

      searchResto('resto a');
    });
  });
});
