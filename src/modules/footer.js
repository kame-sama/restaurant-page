export default function() {
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