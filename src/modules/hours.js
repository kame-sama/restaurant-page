export default function() {
  const hours = document.createElement('div');
  hours.classList.add('hours');

  const container = document.createElement('div');
  container.classList.add('container', 'narrow');

  const h2 = document.createElement('h2');
  h2.textContent = 'Working Hours';

  container.appendChild(h2);

  const content = [
    {
      text: 'At Waffle Haven, we strive to be a source of delight for you every day of the week. Our doors are open to welcome you during the following hours:'
    },
    {
      title: 'Monday to Friday:',
      text: [
        'Breakfast Bliss: 7:00 AM to 11:00 AM',
        'Lunch Delights: 11:30 AM to 2:30 PM',
        'Afternoon Indulgence: 3:00 PM to 6:00 PM',
        'Dinner Treats: 6:30 PM to 9:00 PM'
      ]
    },
    {
      title: 'Saturday and Sunday:',
      text: [
        'Brunch Extravaganza: 8:00 AM to 2:00 PM',
        'Afternoon Indulgence: 2:30 PM to 5:30 PM',
        'Evening Delights: 6:00 PM to 8:30 PM'
      ]
    },
    {
      text: 'We understand that your cravings might strike at any time, and that\'s why we\'ve curated a menu that caters to different tastes throughout the day. Whether you\'re in the mood for a breakfast pick-me-up, a leisurely brunch, or a delightful dinner, Waffle Haven is here to make every moment a treat.'
    },
    {
      text: 'Please note that these hours may vary slightly by location, so be sure to check the specific operating hours for your preferred Waffle Haven branch. We look forward to serving you delicious waffles, fresh fruits, and aromatic coffee during your visit!'
    }
  ];

  content.forEach(item => {
    if (item.title) {
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      container.appendChild(h3);
    }

    if (typeof item.text == 'string') {
      const p = document.createElement('p');
      p.textContent = item.text;
      container.appendChild(p);
    } else {
      const ul = document.createElement('ul');
      item.text.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    }
  });

  hours.appendChild(container);

  return hours;
}