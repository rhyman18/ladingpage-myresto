import { itActAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favoriteResto';

describe('Favorite Resto Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllResto()).forEach(async (resto) => {
      await FavoriteResto.deleteResto(resto.id);
    });
  });

  itActAsFavoriteRestoModel(FavoriteResto);
});
