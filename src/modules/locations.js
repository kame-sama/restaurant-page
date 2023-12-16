export default function() {
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