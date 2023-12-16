export default function() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const container = document.createElement('div');
  container.classList.add('container', 'narrow');

  const content = [
    {
      title: 'Waffle Delights',
      items: [
        'Classic Belgian Waffle',
        'Chocolate Lover\'s Waffle',
        'Berry Bliss Waffle',
        'Caramel Pecan Waffle',
        'Banana Nut Crunch Waffle'
      ],
      type: 'waffle'
    },
    {
      title: 'Fruit Infusions',
      items: [
        'Fresh Fruit Medley (Seasonal Selection)',
        'Tropical Paradise Bowl (Mango, Pineapple, Kiwi)',
        'Berry Burst Parfait (Mixed Berries, Yogurt, Granola)',
        'Apple Cinnamon Delight (Sliced Apples, Cinnamon, Whipped Cream)'
      ],
      type: 'fruit'
    },
    {
      title: 'Coffee Creations',
      items: [
        'Espresso',
        'Americano',
        'Latte (Regular and Flavored Options)',
        'Cappuccino',
        'Mocha Madness',
        'Cold Brew Delight'
      ],
      type: 'beverage'
    }
  ];

  content.forEach(item => {
    const section = document.createElement('div');
    section.classList.add('section');

    const h2 = document.createElement('h2');
    h2.textContent = item.title;

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    item.items.forEach(menuItem => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('div');
      img.classList.add(item.type + '-img', 'img');

      const p = document.createElement('p');
      p.textContent = menuItem;

      card.replaceChildren(img, p);
      wrapper.appendChild(card);
    });

    section.replaceChildren(h2, wrapper);
    container.appendChild(section);
  });

  menu.appendChild(container);

  return menu;
}