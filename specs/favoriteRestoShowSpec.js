import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favoriteRestoSearchView';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favoriteRestoShowPresenter';
import FavoriteResto from '../src/scripts/data/favoriteResto';

describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getFavoriteRestoTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    // it('should render the information that no resto have been liked', () => {
    //   const favoriteResto = spyOnAllFunctions(FavoriteResto);
    //   const presenter = new FavoriteRestoShowPresenter({
    //     view,
    //     favoriteResto,
    //   });

    //   const resto = [];
    //   presenter._displayResto(resto);

    //   expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);
    // });

    it('should ask for the favorite resto', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteResto);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no resto have been liked', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto-item__not__found').length).toEqual(1);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteResto);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite resto exist', () => {
    // it('should render the resto', () => {
    //   const favoriteResto = spyOnAllFunctions(FavoriteResto);
    //   const presenter = new FavoriteRestoShowPresenter({
    //     view,
    //     favoriteResto,
    //   });

    //   presenter._displayResto([
    //     {
    //       id: 11,
    //       title: 'A',
    //       vote_average: 3,
    //       overview: 'Sebuah resto A',
    //     },
    //     {
    //       id: 22,
    //       title: 'B',
    //       vote_average: 4,
    //       overview: 'Sebuah resto B',
    //     },
    //   ]);

    //   expect(document.querySelectorAll('.resto').length).toEqual(2);
    // });

    it('should show the resto', (done) => {
      document.getElementById('restos').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.resto').length).toEqual(2);

        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteResto, false);

      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah resto A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah resto B',
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
