/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/nav.js
/* harmony default export */ function nav() {
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
;// CONCATENATED MODULE: ./src/modules/header.js
/* harmony default export */ function header() {
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
;// CONCATENATED MODULE: ./src/modules/hours.js
/* harmony default export */ function hours() {
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
;// CONCATENATED MODULE: ./src/modules/locations.js
/* harmony default export */ function locations() {
  const locations = document.createElement('div');
  locations.classList.add('locations');

  const container = document.createElement('div');
  container.classList.add('container', 'narrow');

  const h2 = document.createElement('h2');
  h2.textContent = 'Discover Waffle Bliss Near You!';

  const p = document.createElement('p');
  p.textContent = 'Explore our four unique locations. Each Waffle Haven branch offers a distinct charm. From main street charisma to waterfront tranquility, find your nearest haven and indulge in the unique flavors of Waffle Haven. Visit us and make every location your personal escape for waffle bliss.';

  const content = [
    {
      title: 'Mist City Main Street Branch',
      description: 'Our flagship branch in the heart of Mist City is where it all began. Nestled on Main Street, this branch is the embodiment of Waffle Haven\'s roots—a charming space where locals gather to indulge in the timeless joy of our classic Belgian waffles and rich coffee blends.'
    },
    {
      title: 'Mist City Waterfront Escape',
      description: 'Experience the serenity of our Waterfront Escape branch in Mist City, where the scenic view meets the scrumptious flavors of Waffle Haven. Whether you\'re enjoying a leisurely brunch or a sunset treat, this location offers a tranquil atmosphere that complements the delightful experience of our waffles.'
    },
    {
      title: 'Mist City Urban Oasis',
      description: 'In the bustling heart of Mist City, our Urban Oasis branch is a modern retreat for those seeking a quick escape from the urban hustle. With contemporary décor and an extensive menu, it\'s the perfect spot to grab a delicious waffle and coffee on the go.'
    },
    {
      title: 'Mist City Suburban Delight',
      description: 'For our friends in the suburbs, our Suburban Delight branch offers a cozy and family-friendly setting. It\'s a place where parents, kids, and friends can come together to enjoy a variety of waffle creations in a relaxed and welcoming environment.'
    }
  ];

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  content.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('div');
    img.classList.add('loc-img');

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    card.replaceChildren(img, title, description);

    wrapper.appendChild(card);
  });

  container.replaceChildren(h2, p, wrapper);

  locations.appendChild(container);

  return locations;
}
;// CONCATENATED MODULE: ./src/modules/loyalty.js
/* harmony default export */ function loyalty() {
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
;// CONCATENATED MODULE: ./src/modules/newsletter.js
/* harmony default export */ function newsletter() {
  const newsletter = document.createElement('div');
  newsletter.classList.add('newsletter');

  const container = document.createElement('div');
  container.classList.add('container', 'wide');

  const h2 = document.createElement('h2');
  h2.textContent = 'Sweet Updates Await!';

  const h3 = document.createElement('h3');
  h3.textContent = 'Subscribe for Exclusive Offers:';

  const p = document.createElement('p');
  p.textContent = 'Stay in the loop with Waffle Haven. Sign up for our newsletter to receive mouthwatering updates, promotions, and insider news. New subscribers enjoy an exclusive welcome discount. Subscribe now and let the sweet surprises roll in!';

  const form = document.createElement('form');

  const mail = document.createElement('input');
  mail.setAttribute('type', 'email');
  mail.setAttribute('name', 'mail');
  mail.setAttribute('required', '');
  mail.setAttribute('placeholder', 'Enter your E-Mail here...');
  mail.id = 'mail';

  const submit = document.createElement('button');
  submit.textContent = 'Sign Up!';
  submit.id = 'newsletter-signup';

  //disable submit button
  submit.addEventListener('click', (e) => {
    e.preventDefault();
  });

  form.replaceChildren(mail, submit);

  container.replaceChildren(h2, h3, p, form);

  newsletter.appendChild(container);

  return newsletter;
}
;// CONCATENATED MODULE: ./src/modules/footer.js
/* harmony default export */ function footer() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const container = document.createElement('div');
  container.classList.add('container', 'wide');

  const socials = document.createElement('div');
  socials.classList.add('socials');

  const h4 = document.createElement('h4');
  h4.textContent = 'Waffle Haven on Social Media:';

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const icons = ['facebook', 'instagram', 'twitter'];

  icons.forEach(icon => {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    const span = document.createElement('span');
    span.classList.add('icon', icon);

    a.appendChild(span);
    wrapper.appendChild(a);
  });

  socials.replaceChildren(h4, wrapper);
  container.appendChild(socials);

  footer.appendChild(container);

  return footer;
}
;// CONCATENATED MODULE: ./src/modules/menu.js
/* harmony default export */ function menu() {
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
;// CONCATENATED MODULE: ./src/modules/about.js
/* harmony default export */ function about() {
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
;// CONCATENATED MODULE: ./src/modules/contact.js
/* harmony default export */ function contact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const container = document.createElement('div');
  container.classList.add('container', 'narrow');

  const content = [
    {
      description: 'We\'d love to hear from you! Whether you have a question, feedback, or just want to say hello, reaching out to Waffle Haven is easy.'
    },
    {
      title: 'Customer Service',
      description: 'Feel free to call our Customer Service team at <a href="tel:555-555-5555">555-555-5555</a> during our working hours. We\'re here to assist you with any inquiries or concerns.'
    },
    {
      title: 'Visit Us',
      description: 'If you prefer face-to-face interaction, visit any of our four locations.'
    },
    {
      title: 'Email Us',
      description: 'For general inquiries or feedback, drop us an email at <a href="mailto:mail@example.com">mail@example.com</a>. We\'ll get back to you as soon as possible.'
    },
    {
      title: 'Social Media',
      description: 'Connect with us on social media for the latest updates, behind-the-scenes glimpses, and customer interactions. Follow us on <span icon facebook small></span> <span icon instagram small></span> <span icon twitter small></span> and share your Waffle Haven moments using #WaffleHaven.'
    },
    {
      title: 'Feedback Form',
      description: 'Have a specific comment or suggestion? Use our online feedback form to share your thoughts. Your input is invaluable as we strive to enhance your Waffle Haven experience.'
    }
  ];

  content.forEach(item => {
    if (item.title) {
      const h2 = document.createElement('h2');
      h2.textContent = item.title;

      container.appendChild(h2);
    }

    const p = document.createElement('p');
    p.innerHTML = item.description;

    container.appendChild(p);
  });

  const form = document.createElement('form');

  const formFields = [
    {
      type: 'text',
      id: 'first-name',
      placeholder: 'Enter your first name...',
      labelText: 'First Name'
    },
    {
      type: 'text',
      id: 'second-name',
      placeholder: 'Enter your second name...',
      labelText: 'Second Name'
    },
    {
      type: 'email',
      id: 'mail',
      placeholder: 'Enter your E-Mail...',
      labelText: 'E-Mail'
    },
    {
      type: 'textarea',
      id: 'feedback',
      placeholder: 'Write your feedback here...',
      labelText: 'Feedback'
    },
  ];
  
  formFields.forEach(field => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    let input;
    if (field.type == 'textarea') {
      input = document.createElement('textarea');
      input.setAttribute('maxlength', '500')
    } else {
      input = document.createElement('input');
      input.setAttribute('type', field.type);
    }
    input.id = field.id;
    input.setAttribute('name', field.id);
    input.setAttribute('placeholder', field.placeholder);
    input.setAttribute('required', '');

    const label = document.createElement('label');
    label.setAttribute('for', field.id);
    label.textContent = field.labelText;

    wrapper.replaceChildren(label, input);

    form.appendChild(wrapper);
  });

  const submit = document.createElement('button');
  submit.id = 'feedback-submit';
  submit.textContent = 'Submit!';
  //disable submit button
  submit.addEventListener('click', (e) => {
    e.preventDefault();
  });

  form.appendChild(submit);

  container.appendChild(form);

  const p = document.createElement('p');
  p.textContent = 'Thank you for choosing Waffle Haven. We look forward to connecting with you and ensuring your time with us is as delightful as our waffles!';

  container.appendChild(p);

  contact.appendChild(container);

  return contact;
}
;// CONCATENATED MODULE: ./src/index.js












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
/******/ })()
;
//# sourceMappingURL=main.js.map