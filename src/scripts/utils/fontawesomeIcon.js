const FontawesomeIcon = {
  foodsIcon: [
    'fa-solid fa-bowl-food',
    'fa-solid fa-utensils',
    'fa-solid fa-egg',
    'fa-solid fa-carrot',
    'fa-solid fa-burger',
    'fa-solid fa-bacon',
    'fa-solid fa-stroopwafel',
    'fa-solid fa-shrimp',
    'fa-solid fa-pizza-slice',
    'fa-solid fa-pepper-hot',
    'fa-solid fa-hotdog',
    'fa-solid fa-drumstick-bite',
    'fa-solid fa-cookie',
    'fa-solid fa-cheese',
    'fa-solid fa-bread-slice',
    'fa-solid fa-bowl-rice',
  ],

  drinksIcon: [
    'fa-solid fa-champagne-glasses',
    'fa-solid fa-mug-hot',
    'fa-solid fa-wine-bottle',
    'fa-solid fa-wine-glass',
    'fa-solid fa-whiskey-glass',
    'fa-solid fa-martini-glass-citrus',
    'fa-solid fa-martini-glass',
    'fa-solid fa-glass-water',
    'fa-solid fa-bottle-water',
    'fa-solid fa-beer-mug-empty',
  ],

  renderFoods() {
    const random = Math.floor(Math.random() * this.foodsIcon.length);
    return this.foodsIcon[random];
  },

  renderDrinks() {
    const random = Math.floor(Math.random() * this.drinksIcon.length);
    return this.drinksIcon[random];
  },
};

export default FontawesomeIcon;
