import nav from "./modules/nav";
import header from "./modules/header";
import hours from "./modules/hours";
import locations from "./modules/locations";
import loyalty from "./modules/loyalty";
import newsletter from "./modules/newsletter";
import footer from "./modules/footer";
import menu from "./modules/menu";
import about from "./modules/about";
import contact from "./modules/contact";
import './style.css';

const body = document.querySelector('body');
const main = document.querySelector('.main');

body.insertBefore(nav(), main);
body.appendChild(footer());

const homeLink = document.querySelector('#home');
const menuLink = document.querySelector('#menu');
const aboutUsLink = document.querySelector('#about-us');
const contactLink = document.querySelector('#contact');

body.insertBefore(header(), main);
main.replaceChildren(hours(), locations(), loyalty(), newsletter());
homeLink.classList.add('selected');


homeLink.addEventListener('click', () => {
  main.replaceChildren(hours(), locations(), loyalty(), newsletter());
  homeLink.classList.add('selected');
  menuLink.classList.remove('selected');
  aboutUsLink.classList.remove('selected');
  contactLink.classList.remove('selected');
});

menuLink.addEventListener('click', () => {
  main.replaceChildren(menu());
  homeLink.classList.remove('selected');
  menuLink.classList.add('selected');
  aboutUsLink.classList.remove('selected');
  contactLink.classList.remove('selected');
});

aboutUsLink.addEventListener('click', () => {
  main.replaceChildren(about());
  homeLink.classList.remove('selected');
  menuLink.classList.remove('selected');
  aboutUsLink.classList.add('selected');
  contactLink.classList.remove('selected');
});

contactLink.addEventListener('click', () => {
  main.replaceChildren(contact());
  homeLink.classList.remove('selected');
  menuLink.classList.remove('selected');
  aboutUsLink.classList.remove('selected');
  contactLink.classList.add('selected');
});