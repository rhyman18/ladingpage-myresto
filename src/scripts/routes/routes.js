import ListResto from '../views/pages/listResto';
import DetailResto from '../views/pages/detailResto';
import FavoriteRestos from '../views/pages/favoriteResto';

const routes = {
  '/': ListResto, // default route
  '/detail/:id': DetailResto,
  '/favorite': FavoriteRestos,
};

export default routes;
