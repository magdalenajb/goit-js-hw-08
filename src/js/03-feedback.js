import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const btn = document.querySelector('button[type="submit"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(() => {
    let inputValues = {
      email: email.value,
      textarea: textarea.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputValues));
  }, 500)
);

let storageValue = localStorage.getItem(LOCALSTORAGE_KEY);

if (storageValue !== null) {
  email.value = JSON.parse(storageValue).email;
  textarea.value = JSON.parse(storageValue).textarea;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log({
    email: email.value,
    textarea: textarea.value,
  });

  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
});
