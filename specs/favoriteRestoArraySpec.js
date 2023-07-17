import { itActAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const favoriteRestoArray = {
  getResto(id) {
    if (!id) return;

    return favoriteRestos.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) return;

    if (this.getResto(resto.id)) return;

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActAsFavoriteRestoModel(favoriteRestoArray);
});
