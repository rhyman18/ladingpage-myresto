import CONFIG from '/src/scripts/global/config';
import FontawesomeIcon from '/src/scripts/utils/FontawesomeIcon';

const createRestoItem = (resto) => `
<a href="#/detail/${resto.id}" class="resto" aria-label="${resto.name}">
  <div class="image-fluid">
    <img alt="${resto.name}" src="${resto.pictureId ? CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  </div>
  <div class="kota" tabindex="0">${resto.city}</div>
  <div class="rating" tabindex="0" aria-label="Rating ${resto.rating}">⭐️<span class="nilai">${resto.rating}</span></div>
  <h3>${resto.name}</h3>
  <p tabindex="0">${resto.description}</p>
</a>
`;

const createRestoDetail = (resto) => `
<div class="detail__atas">
  <div class="detail__img">
    <img alt="${resto.name}" src="${resto.pictureId ? CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" tabindex="0">
  </div>
  <div class="detail__info">
    <h3>${resto.name}</h3>
    <p tabindex="0" aria-label="Rating ${resto.rating}">⭐️<span class="nilai">${resto.rating}</span></p>
    <div class="detail__kategori">
  ${resto.categories.map((category) => {
    return `<span class="kategori" tabindex="0" aria-label="Category ${category.name}">${category.name}</span>`;
  }).join('')}
    </div>
    <p tabindex="0">${resto.city}</p>
    <p tabindex="0">${resto.address}</p>
    <div id="fav"></div>
  </div>
</div>
<div class="detail__bawah" tabindex="0">${resto.description}</div>
`;

const createMenuDetail = (menus) => `
<div class="foods">
  ${menus.foods.map((food) => {
    return `<div class="food__item" tabindex="0"><i class="${FontawesomeIcon.renderFoods()} fa-3x"></i>${food.name}</div>`;
  }).join('')}
</div>
<div class="drinks">
  ${menus.drinks.map((drink) => {
    return `<div class="drink__item" tabindex="0"><i class="${FontawesomeIcon.renderDrinks()} fa-3x"></i>${drink.name}</div>`;
  }).join('')}
</div>
`;

const createReviewDetail = (reviews) => `
${reviews.map((review) => {
    return `
    <div class="review__item">
      <div class="review__user"><i class="fa-regular fa-circle-user fa-3x"></i><h4 tabindex="0">${review.name}</h4></div>
      <p class="komentar" tabindex="0">${review.review}</p>
      <p class="date" tabindex="0">${review.date}</p>
    </div>
    `;
  }).join('')}
`;

const createLikeButton = () => `<button id="likeButton" class="likeBtn"><i class="fa-regular fa-heart"></i>Add to Favorite</div>`;

const createLikedButton = () => `<button id="likeButton" class="likedBtn"><i class="fa-solid fa-heart"></i>Unfavorite</div>`;

export {
  createRestoItem,
  createRestoDetail,
  createMenuDetail,
  createReviewDetail,
  createLikeButton,
  createLikedButton,
};
