const DrawerInitiator = {
  init({button, drawer, link}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer);
    });

    link.forEach((click) => click.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    }));
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.toggle('active');
    drawer.classList.toggle('active');
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('active');
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;
