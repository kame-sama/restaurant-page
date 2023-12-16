export default function() {
  const loyalty = document.createElement('div');
  loyalty.classList.add('loyalty');

  const container = document.createElement('div');
  container.classList.add('container', 'wide');

  const h2 = document.createElement('h2');
  h2.textContent = 'Loyalty Pays Off!';

  container.appendChild(h2);

  const content = [
    {
      title: 'Join Waffle Haven\'s Loyalty Program for Exclusive Perks:',
      list: [
        {
          title: 'Earn Rewards:',
          description: 'Collect points with every purchase for discounts, free treats, and special promotions.'
        },
        {
          title: 'Early Access:',
          description: 'Enjoy first dibs on new menu items and seasonal specials.'
        },
        {
          title: 'Birthday Treats:',
          description: 'Celebrate your special day with a complimentary surprise from us.'
        },
        {
          title: 'Exclusive Events:',
          description: 'Get VIP access to members-only events and tastings.'
        }
      ]
    },
    {
      title: 'How to Join:',
      para: 'Sign up in-store to start enjoying the sweet rewards of being a Waffle Haven loyalist. Indulge a little extra with every visit – your loyalty deserves to be rewarded!'
    }
  ];

  content.forEach(item => {
    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    container.appendChild(h3);

    if (item.list) {
      const ol = document.createElement('ol');

      item.list.forEach(listContent => {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.textContent = listContent.title;
        p.textContent = listContent.description;

        li.replaceChildren(h4, p);

        ol.appendChild(li);

        container.appendChild(ol);
      });
    } else if (item.para) {
      const p = document.createElement('p');
      p.textContent = item.para;

      container.appendChild(p);
    }
  });

  loyalty.appendChild(container);

  return loyalty;
}