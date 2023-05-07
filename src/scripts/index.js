import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json' assert { type: 'json' };

// deklarasi nav-menu, link, tombol hamburger, list resto
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const listResto = document.getElementById('list-resto');

// fungsi toggle navbar menu
const mobileMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// fungsi tutup navbar menu
const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// event klik hamburger
hamburger.addEventListener('click', mobileMenu);

// event klik navbar link
navLink.forEach(n => n.addEventListener('click', closeMenu));

// read DATA json file
data.restaurants.forEach(resto => {
    const items = document.createElement('div');
    items.classList = 'resto';

    const images = document.createElement('div');
    images.classList = 'image-fluid';
    images.innerHTML = `<img src="${resto.pictureId}" alt="Resto ${resto.name}" tabindex="0">`;

    const kota = document.createElement('div');
    kota.setAttribute('tabindex', 0);
    kota.classList = 'kota';
    kota.innerText = resto.city;

    const rating = document.createElement('div');
    rating.setAttribute('tabindex', 0);
    rating.classList = 'rating';
    rating.innerHTML = `Rating: <span class="nilai">${resto.rating}</span>`;

    const name = document.createElement('h3');
    name.setAttribute('tabindex', 0);
    name.innerText = resto.name;

    const desc = document.createElement('p');
    desc.setAttribute('tabindex', 0);
    desc.innerText = resto.description;

    items.appendChild(images);
    items.appendChild(kota);
    items.appendChild(rating);
    items.appendChild(name);
    items.appendChild(desc);
    listResto.appendChild(items);
})