export default function() {
  const about = document.createElement('div');
  about.classList.add('about');

  const container = document.createElement('div');
  container.classList.add('container', 'narrow');

  const h2 = document.createElement('h2');
  h2.textContent = 'Waffle Haven: Where Every Bite is a Symphony of Sweet and Savory Bliss!';

  const img = document.createElement('div');
  img.classList.add('img');

  container.replaceChildren(h2, img);

  const content = [
    'Welcome to Waffle Haven, where passion meets palate to redefine the art of waffle indulgence. Since 1999, we have been crafting a haven for waffle enthusiasts, elevating the simple pleasure of a bite into an unforgettable experience.',
    'Our founders, Waffle Sweet and Fruit Juice, envisioned more than a café; they dreamed of a community gathering space where friends and families could create lasting memories over delectable waffles, fresh fruits, and aromatic coffee. From our flagship location in Mist City to our suburban retreats, each Waffle Haven branch is a unique chapter in our flavorful story.',
    'At Waffle Haven, quality is our cornerstone. We meticulously source the finest ingredients to ensure that every waffle, every fruit bowl, and every cup of coffee surpasses expectations. It\'s a commitment to excellence that extends beyond our kitchen, creating an inviting atmosphere where every guest becomes a cherished part of our growing community.',
    'More than just a culinary destination, Waffle Haven is a celebration of life\'s simple joys. We invite you to explore our diverse menu, discover the charm of each location, and join us on a flavorful journey where every bite tells a tale of sweetness, warmth, and the joy of culinary discovery. Thank you for being a part of the Waffle Haven story – where every waffle is a moment, and every moment is a celebration.'
  ];

  content.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;

    container.appendChild(p);
  });

  about.appendChild(container);

  return about;
}