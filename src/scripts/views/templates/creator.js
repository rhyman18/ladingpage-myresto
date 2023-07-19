import CONFIG from '../../global/config';
import FontawesomeIcon from '../../utils/fontawesomeIcon';

const createRestoItem = (resto) => `
<a href="#/detail/${resto.id}" class="resto" aria-label="${resto.name || '-'}">
  <div class="image-fluid">
    <img class="lazyload" alt="${resto.name || '-'}" src="${resto.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  </div>
  <div class="kota" tabindex="0">${resto.city || '-'}</div>
  <div class="rating" tabindex="0" aria-label="Rating ${resto.rating || '-'}">⭐️<span class="nilai">${resto.rating || '-'}</span></div>
  <h3 class="resto__title">${resto.name || '-'}</h3>
  <p tabindex="0">${resto.description || '-'}</p>
</a>
`;

const createRestoItemSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i++) {
    template += `
      <a class="resto" aria-label="loading">
        <div class="image-fluid">
          <img class="lazyload" alt="loading" src="./images/placeholder.png">
        </div>
        <div class="kota" tabindex="0">City</div>
        <div class="rating" tabindex="0" aria-label="Rating 5">⭐️<span class="nilai">5</span></div>
        <h3 class="resto__title">Resto Name</h3>
        <p tabindex="0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
      </a>
      `;
  }
  return template;
};

const createRestoDetail = (resto) => `
<div class="detail__atas">
  <div class="detail__img">
    <img class="lazyload" alt="${resto.name || '-'}" src="${resto.pictureId ? CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" tabindex="0">
  </div>
  <div class="detail__info">
    <h3 class="resto__title">${resto.name || '-'}</h3>
    <p tabindex="0" aria-label="Rating ${resto.rating || '-'}">⭐️<span class="nilai">${resto.rating || '-'}</span></p>
    <div class="detail__kategori">
  ${resto.categories.map((category) => {
    return `<span class="kategori" tabindex="0" aria-label="Category ${category.name || '-'}">${category.name || '-'}</span>`;
  }).join('')}
    </div>
    <p tabindex="0">${resto.city || '-'}</p>
    <p tabindex="0">${resto.address || '-'}</p>
    <div id="fav"></div>
  </div>
</div>
<div class="detail__bawah" tabindex="0">${resto.description || '-'}</div>
`;

const createMenuDetail = (menus) => `
<div class="foods">
  ${menus.foods.map((food) => {
    return `<div class="food__item" tabindex="0"><i class="${FontawesomeIcon.renderFoods()} fa-3x"></i>${food.name || '-'}</div>`;
  }).join('')}
</div>
<div class="drinks">
  ${menus.drinks.map((drink) => {
    return `<div class="drink__item" tabindex="0"><i class="${FontawesomeIcon.renderDrinks()} fa-3x"></i>${drink.name || '-'}</div>`;
  }).join('')}
</div>
`;

const createReviewDetail = (reviews) => `
${reviews.map((review) => {
    return `
    <div class="review__item">
      <div class="review__user"><i class="fa-regular fa-circle-user fa-3x"></i><h4 tabindex="0">${review.name || '-'}</h4></div>
      <p class="komentar" tabindex="0">${review.review || '-'}</p>
      <p class="date" tabindex="0">${review.date || '-'}</p>
    </div>
    `;
  }).join('')}
`;

const createLikeRestoButtonTemplate = () => `<button id="likeButton" aria-label="like this resto" class="likeBtn"><i class="fa-regular fa-heart"></i>Add to Favorite</div>`;

const createUnlikeRestoButtonTemplate = () => `<button id="likeButton" aria-label="unlike this resto" class="likedBtn"><i class="fa-solid fa-heart"></i>Unfavorite</div>`;

export {
  createRestoItem,
  createRestoDetail,
  createMenuDetail,
  createReviewDetail,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createRestoItemSkeleton,
};
