export default function() {
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