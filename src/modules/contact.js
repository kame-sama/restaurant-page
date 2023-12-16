export default function() {
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