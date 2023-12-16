export default function() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const container = document.createElement('div');
  container.classList.add('container', 'wide');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const icon = document.createElement('div');
  icon.classList.add('logo-icon');

  const title = document.createElement('h1');
  title.textContent = 'Waffle Haven Café';

  logo.replaceChildren(icon, title);

  const items = ['Home', 'Menu', 'About Us', 'Contact'];

  const ul = document.createElement('ul');
  ul.classList.add('nav');

  items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#main');
    a.id = item.toLowerCase().replaceAll(' ', '-');
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });

  container.replaceChildren(logo, ul);
  nav.appendChild(container);

  return nav;
}