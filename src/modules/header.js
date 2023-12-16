export default function() {
  const header = document.createElement('header');
  header.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container', 'wide');

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  for (let i = 1; i <= 4; i++) {
    const picture = document.createElement('div');
    picture.classList.add('pic' + i, 'img');
    wrapper.appendChild(picture);
  }

  carousel.appendChild(wrapper);

  const description = document.createElement('div');
  description.classList.add('description');

  const h1 = document.createElement('h1');
  h1.textContent = 'Indulge in Joyful Moments';

  const p = document.createElement('p');
  p.textContent = 'At Waffle Haven, we transform ordinary moments into extraordinary memories. From classic Belgian Waffles to innovative creations like the Chocolate Lover\'s and Berry Bliss, each bite is a celebration of flavors and quality. Our commitment to excellence extends beyond the kitchen to create a warm community atmosphere where every guest is a cherished part of our story. Join us on this flavorful journey, explore our menu, and discover the joy of savoring life\'s simple pleasures at Waffle Haven.'

  description.replaceChildren(h1, p);

  container.replaceChildren(carousel, description);

  header.appendChild(container);

  return header;
}